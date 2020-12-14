import React, { useState, useEffect } from "react";
import MathJax from "react-mathjax";

import {
  Grid,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

import TwoViewSection from "./two-view-section";
import ThreeViewSection from "./three-view-section";
import ChartsLibsSection from "./charts-libs-section";
import OptionAddon from "../../../components/Button/optionAddon";
import { getItems } from "../../../API";

const INIT_CHECK_STATUS = {
  show_surface: true,
  show_scatter: true,
};

function createData(name: String, value: String) {
  return { name, value };
}

const rows = [
  createData("Average (sec)", "xx"),
  createData("Time-Averaged Gap", "xx"),
  createData("Median (sec)", "xx"),
  createData("Maximum (minutes)", "xx"),
  createData("Minimum (sec)", "xx"),
  createData("Average # Gaps Per Orbit", "xx"),
  createData("Average # Gaps Per Day", "xx"),
];

function AnalyzeRegressionSection(props: any) {
  const [viewMethod, setViewMethod] = useState("2d_view");
  const [dataSet, setDataSet] = useState("as_needed_handoff" as any);
  const [lineType, setLineType] = useState("coverage" as any);
  const [checked, setChecked] = useState(INIT_CHECK_STATUS);
  const [traces, setTraces] = useState({} as any);
  const [reset, setReset] = useState(false);
  const [selected, setSelected] = useState(false);
  const plot_rows = props.data.plot_value;
  const surface_rows: Array<any> = [];
  const zAxisLabel = props.data.label;

  useEffect(() => {
    getItems(dataSet)
      .then((res) => {
        Object.keys(res.data).map((el) => {
          let ctype: String = res.data[el]["type"];
          let gaps: Array<any> = [];
          let durations: Array<any> = [];
          let avgs: Array<any> = [];

          // Detect chart type and set Traces
          if (ctype === "line") {
            res.data[el]["data"].map((item: Array<any>, idx: number) => {
              gaps.push(idx + 1);
              durations.push(item[0]);
                avgs.push(item[1]);
            });

            setTraces((prevState: any) => ({
              ...prevState,
              [el]: {
                xTraces: gaps,
                yTraces: durations,
                avgTraces: avgs,
                type: ctype,
                title: res.data[el]["title"],
              },
            }));
          } else if (ctype === "histogram") {
            setTraces((prevState: any) => ({
              ...prevState,
              [el]: {
                xTraces: res.data[el]["data"],
                type: ctype,
                title: res.data[el]["title"],
              },
            }));
          }
        });
      })
      .catch(() => {
        setTraces({});
      });
  }, [dataSet]);

  const handleCheck = (event: any) => {
    const { name, checked } = event.currentTarget;
    setChecked((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleDataSetClick = (event: any) => {
    event.preventDefault();
    const { id, name } = event.currentTarget;
    setDataSet(id);
    setLineType(name);
  };

  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item md={12}>
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          spacing={1}
          style={{ backgroundColor: grey[200], minHeight: "10vh" }}
        >
          <Grid item md={3}>
            <Button
              id="as_needed_handoff"
              name="coverage"
              variant="contained"
              size="small"
              onClick={handleDataSetClick}
              style={{ marginLeft: "15px" }}
              fullWidth
            >
              {`RF Coverage (%)`}
            </Button>
          </Grid>
          <Grid item md={2}>
            <Button
              id="maximum_powee_handoff"
              name="gap"
              variant="contained"
              size="small"
              onClick={handleDataSetClick}
              style={{ marginLeft: "15px" }}
              fullWidth
            >
              {`Gap (%)`}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={12} style={{ marginLeft: "15px" }}>
        <OptionAddon
          checked={checked}
          viewMethod={viewMethod}
          onChecked={handleCheck}
          resetPlot={() => setReset(!reset)}
          onViewMethod={(e: any) => setViewMethod(e.currentTarget.name)}
        />
      </Grid>

      {/* FIXME: check at the process of cart integration.
      <Grid item md={12} style={{ zIndex: 1000 }}>
        <MathJax.Provider>
          <MathJax.Node formula={props.text} />
        </MathJax.Provider>
      </Grid> */}

      <Grid item md={12} style={{ textAlign: "center" }}>
        <Typography variant="h6">
          {dataSet === "as_needed_handoff"
            ? `RF Coverage (%) vs. User Inclination`
            : `GAP (%) vs. User Inclination`}
        </Typography>
      </Grid>
      <Grid item md={12} style={{ marginLeft: "15px" }}>
        <Grid container justify="center" spacing={2}>
          {viewMethod === "3d_view" ? (
            <Grid item md={12}>
              <ThreeViewSection
                data={props.data}
                equation={props.equation}
                maxAltitude={props.maxAltitude}
                alt={props.alt}
                inc={props.inc}
                value={props.value}
                reset={reset}
                isLegend={false}
                isSub={true}
                plot_rows={plot_rows}
                surface_rows={surface_rows}
                zAxisLabel={zAxisLabel}
                checked={checked}
                onClick={() => setSelected(true)}
              />
            </Grid>
          ) : (
            <Grid item md={12}>
              <TwoViewSection
                data={props.data}
                equation={props.equation}
                maxAltitude={props.maxAltitude}
                alt={props.alt}
                inc={props.inc}
                value={props.value}
                isLegend={false}
                isSub={true}
                plot_rows={plot_rows}
                surface_rows={surface_rows}
                yAxisLabel={zAxisLabel}
                checked={checked}
                onClick={() => setSelected(true)}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
      {selected && (
        <>
          <Grid item md={10} style={{ textAlign: "center" }}>
            <Typography variant="h6">{`Key Metrics`}</Typography>
          </Grid>
          <Grid item md={10}>
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{`Gap Statistic`}</TableCell>
                  <TableCell>{`Value`}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row: any) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </>
      )}
      <ChartsLibsSection isTable={selected} traces={traces} dataSet={dataSet} />
    </Grid>
  );
}

export default AnalyzeRegressionSection;
