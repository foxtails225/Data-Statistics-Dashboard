import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import * as Constants from "../../constants";

function Selection(props: any) {
  return (
    <Menu
      anchorEl={props.anchorEl}
      keepMounted
      open={Boolean(props.anchorEl)}
      onClose={() => props.onAnchorEl(null)}
    >
      {Constants.MENU_ITEMS.map((el: any) => (
        <MenuItem
          id={el.id}
          key={el.id}
          onClick={() => props.onSelected(el.id)}
        >
          {el.name}
        </MenuItem>
      ))}
    </Menu>
  );
}

export default Selection;
