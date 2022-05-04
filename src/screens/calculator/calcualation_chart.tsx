import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const myData = [
  { name: "Group A", value: 900 },
  { name: "Group B", value: 400 },
  { name: "Group C", value: 300 },
];

const Chart = () => {
  return (
    <PieChart width={800} height={800}>
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={myData}
        outerRadius={300}
        fill="orangered"
        label
      />

      {/* Display the tooltips */}
      <Tooltip />
    </PieChart>
  );
};

export default Chart;