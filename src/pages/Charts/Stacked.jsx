import React from "react";
import ChartsHeader from "../../components/ChartHeader";
import StackedCahrt from "../../components/Charts/Stacked";

const Stacked = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="انباشته" title="درآمد و هزینه " />
      <div className="w-full">
        <StackedCahrt />
      </div>
    </div>
  );
};

export default Stacked;
