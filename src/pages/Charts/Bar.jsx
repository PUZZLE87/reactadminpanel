import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,
  Legend,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";
import ChartHeadr from "../../components/ChartHeader";

const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartHeadr category="میله‌ای" title="تعداد مدال‌های المپیک" />
      <ChartComponent
        enableRtl
        id="charts"
        primaryXAxis={{
          ...barPrimaryXAxis,
          labelStyle: { color: currentMode === "Dark" ? "white" : "" },
        }}
        primaryYAxis={{
          ...barPrimaryYAxis,
          labelStyle: { color: currentMode === "Dark" ? "white" : "" },
        }}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#FFF"}
        style={{ color: "#fff" }}
        palettes={[
          "#00BDAE",
          currentMode === "Dark" ? "#ffa801" : "#4b4b4b",
          "#ff5e57",
        ]}
        legendSettings={{
          background: currentMode === "Dark" ? "#33373E" : "#FFF",
          textStyle: {
            color: currentMode === "Dark" ? "white" : "",
          },
        }}
      >
        <Inject
          services={[ColumnSeries, Category, Legend, Tooltip, DataLabel]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
