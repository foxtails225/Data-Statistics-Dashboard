import React, { useState } from "react";
import {
  Grid,
  Button,
  Box,
  Typography,
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
    <>
      <Typography
        component="p"
        style={{ textAlign: "end", position: "absolute", right: 10, top: 10 }}
      >
        <IconButton
          size="small"
          onClick={() => setIsOpen(!isOpen)}
          className="mt-2 mb-2"
          style={{ fontSize: 11 }}
        >
          {`Graph Options`}
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Typography>
      {isOpen && (
        <Grid container justify="center" alignItems="center">
          <Grid item md={11} style={{ marginRight: 5, marginTop: 10 }}>
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
                  <Typography>
                    {`Inclination selection for 2D will go here..`}
                  </Typography>
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
        </Grid>
      )}
    </>
  );
}

export default OptionAddon;
