import React, { useState } from "react";
import MathJax from "react-mathjax";

import {
  Grid,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  Tooltip,
  Typography,
  IconButton,
  Divider,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import TwoViewSection from "./two-view-section";
import ThreeViewSection from "./three-view-section";
import ChartsLibsSection from "./charts-libs-section";
import useStyles from "../../../utils/styles";

const INIT_CHECK_STATUS = {
  show_surface: true,
  show_scatter: true,
};

function AnalyzeRegressionSection(props: any) {
  const [viewMethod, setViewMethod] = useState("2d_view");
  const [checked, setChecked] = useState(INIT_CHECK_STATUS);
  const [isOpen, setIsOpen] = useState(false);
  const [reset, setReset] = useState(false);
  const plot_rows = props.data.plot_value;
  const surface_rows: Array<any> = [];
  const zAxisLabel = props.data.label;
  const classes = useStyles();

  const handleViewChange = (event: any) => {
    const { name } = event.currentTarget;
    setViewMethod(name);
  };

  const handleCheck = (event: any) => {
    const { name, checked } = event.currentTarget;
    setChecked((prevState) => ({ ...prevState, [name]: checked }));
  };

  const resetPlot = () => {
    setReset(!reset);
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={2}
      style={{ height: "500px" }}
    >
      <Grid item md={8}></Grid>
      <Grid item md={4}>
        <Typography component="p" variant="body1" style={{ textAlign: "end" }}>
          <IconButton
            size="small"
            onClick={() => setIsOpen(!isOpen)}
            className="mt-2 mb-2"
          >
            {`Graph Options`}
            {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Typography>
      </Grid>
      {isOpen && (
        <>
          <Grid item md={12}>
            <Box
              borderColor="primary.main"
              border={2}
              borderRadius={5}
              padding={2}
              style={{ zIndex: 1000 }}
            >
              <Grid container justify="center" alignItems="center">
                <Grid item md={3}>
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item md={12}>
                      <Button
                        id={props.type}
                        name="2d_view"
                        variant="outlined"
                        size="small"
                        onClick={handleViewChange}
                        style={{ width: "48%", marginRight: "4%" }}
                        className="mb-2"
                      >
                        {"2D"}
                      </Button>
                    </Grid>
                    <Grid item md={12}>
                      <Button
                        name="3d_view"
                        variant="outlined"
                        size="small"
                        onClick={handleViewChange}
                        style={{ width: "48%" }}
                      >
                        {"3D"}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item md={6} style={{ marginLeft: "2vw" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="show_surface"
                        checked={checked.show_surface}
                        size="small"
                        onChange={handleCheck}
                        color="primary"
                      />
                    }
                    label="Show Regression Model Surface"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="show_scatter"
                        checked={checked.show_scatter}
                        size="small"
                        onChange={handleCheck}
                        color="primary"
                      />
                    }
                    label="Show Underlying Data"
                  />
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item md={2} style={{ marginLeft: "2vw" }}>
                  <Tooltip
                    title={
                      <Typography
                        gutterBottom
                        component="p"
                        variant="body1"
                        dangerouslySetInnerHTML={{ __html: "Reset 3D plot" }}
                      />
                    }
                    placement="top-start"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <span>
                      <Button
                        id={props.type}
                        name="Reset"
                        variant="outlined"
                        size="small"
                        disabled={viewMethod === "2d_view" ? true : false}
                        onClick={resetPlot}
                        fullWidth
                      >
                        {"Reset"}
                      </Button>
                    </span>
                  </Tooltip>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </>
      )}
      <Grid item md={12} style={{ zIndex: 1000 }}>
        <MathJax.Provider>
          <MathJax.Node formula={props.text} />
        </MathJax.Provider>
      </Grid>
      {viewMethod === "3d_view" ? (
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
        />
      ) : (
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
        />
      )}
      <ChartsLibsSection />
    </Grid>
  );
}

export default AnalyzeRegressionSection;
