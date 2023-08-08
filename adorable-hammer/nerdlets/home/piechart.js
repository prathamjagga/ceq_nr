import React from "react";
import { PieChart } from "nr1";

export default class Piechart extends React.Component {
  render() {
    const piechart1 = [
      {
        metadata: {
          id: "series-1",
          name: "Serie 1",
          color: "#a35ebf",
          viz: "main",
          units_data: {
            y: "BYTES",
          },
        },
        data: [{ y: 128 }],
      },
      {
        metadata: {
          id: "series-2",
          name: "Serie 2",
          color: "#85c956",
          viz: "main",
          units_data: {
            y: "BYTES",
          },
        },
        data: [{ y: 256 }],
      },
    ];
    // return <PieChart data={piechart1} fullWidth />;
    return (
      <PieChart
        accountId={4055886}
        query="SELECT latest(host.process.cpuPercent) as 'CPU %', latest(host.process.threadCount) as 'Threads' FROM Metric FACET processId, processDisplayName WHERE `entityGuid` = 'NDA1NTg4NnxJTkZSQXxOQXw5MTc5MzkxNjUwMjU3NDU3MzUw' ORDER BY cpuPercent asc LIMIT 100"
        fullWidth
      />
    );
  }
}
