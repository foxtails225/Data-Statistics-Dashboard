import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import useStyles from "../../../../utils/styles";
import {} from "../../../../API";

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
        <Grid item md={3}>
          <Button
            id="as_needed_handoff"
            name="coverage"
            variant="contained"
            size="small"
            onClick={(e) => props.onClick(e)}
            style={{ marginLeft: "15px" }}
          >
            {`RF Coverage (%)`}
          </Button>
          <Button
            id="maximum_powee_handoff"
            name="gap"
            variant="contained"
            size="small"
            onClick={(e) => props.onClick(e)}
            style={{ marginLeft: "15px" }}
          >
            {`Gap (%)`}
          </Button>
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
