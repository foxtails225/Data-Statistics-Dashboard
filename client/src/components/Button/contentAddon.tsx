import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "../../utils/styles";

function ContentAddon(props: any) {
  const classes = useStyles();
  
  return (
    <Grid item md={3} className={classes.contentSection}>
      <Grid container alignItems="center" justify="center">
        <Grid item md={12}>
          <Typography component="strong" variant="body1">
            {"Options"}
          </Typography>
        </Grid>
        <Grid item md={12}>
          <Typography component="strong" variant="body1">
            {"Metrics"}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContentAddon;
