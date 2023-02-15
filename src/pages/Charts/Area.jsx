import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";
import Header from "../../components/Header";

const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="نمودار مساحتی" title="درصد نرخ تورم" />
      <ChartComponent
        enableRtl
        id="area-chart"
        height="420px"
        primaryXAxis={{
          ...areaPrimaryXAxis,
          labelStyle: { color: currentMode === "Dark" ? "white" : "" },
        }}
        primaryYAxis={{
          ...areaPrimaryYAxis,
          labelStyle: { color: currentMode === "Dark" ? "white" : "" },
        }}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#FFF"}
        style={{ color: "#fff" }}
        palettes={[
          "#00BDAE",
          currentMode === "Dark" ? "#f6e58d" : "#4b4b4b",
          "#EE5A24",
        ]}
        legendSettings={{
          background: currentMode === "Dark" ? "#33373E" : "#FFF",
          textStyle: {
            color: currentMode === "Dark" ? "white" : "",
          },
        }}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
