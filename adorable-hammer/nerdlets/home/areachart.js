import React from "react";
import { AreaChart } from "nr1";

export default class Areachart extends React.Component {
  render() {
    const areachart1 = [
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
    ];
    // return <AreaChart data={[areachart1]} fullWidth />;
    return (
      <AreaChart
        accountId={4055886}
        query="SELECT average(host.net.transmitBytesPerSecond) AS 'Transmit bytes per second', average(host.net.receiveBytesPerSecond) AS 'Receive bytes per second' FROM Metric WHERE `entityGuid` = 'NDA1NTg4NnxJTkZSQXxOQXw5MTc5MzkxNjUwMjU3NDU3MzUw' TIMESERIES auto"
        fullWidth
      />
    );
  }
}
