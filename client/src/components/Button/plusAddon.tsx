import React from "react";
import { Grid, IconButton, Menu, MenuItem, Divider } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import * as Constants from "../../constants";
import Selection from "../Select";

function PlusAddon(props: any) {
  return (
    <Grid item md={12}>
      <Grid container justify="center" alignItems="center">
        <Grid item style={{ width: "4%" }}>
          <IconButton onClick={(e) => props.onAnchorEl(e.currentTarget)}>
            <AddCircleOutlineIcon />
          </IconButton>
          <Selection
            anchorEl={props.anchorEl}
            onAnchorEl={(value: any) => props.onAnchorEl(value)}
            onSelected={(value: any) => props.onSelected(value)}
          />
        </Grid>
        <Grid item md={11} style={{ width: "96%" }}>
          <Divider />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PlusAddon;
