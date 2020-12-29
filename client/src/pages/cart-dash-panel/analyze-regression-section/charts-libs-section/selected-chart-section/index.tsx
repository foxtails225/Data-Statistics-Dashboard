import React from "react";
import {
  Grid,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

import LineChartSection from "../line-chart-section";
import HistogramChartSection from "../histogram-chart-section";
import BoxChartSection from "../box-chart-section";
import { useWindowSize } from "../../../../../utils/util";

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

function SelectedChartSection(props: any) {
  const size = useWindowSize();

  return (
    <>
      {props.id === 0 && (
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{
            height: size.width
              ? props.isSubChart
                ? "100%"
                : size.width * 0.11
              : "100%",
            overflow: "auto",
          }}
        >
          <Grid item md={10}>
            <Typography variant="h6" style={{ textAlign: "center" }}>
              {`Key Metrics`}
            </Typography>
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
      {props.id === 1 && (
        <LineChartSection
          source={props.data}
          dataType={props.dataType}
          size={props.size}
          isSubChart={props.isSubChart}
        />
      )}
      {props.id === 2 && (
        <HistogramChartSection
          source={props.data}
          size={props.size}
          isSubChart={props.isSubChart}
        />
      )}
      {props.id === 3 && (
        <BoxChartSection
          source={props.data}
          size={props.size}
          isSubChart={props.isSubChart}
        />
      )}
    </>
  );
}

export default SelectedChartSection;