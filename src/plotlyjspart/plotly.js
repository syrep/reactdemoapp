import Plot from "react-plotly.js";

export default function PlotlyJSPart() {
  var tracecohort = {
    y: ["S1", "S2", "S3"],
    x: [20, 14, 23],
    name: "Cohort Average",
    type: "bar",
    orientation: "h",
  };

  var traceuser = {
    y: ["S1", "S2", "S3"],
    x: [12, 18, 29],
    name: "Individual Average",
    type: "bar",
    orientation: "h",
  };

  var data = [traceuser, tracecohort];

  var layout = {
    barmode: "group",
    legend: { orientation: "h" },
    title: "Average Scores",
  };

  return <div>{<Plot data={data} layout={layout} />}</div>;
}
