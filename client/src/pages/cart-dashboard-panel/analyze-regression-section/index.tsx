import React, { useState, useEffect, useRef } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  DialogContent,
} from "@material-ui/core";
import TwoViewSection from "./two-view-section";
import ThreeViewSection from "./three-view-section";
import ChartsLibsSection from "./charts-libs-section";
import HeaderSection from "./header-section";
import OptionAddon from "../../../components/Button/OptionAddon";
import {
  getItems,
  getSystems,
  getSystemVersion,
  getFileId,
} from "../../../API";

const INIT_FILE_ID = [{ id: 1620 }, { id: 1729 }];

const INIT_CHECK_STATUS = {
  show_surface: true,
  show_scatter: true,
};

const viewStyle = {
  paddingLeft: "2rem",
  paddingRight: "0.8rem",
};

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
  const [count, setCount] = useState({ width: "0px", height: "0px" });
  const chartEl: any = useRef();
  const plot_rows = props.data.plot_value;
  const surface_rows: Array<any> = [];
  const zAxisLabel = props.data.label;
  
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
    if (props.inclination !== "") {
      const params = {
        user_altitude: dot.x,
        user_inclination: props.inclination,
        system: props.system,
        version: props.version,
      };

      getFileId(params)
        .then((res: any) => setFileId(res.data))
        .catch((err: any) => setFileId([]));
    }
  }, [props.inclination]);

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

  useEffect(() => {
    if (chartEl) {
      let size = window.getComputedStyle(chartEl.current);
      setCount({ width: size.width, height: size.height });
    }
  }, [chartEl, traces]);

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
  };

  return (
    <DialogContent
      dividers={true}
      ref={chartEl}
      style={{ paddingRight: 0, paddingLeft: 0, overflowX: "hidden" }}
    >
      <Grid container justify="center" alignItems="center" spacing={2}>
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
        <Grid item md={6} style={viewStyle}>
          <Card style={{ height: `calc(${count.height} * 0.4)` }}>
            <CardContent>
              <Grid container justify="center" spacing={2}>
                <Grid
                  item
                  md={12}
                  style={{ textAlign: "center", position: "relative" }}
                >
                  <Typography
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                    }}
                  >
                    {dataSet === "as_needed_handoff"
                      ? `RF Coverage (%)`
                      : `No Coverage (%)`}
                    {` vs. User Inclination`}
                  </Typography>
                  <OptionAddon
                    source={props.data}
                    checked={checked}
                    viewMethod={viewMethod}
                    inc={props.inclination}
                    incs={props.incs}
                    onInc={(value: any) => props.onInc(value)}
                    onChecked={handleCheck}
                    resetPlot={() => setReset(!reset)}
                    onViewMethod={(e: any) =>
                      setViewMethod(e.currentTarget.name)
                    }
                  />
                </Grid>
                {viewMethod === "3d_view" ? (
                  <Grid item md={12}>
                    <ThreeViewSection
                      data={props.data}
                      equation={props.equation}
                      maxAltitude={props.maxAltitude}
                      alt={props.alt}
                      inc={
                        props.inclination !== "" ? props.inclination : props.inc
                      }
                      value={props.value}
                      reset={reset}
                      isLegend={false}
                      isSub={true}
                      plot_rows={plot_rows}
                      surface_rows={surface_rows}
                      zAxisLabel={zAxisLabel}
                      checked={checked}
                      size={count}
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
                      inc={
                        props.inclination !== "" ? props.inclination : props.inc
                      }
                      value={props.value}
                      isLegend={false}
                      isSub={true}
                      plot_rows={plot_rows}
                      surface_rows={surface_rows}
                      yAxisLabel={zAxisLabel}
                      dot={dot}
                      size={count}
                      checked={checked}
                      onClick={handleClick}
                    />
                  </Grid>
                )}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        {fileId.length === 0 && <Grid item md={6} />}
        {Object.keys(traces).length > 0 && (
          <ChartsLibsSection
            traces={traces}
            dataSet={dataSet}
            dataType={props.dataType}
            size={count}
          />
        )}
      </Grid>
    </DialogContent>
  );
}

export default AnalyzeRegressionSection;
