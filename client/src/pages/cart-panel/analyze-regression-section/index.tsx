import React, { useState, useEffect } from "react";

import {
  Grid,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";

import TwoViewSection from "./two-view-section";
import ThreeViewSection from "./three-view-section";
import ChartsLibsSection from "./charts-libs-section";
import OptionAddon from "../../../components/Button/OptionAddon";
import {
  getItems,
  getSystems,
  getSystemVersion,
  getFileId,
} from "../../../API";
import useStyles from "../../../utils/styles";

const INIT_CHECK_STATUS = {
  show_surface: true,
  show_scatter: true,
};

function AnalyzeRegressionSection(props: any) {
  const [viewMethod, setViewMethod] = useState("2d_view");
  const [dataSet, setDataSet] = useState("as_needed_handoff" as any);
  const [systems, setSystems] = useState([] as any);
  const [versions, setVersions] = useState([] as any);
  const [fileId, setFileId] = useState([] as any);
  const [lineType, setLineType] = useState("coverage" as any);
  const [checked, setChecked] = useState(INIT_CHECK_STATUS);
  const [traces, setTraces] = useState({} as any);
  const [reset, setReset] = useState(false);
  const [selected, setSelected] = useState(false);
  const classes = useStyles();
  const plot_rows = props.data.plot_value;
  const surface_rows: Array<any> = [];
  const zAxisLabel = props.data.label;

  useEffect(() => {
    if (fileId.length > 0)
      getItems({ dataSet, fileId: fileId, version: props.version })
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
  }, [dataSet, fileId]);

  useEffect(() => {
    getSystems()
      .then((res: any) => setSystems(res.data))
      .catch((err: any) => setSystems([]));
  }, []);

  useEffect(() => {
    if (props.system !== "") {
      getSystemVersion({ system: props.system })
        .then((res: any) => setVersions(res.data))
        .catch((err: any) => setVersions([]));
    }
  }, [props.system]);

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

  const handleClick = (event: any) => {
    if (event) {
      const params = {
        user_altitude: event.points[0].x,
        user_inclination: props.inc,
        system: props.system,
        version: props.version,
      };

      getFileId(params)
        .then((res: any) => setFileId(res.data))
        .catch((err: any) => setFileId([]));
    }
    setSelected(true);
  };

  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item md={12}>
        <Grid
          container
          justify="flex-start"
          alignItems="center"
          spacing={2}
          style={{ backgroundColor: grey[300], minHeight: "10vh" }}
        >
          <Grid item md={4} style={{ marginLeft: 15 }}>
            <ToggleButtonGroup value={dataSet} onChange={handleDataSetClick}>
              <ToggleButton
                id="as_needed_handoff"
                name="coverage"
                value="as_needed_handoff"
                size="small"
              >
                {`RF Coverage (%)`}
              </ToggleButton>
              <ToggleButton
                id="gap maximum_powee_handoff"
                name="gap"
                value="gap maximum_powee_handoff"
                size="small"
              >
                {`Gap (%)`}
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item md={3} style={{ marginLeft: "15px" }}>
            <FormControl
              variant="outlined"
              size="small"
              className={classes.formControl}
              fullWidth
            >
              <InputLabel id="demo-simple-select-outlined-label">{`System`}</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={props.system}
                onChange={(e) => props.onSystem(e.target.value)}
                label="System"
              >
                <MenuItem value="" disabled>
                  <em>{`None`}</em>
                </MenuItem>
                {systems.map((item: any) => (
                  <MenuItem key={item.system_name} value={item.system_id}>
                    {item.system_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={3}>
            <FormControl
              variant="outlined"
              size="small"
              className={classes.formControl}
              fullWidth
            >
              <InputLabel id="demo-simple-select-outlined-label">{`Version`}</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={props.version}
                onChange={(e) => props.onVersion(e.target.value)}
                label="Version"
              >
                <MenuItem value="" disabled>
                  <em>{`None`}</em>
                </MenuItem>
                {versions.map((item: any) => (
                  <MenuItem
                    key={`version_${item.versions}`}
                    value={item.versions}
                  >
                    {item.versions}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={12} style={{ textAlign: "center" }}>
        <Typography variant="h6">
          {dataSet === "as_needed_handoff"
            ? `RF Coverage (%) vs. User Inclination`
            : `GAP (%) vs. User Inclination`}
        </Typography>
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

      <Grid item md={12}>
        <Card style={{ marginLeft: "2.5rem", marginRight: "2.5rem" }}>
          <CardContent>
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
                  onClick={handleClick}
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
                  onClick={handleClick}
                />
              </Grid>
            )}
          </CardContent>
        </Card>
      </Grid>
      {selected && <></>}
      <ChartsLibsSection traces={traces} dataSet={dataSet} />
    </Grid>
  );
}

export default AnalyzeRegressionSection;
