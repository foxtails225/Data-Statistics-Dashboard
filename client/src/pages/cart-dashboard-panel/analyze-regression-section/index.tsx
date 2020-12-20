import React, { useState, useEffect } from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import TwoViewSection from "./two-view-section";
import ThreeViewSection from "./three-view-section";
import ChartsLibsSection from "./charts-libs-section";
import HeaderSection from "./header-section";
import OptionAddon from "../../../components/Button/OptionAddon";
import useStyles from "../../../utils/styles";
import {
  getItems,
  getSystems,
  getSystemVersion,
  getFileId,
} from "../../../API";

const INIT_CHECK_STATUS = {
  show_surface: true,
  show_scatter: true,
};

const INIT_FILE_ID = [{ id: 1620 }, { id: 1729 }];

function AnalyzeRegressionSection(props: any) {
  const [viewMethod, setViewMethod] = useState("2d_view");
  const [dataSet, setDataSet] = useState("as_needed_handoff" as any);
  const [systems, setSystems] = useState([] as any);
  const [versions, setVersions] = useState([] as any);
  const [dot, setDot] = useState({ x: props.alt, y: props.value } as any);
  const [fileId, setFileId] = useState(INIT_FILE_ID);
  const [checked, setChecked] = useState(INIT_CHECK_STATUS);
  const [traces, setTraces] = useState({} as any);
  const [reset, setReset] = useState(false);
  const [selected, setSelected] = useState(false);
  const plot_rows = props.data.plot_value;
  const surface_rows: Array<any> = [];
  const zAxisLabel = props.data.label;
  const classes = useStyles();

  useEffect(() => {
    if (fileId.length > 0)
      getItems({
        dataType: props.dataType,
        fileId: fileId,
        version: props.version,
      })
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
  }, [props.dataType, props.version, fileId]);

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

  useEffect(() => {
    setDot({
      x: props.data.plot_value[0].altitude,
      y: props.data.plot_value[0].value,
    });
  }, [props.data]);

  const handleCheck = (event: any) => {
    const { name, checked } = event.currentTarget;
    setChecked((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleDataSetClick = (event: any) => {
    event.preventDefault();
    const { id, name } = event.currentTarget;

    setDataSet(id);
    props.onDataType(name);
  };

  const handleClick = (event: any) => {
    if (event) {
      const params = {
        user_altitude: event.points[0].x,
        user_inclination: props.inc,
        system: props.system,
        version: props.version,
      };

      setDot({ x: event.points[0].x, y: event.points[0].y });
      getFileId(params)
        .then((res: any) => setFileId(res.data))
        .catch((err: any) => setFileId([]));
    }
    setSelected(true);
  };
  
  return (
    <Grid container justify="center" alignItems="flex-start" spacing={2}>
      <HeaderSection
        system={props.system}
        systems={systems}
        version={props.version}
        versions={versions}
        dataSet={dataSet}
        onSystem={(value: any) => props.onSystem(value)}
        onVersion={(value: any) => props.onVersion(value)}
        onClick={handleDataSetClick}
      />
      <Grid item md={6} style={{ paddingLeft: "2rem" }}>
        <Card className={classes.dashCard}>
          <CardContent>
            <Grid container justify="center" spacing={2}>
              <Grid item md={12} style={{ textAlign: "center" }}>
                <Typography variant="h6">
                  {dataSet === "as_needed_handoff"
                    ? `RF Coverage (%) vs. User Inclination`
                    : `No Coverage (%) vs. User Inclination`}
                </Typography>
              </Grid>
              <Grid item md={12} style={{ marginLeft: "15px", padding: 0 }}>
                <OptionAddon
                  checked={checked}
                  viewMethod={viewMethod}
                  onChecked={handleCheck}
                  resetPlot={() => setReset(!reset)}
                  onViewMethod={(e: any) => setViewMethod(e.currentTarget.name)}
                />
              </Grid>
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
                    dot={dot}
                    checked={checked}
                    onClick={handleClick}
                  />
                </Grid>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      {selected && <></>}
      {fileId.length === 0 && <Grid item md={6} />}
      {Object.keys(traces).length > 0 && (
        <ChartsLibsSection traces={traces} dataSet={dataSet} />
      )}
    </Grid>
  );
}

export default AnalyzeRegressionSection;
