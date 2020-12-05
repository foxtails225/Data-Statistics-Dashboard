import React from "react";
import { Grid, Typography } from "@material-ui/core";

function ContentAddon(props: any) {
  return (
    <Grid item md={3}>
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
