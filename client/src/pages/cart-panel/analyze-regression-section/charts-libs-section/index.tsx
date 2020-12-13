import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";

import MinusAddon from "../../../../components/Button/minusAddon";
import PlusAddon from "../../../../components/Button/plusAddon";
import LineChartSection from "../../../chart-panel/line-chart-section";
import HistogramChartSection from "../../../chart-panel/histogram-chart-section";
import BoxChartSection from "../../../chart-panel/box-chart-section";
import * as Constants from "../../../../constants";
import useStyles from "../../../../utils/styles";

function ChartsLibsSection(props: any) {
  const [selected, setSelected] = useState([] as any);
  const [anchorEl, setAnchorEl] = useState(null as any);
  const classes = useStyles();

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
      {props.isTable && selected.length === 0 && (
        <PlusAddon
          selected={selected}
          anchorEl={anchorEl}
          onAnchorEl={(value: any) => setAnchorEl(value)}
          onSelected={(value: any) => handleSelected(value, "add")}
        />
      )}
      {
        // @ts-ignore
        Constants.MENU_ITEMS[props.dataSet].map(
          (item: any) =>
            Object.keys(props.traces).includes(item.dataset) &&
            selected.includes(item.id) && (
              <React.Fragment key={item.id}>
                <MinusAddon
                  id={item.id}
                  selected={selected}
                  anchorEl={anchorEl}
                  onAnchorEl={(value: any) => setAnchorEl(value)}
                  onSelected={(value: any) => handleSelected(value, "remove")}
                />
                <Grid item md={12}>
                  {item.id === 1 && (
                    <LineChartSection {...props.traces[item.dataset]} />
                  )}
                  {item.id === 2 && (
                    <HistogramChartSection {...props.traces[item.dataset]} />
                  )}
                  {item.id === 3 && (
                    <BoxChartSection {...props.traces[item.dataset]} />
                  )}
                </Grid>
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
        )
      }
    </>
  );
}

export default ChartsLibsSection;
