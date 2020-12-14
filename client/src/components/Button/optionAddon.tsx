import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  Tooltip,
  IconButton,
  Divider,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import useStyles from "../../utils/styles";

function OptionAddon(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ marginBottom: 10 }}
    >
      <Grid item md={4}></Grid>
      <Grid item md={8}>
        <Typography component="p" style={{ textAlign: "end" }}>
          <IconButton
            size="small"
            onClick={() => setIsOpen(!isOpen)}
            className="mt-2 mb-2"
            style={{ fontSize: 14 }}
          >
            {`Graph Options`}
            {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Typography>
      </Grid>
      {isOpen && (
        <Grid item md={12} style={{ marginRight: 5 }}>
          <Box
            borderColor="primary.main"
            border={2}
            borderRadius={5}
            padding={2}
          >
            <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid item md={3}>
                <Grid
                  container
                  justify="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item md={5}>
                    <Button
                      id={props.type}
                      name="2d_view"
                      variant="outlined"
                      size="small"
                      onClick={(e) => props.onViewMethod(e)}
                      fullWidth
                    >
                      {"2D"}
                    </Button>
                  </Grid>
                  <Grid item md={7} />
                  <Grid item md={5}>
                    <Button
                      name="3d_view"
                      variant="outlined"
                      size="small"
                      onClick={(e) => props.onViewMethod(e)}
                      fullWidth
                    >
                      {"3D"}
                    </Button>
                  </Grid>
                  <Grid item md={7} />
                </Grid>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item md={5}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="show_surface"
                      checked={props.checked.show_surface}
                      size="small"
                      onChange={(e) => props.onChecked(e)}
                      color="primary"
                    />
                  }
                  classes={{ label: classes.label }}
                  label="Show Regression Model Surface"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="show_scatter"
                      checked={props.checked.show_scatter}
                      size="small"
                      onChange={(e) => props.onChecked(e)}
                      color="primary"
                    />
                  }
                  classes={{ label: classes.label }}
                  label="Show Underlying Data"
                />
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item md={3}>
                <Tooltip
                  title={
                    <Typography
                      gutterBottom
                      component="p"
                      variant="body1"
                      dangerouslySetInnerHTML={{
                        __html: "Reset 3D plot",
                      }}
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
                      disabled={props.viewMethod === "2d_view" ? true : false}
                      onClick={() => props.resetPlot()}
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
      )}
    </Grid>
  );
}

export default OptionAddon;
