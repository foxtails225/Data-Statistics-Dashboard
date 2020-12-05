import React from "react";
import { Grid, IconButton, Menu, MenuItem, Divider } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const MENU_ITEMS = [
  { id: 1, dataset: "coverage", name: "Running Average" },
  { id: 2, dataset: "coverage_histogram", name: "Distribution" },
  { id: 3, dataset: "coverage", name: "Statistics Chart" },
];

function PlusAddon(props: any) {
  return (
    <Grid item md={12}>
      <Grid container justify="center" alignItems="center">
        <Grid item style={{ width: "4%" }}>
          <IconButton onClick={(e) => props.onAnchorEl(e.currentTarget)}>
            <AddCircleOutlineIcon />
          </IconButton>
          <Menu
            anchorEl={props.anchorEl}
            keepMounted
            open={Boolean(props.anchorEl)}
            onClose={() => props.onAnchorEl(null)}
          >
            {MENU_ITEMS.map((el: any) => (
              <MenuItem
                id={el.id}
                key={el.id}
                onClick={() => props.onSelected(el.id)}
              >
                {el.name}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
        <Grid item md={11} style={{ width: "96%" }}>
          <Divider />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PlusAddon;
