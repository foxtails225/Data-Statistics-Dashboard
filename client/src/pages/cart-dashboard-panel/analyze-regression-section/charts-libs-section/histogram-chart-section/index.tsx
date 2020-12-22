import React from "react";
import Plot from "react-plotly.js";

import { useWindowSize } from "../../../../../utils/util";

function HistogramChartSection(props: any) {
  const size = useWindowSize();
  
  return (
    <Plot
      data={[
        {
          x: props.source.xTraces,
          name: "Duration",
          type: "histogram",
        },
      ]}
      layout={{
        title: {
          text: `<b>${props.source.title.split('_').join(' ')}</b>`,
          font: {
            family: "Roboto",
            size: 15,
          },
        },
        width: Number(props.size.width.replace('px', '')) * 0.4,
        height: Number(props.size.height.replace('px', '')) * 0.3,
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
          title: "Duration",
          titlefont: {
            size: 12,
            color: "#212529",
          },
          showgrid: true,
          zerolinecolor: "#969696",
          zerolinewidth: 1,
        },
        yaxis: {
          title: "Occurances",
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

export default HistogramChartSection;
