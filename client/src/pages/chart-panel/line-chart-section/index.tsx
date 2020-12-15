import React from "react";
import Plot from "react-plotly.js";

import { useWindowSize } from "../../../utils/util";

function LineChartSection(props: any) {
  const size = useWindowSize();

  return (
    <Plot
      data={[
        {
          x: props.xTraces,
          y: props.yTraces,
          name: "Gap Event Duration",
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" },
        },
        {
          x: props.xTraces,
          y: props.avgTraces,
          name: "Running Average",
          type: "scatter",
          marker: { color: "blue" },
        },
      ]}
      layout={{
        title: `<b>${props.title}</b>`,
        width: size.width * 0.37,
        showlegend: true,
        legend: {
          orientation: "h",
          xanchor: "center",
          font: {
            family: "sans-serif",
            size: 12,
            color: "#000",
          },
        },
        margin: {
          l: 60,
          b: 0,
          r: 30,
          t: 30,
          pad: 5,
        },
        xaxis: {
          title: "Gap Event (Sequence)",
          titlefont: {
            size: 12,
            color: "#212529",
          },
          showgrid: true,
          zerolinecolor: "#969696",
          zerolinewidth: 1,
        },
        yaxis: {
          title: "Gap Duration (seconds)",
          titlefont: {
            size: 12,
            color: "#212529",
          },
          showgrid: true,
          zerolinecolor: "#969696",
          zerolinewidth: 1,
        },
      }}
      config={{ displayModeBar: false }}
    />
  );
}

export default LineChartSection;
