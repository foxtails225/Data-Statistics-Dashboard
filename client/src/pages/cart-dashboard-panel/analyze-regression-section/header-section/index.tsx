import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { grey } from "@material-ui/core/colors";
import useStyles from "../../../../utils/styles";

function HeaderSection(props: any) {
  const classes = useStyles();

  return (
    <Grid item md={12}>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        spacing={1}
        style={{ backgroundColor: grey[300], minHeight: "6vh" }}
      >
        <Grid item md={2} style={{ marginLeft: 15 }}>
          <ToggleButtonGroup
            value={props.dataSet}
            onChange={(e) => props.onClick(e)}
          >
            <ToggleButton
              id="as_needed_handoff"
              name="coverage"
              value="as_needed_handoff"
              size="small"
            >
              {`RF Coverage (%)`}
            </ToggleButton>
            <ToggleButton
              id="gap maximum_powee_handoff"
              name="gap"
              value="gap maximum_powee_handoff"
              size="small"
            >
              {`Gap (%)`}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item md={2}>
          <FormControl
            variant="outlined"
            size="small"
            className={classes.formControl}
            fullWidth
          >
            <InputLabel id="demo-simple-select-outlined-label">{`System`}</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={props.system}
              onChange={(e) => props.onSystem(e.target.value)}
              label="System"
            >
              <MenuItem value="" disabled>
                <em>{`None`}</em>
              </MenuItem>
              {props.systems.map((item: any) => (
                <MenuItem key={item.system_name} value={item.system_id}>
                  {item.system_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={2}>
          <FormControl
            variant="outlined"
            size="small"
            className={classes.formControl}
            fullWidth
          >
            <InputLabel id="demo-simple-select-outlined-label">{`Version`}</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={props.version}
              onChange={(e) => props.onVersion(e.target.value)}
              label="Version"
            >
              <MenuItem value="" disabled>
                <em>{`None`}</em>
              </MenuItem>
              {props.versions.map((item: any) => (
                <MenuItem
                  key={`version_${item.versions}`}
                  value={item.versions}
                >
                  {item.versions}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={5} />
      </Grid>
    </Grid>
  );
}

export default HeaderSection;
