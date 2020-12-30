import React from "react";
import {
  Grid,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import DeleteSweepOutlinedIcon from "@material-ui/icons/DeleteSweepOutlined";
import ShopTwoOutlinedIcon from "@material-ui/icons/ShopTwoOutlined";
import { grey } from "@material-ui/core/colors";
import useStyles from "../../../../utils/styles";
import { deleteAll, deleteRecord, migrate } from "../../../../API";

const HeaderSection: React.FC<any> = (props: any) => {
  const classes = useStyles();

  return (
    <Grid item md={12}>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        spacing={1}
        style={{
          backgroundColor: grey[300],
          minHeight: "6vh",
        }}
      >
        <Grid item md={2}>
          <FormControl
            variant="outlined"
            size="small"
            className={classes.formControl}
            fullWidth
          >
            <InputLabel id="database-select-label">{`DataBase`}</InputLabel>
            <Select
              labelId="database-select-label"
              id="database-select-outlined"
              value={props.db}
              onChange={(e) => props.onSetDB(e.target.value)}
              label="DataBase"
            >
              <MenuItem key="staging_db" value="staging_db">
                {`Staging Database`}
              </MenuItem>
              <MenuItem key="product_db" value="product_db">
                {`Production Database`}
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={1}>
          <Grid container justify="center" alignItems="center">
            <Grid item md={4}>
              <IconButton
                disabled={props.db === "product_db"}
                onClick={() => {
                  deleteRecord({
                    system: props.system,
                    version: props.version,
                    alt: props.alt,
                    inc: props.inc,
                    fileId: props.fileId,
                  });
                  props.onRefresh();
                }}
              >
                <DeleteOutlinedIcon />
              </IconButton>
            </Grid>
            <Grid item md={4}>
              <IconButton
                disabled={props.db === "product_db"}
                onClick={() => {
                  deleteAll({
                    system: props.system,
                    version: props.version,
                  });
                  props.onRefresh();
                }}
              >
                <DeleteSweepOutlinedIcon />
              </IconButton>
            </Grid>
            <Grid item md={4}>
              <IconButton
                disabled={props.db === "product_db"}
                onClick={() =>
                  migrate({
                    system: props.system,
                    version: props.version,
                  })
                }
              >
                <ShopTwoOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2}>
          <FormControl
            variant="outlined"
            size="small"
            className={classes.formControl}
            style={{ width: "50%" }}
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
          <FormControl
            variant="outlined"
            size="small"
            className={classes.formControl}
            style={{ width: "30%", marginLeft: 15 }}
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
        <Grid item md={3} style={{ marginLeft: 15 }}>
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
              id="maximum_powee_handoff"
              name="gap"
              value="maximum_powee_handoff"
              size="small"
            >
              {`No Coverage (%)`}
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderSection;
