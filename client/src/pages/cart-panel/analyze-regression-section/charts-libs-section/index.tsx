import React, { useState } from "react";

import {
  Grid,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

import MinusAddon from "../../../../components/Button/MinusAddon";
import PlusAddon from "../../../../components/Button/PlusAddon";
import LineChartSection from "../../../chart-panel/line-chart-section";
import HistogramChartSection from "../../../chart-panel/histogram-chart-section";
import BoxChartSection from "../../../chart-panel/box-chart-section";
import * as Constants from "../../../../constants";
import useStyles from "../../../../utils/styles";

function createData(name: String, value: String) {
  return { name, value };
}

const rows = [
  createData("Average (sec)", "xx"),
  createData("Time-Averaged Gap", "xx"),
  createData("Median (sec)", "xx"),
  createData("Maximum (minutes)", "xx"),
  createData("Minimum (sec)", "xx"),
  createData("Average # Gaps Per Orbit", "xx"),
  createData("Average # Gaps Per Day", "xx"),
];

function ChartsLibsSection(props: any) {
  const [selected, setSelected] = useState([] as any);
  const [anchorEl, setAnchorEl] = useState(null as any);

  const handleSelected = (id: any, type: string) => {
    if (!selected.includes(id) && type === "add") {
      setSelected((prevState: any) => [...prevState, id]);
    } else if (type === "remove") {
      setSelected(selected.filter((item: any) => item !== id));
    }
    setAnchorEl(null);
  };

  return (
    <>
      {selected.length === 0 && (
        <PlusAddon
          selected={selected}
          anchorEl={anchorEl}
          onAnchorEl={(value: any) => setAnchorEl(value)}
          onSelected={(value: any) => handleSelected(value, "add")}
        />
      )}
      {
        // @ts-ignore
        Constants.MENU_ITEMS[props.dataSet].map(
          (item: any) =>
            Object.keys(props.traces).includes(item.dataset) &&
            selected.includes(item.id) && (
              <React.Fragment key={item.id}>
                <MinusAddon
                  id={item.id}
                  selected={selected}
                  anchorEl={anchorEl}
                  onAnchorEl={(value: any) => setAnchorEl(value)}
                  onSelected={(value: any) => handleSelected(value, "remove")}
                />
                <Grid item md={12}>
                  {item.id === 1 && (
                    <Grid container justify="center" alignItems="center">
                      <Grid item md={10} style={{ textAlign: "center" }}>
                        <Typography variant="h6">{`Key Metrics`}</Typography>
                      </Grid>
                      <Grid item md={10}>
                        <Table aria-label="simple table" size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>{`Gap Statistic`}</TableCell>
                              <TableCell>{`Value`}</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row: any) => (
                              <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                  {row.name}
                                </TableCell>
                                <TableCell>{row.value}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Grid>
                    </Grid>
                  )}
                  {item.id === 2 && (
                    <LineChartSection {...props.traces[item.dataset]} />
                  )}
                  {item.id === 3 && (
                    <HistogramChartSection {...props.traces[item.dataset]} />
                  )}
                  {item.id === 4 && (
                    <BoxChartSection {...props.traces[item.dataset]} />
                  )}
                </Grid>
                {selected.sort()[selected.length - 1] === item.id && (
                  <PlusAddon
                    selected={selected}
                    anchorEl={anchorEl}
                    onAnchorEl={(value: any) => setAnchorEl(value)}
                    onSelected={(value: any) => handleSelected(value, "add")}
                  />
                )}
              </React.Fragment>
            )
        )
      }
    </>
  );
}

export default ChartsLibsSection;
