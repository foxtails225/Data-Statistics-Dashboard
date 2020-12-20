import React from "react";
import { Grid, IconButton, Divider } from "@material-ui/core";
import DehazeIcon from '@material-ui/icons/Dehaze';
import Selection from "../Select";

function DashAddon(props: any) {
  return (
    <Grid item md={12}>
      <Grid container justify="flex-start" alignItems="center">
        <Grid item style={{ width: "4%" }}>
          <IconButton
            id={props.index}
            onClick={(e) => {
              props.onAnchorEl(e.currentTarget);
              props.onIndex(e.currentTarget.id);
            }}
            style={{ zIndex: 1000, backgroundColor: "#FFF", padding: 0 }}
          >
            <DehazeIcon />
          </IconButton>
          <Selection
            selected={props.selected}
            anchorEl={props.anchorEl}
            onAnchorEl={(value: any) => props.onAnchorEl(value)}
            onSelected={(value: any) => props.onSelected(value)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DashAddon;
