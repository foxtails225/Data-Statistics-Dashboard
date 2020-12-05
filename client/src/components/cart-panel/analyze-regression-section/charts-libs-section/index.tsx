import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { getItems } from "../../../../API";
import MinusAddon from "./add-on/minusAddon";
import PlusAddon from "./add-on/plusAddon";
import ContentAddon from "./add-on/contentAddon";
import LineChartSection from "../../../chart-panel/line-chart-section";
import HistogramChartSection from "../../../chart-panel/histogram-chart-section";
import BoxChartSection from "../../../chart-panel/box-chart-section";

const MENU_ITEMS = [
  { id: 1, dataset: "coverage", name: "Running Average" },
  { id: 2, dataset: "coverage_histogram", name: "Distribution" },
  { id: 3, dataset: "coverage", name: "Statistics Chart" },
];

function ChartsLibsSection() {
  const [traces, setTraces] = useState({} as any);
  const [selected, setSelected] = useState([] as any);
  const [anchorEl, setAnchorEl] = useState(null as any);

  useEffect(() => {
    if (selected.length > 0) {
      getItems("as_needed_handoff")
        .then((res) => {
          let data = eval("[" + res.data + "]")[0];

          Object.keys(data).map((el) => {
            let ctype: String = data[el]["type"];
            let gaps: Array<any> = [];
            let durations: Array<any> = [];
            let avgs: Array<any> = [];

            // Detect chart type and set Traces
            if (ctype === "line") {
              data[el]["data"].map((item: Array<any>, idx: number) => {
                gaps.push(idx + 1);
                durations.push(item[3]);
                avgs.push(item[4]);
              });

              setTraces((prevState: any) => ({
                ...prevState,
                [el]: {
                  xTraces: gaps,
                  yTraces: durations,
                  avgTraces: avgs,
                  type: ctype,
                  title: data[el]["title"],
                },
              }));
            } else if (ctype === "histogram") {
              setTraces((prevState: any) => ({
                ...prevState,
                [el]: {
                  xTraces: data[el]["data"],
                  type: ctype,
                  title: data[el]["title"],
                },
              }));
            }
          });
        })
        .catch(() => {
          setTraces({});
        });
    }
  }, [selected]);

  const handleSelected = (id: any, type: string) => {
    if (!selected.includes(id) && type === "add") {
      setSelected((prevState: any) => [...prevState, id]);
    } else if (type === "remove") {
      setSelected(selected.filter((item: any) => item !== id));
    }
    setAnchorEl(null);
  };
  
  return (
    <>
      {selected.length === 0 && (
        <PlusAddon
          selected={selected}
          anchorEl={anchorEl}
          onAnchorEl={(value: any) => setAnchorEl(value)}
          onSelected={(value: any) => handleSelected(value, "add")}
        />
      )}
      {MENU_ITEMS.map(
        (item: any) =>
          Object.keys(traces).includes(item.dataset) &&
          selected.includes(item.id) && (
            <React.Fragment key={item.id}>
              <MinusAddon
                id={item.id}
                selected={selected}
                anchorEl={anchorEl}
                onAnchorEl={(value: any) => setAnchorEl(value)}
                onSelected={(value: any) => handleSelected(value, "remove")}
              />
              <Grid item md={9}>
                {item.id === 1 && (
                  <LineChartSection {...traces[item.dataset]} />
                )}
                {item.id === 2 && (
                  <HistogramChartSection {...traces[item.dataset]} />
                )}
                {item.id === 3 && (
                  <BoxChartSection {...traces[item.dataset]} />
                )}
              </Grid>
              <ContentAddon />
              {selected.sort()[selected.length - 1] === item.id && (
                <PlusAddon
                  selected={selected}
                  anchorEl={anchorEl}
                  onAnchorEl={(value: any) => setAnchorEl(value)}
                  onSelected={(value: any) => handleSelected(value, "add")}
                />
              )}
            </React.Fragment>
          )
      )}
    </>
  );
}

export default ChartsLibsSection;
