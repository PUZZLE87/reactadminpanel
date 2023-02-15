import React from "react";
import LineChart from "../../components/Charts/LineChart";
import Header from "../../components/Header";

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="نمودار" title="نرخ تورم" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
