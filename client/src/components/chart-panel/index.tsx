import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

import {
  Grid,
  Container,
  CssBaseline,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Select,
  MenuItem,
  Tab,
  Tabs,
  AppBar,
  Box,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { useTheme } from "@material-ui/core/styles";

import { getItems } from "../../API";
import useStyles from "../../utils/styles";
import LineChartSection from "./line-chart-section";
import HistogramChartSection from "./histogram-chart-section";
import BoxChartSection from "./box-chart-section";
import TerrestrialHeatMap from "./terrestrial-heatmap-chart";

const INIT_MENUS = [
  { id: "as_needed_handoff", name: "Power below threshold handoff" },
  { id: "maximum_powee_handoff", name: "Maximum power immediate handoff" },
];

const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function ChartPanel() {
  const [traces, setTraces] = useState({} as any);
  const [selected, setSelected] = useState("none");
  const [tab, setTab] = useState(0);
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    if (selected !== "none")
      getItems(selected)
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
  }, [selected]);

  return (
    <Grid container>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Card className={classes.chartCard}>
          <CardHeader
            title={
              <Typography component="h1" variant="h5" className="m-3">
                {`CART Data Statistics Dashboard (Prototype)`}
              </Typography>
            }
          />
          <CardContent className="ml-3 mr-3">
            <AppBar position="static" color="default">
              <Tabs
                value={tab}
                onChange={(e, val) => setTab(val)}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Data Statistics Dashboard" {...a11yProps(0)} />
                <Tab label="Heat Map" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={tab}
              onChangeIndex={(index: any) => setTab(index)}
            >
              <TabPanel value={tab} index={0}>
                <Grid
                  container
                  spacing={3}
                  justify="center"
                  alignItems="center"
                >
                  <Grid item md={4}>
                    <Select
                      name=""
                      value={selected}
                      onChange={(e: any) => setSelected(e.target.value)}
                      className={classes.searchSelect}
                      style={selected === "none" ? { color: grey[500] } : {}}
                      fullWidth
                    >
                      <MenuItem value="none" style={{ opacity: 0.87 }} disabled>
                        {"Select Data Set…"}
                      </MenuItem>
                      {INIT_MENUS.map((item) => (
                        <MenuItem value={item.id} key={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item md={8}></Grid>
                  {Object.keys(traces).map((item) => (
                    <Grid item md={6} key={item}>
                      <Grid container spacing={3}>
                        {traces[item].type === "line" && (
                          <Grid item md={12}>
                            <LineChartSection {...traces[item]} />
                          </Grid>
                        )}
                        {traces[item].type === "histogram" && (
                          <>
                            <Grid item md={12}>
                              <HistogramChartSection {...traces[item]} />
                            </Grid>
                            <Grid item md={12}>
                              <BoxChartSection {...traces[item]} />
                            </Grid>
                          </>
                        )}
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
              <TabPanel value={tab} index={1}>
                <Grid container justify="center" alignItems="center">
                  <Grid item md={12}>
                    <TerrestrialHeatMap />
                  </Grid>
                </Grid>
              </TabPanel>
            </SwipeableViews>
          </CardContent>
        </Card>
      </Container>
    </Grid>
  );
}

export default ChartPanel;
