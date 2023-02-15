import React from "react";
import { pieChartData } from "../../data/dummy";
import ChartsHeader from "../../components/ChartHeader";
import PieChart from "../../components/Charts/PieChart";

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader
        category="دایره‌ای"
        title="درصد افزایش هزینه‌های  انجام پروژه"
      />
      <div className="w-full">
        <PieChart
          id="chart-pie"
          data={pieChartData}
          legendVisibility
          height="full"
        />
      </div>
    </div>
  );
};

export default Pie;
