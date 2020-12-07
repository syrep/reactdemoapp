import Plot from "react-plotly.js";
import ApiCall from "./apicall";

export default function PlotlyJSPart() {
  var test1 = { result: 0.5555555555555556 };

  var test2 = ApiCall();
  console.log("test2", test2);

  var testArray = [test1.result, test2.keenoutput, 3];

  var tracecohort = {
    y: ["S3 Chem", "S3 Bio", "S3 Phy"],
    //x: [20, 14, 23],
    x: testArray,
    name: "Cohort Average",
    type: "bar",
    orientation: "h",
  };

  var traceuser = {
    y: ["S3 Chem", "S3 Bio", "S3 Phy"],
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
