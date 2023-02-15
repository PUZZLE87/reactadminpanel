import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Search,
  Edit,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";

import Header from "../components/Header";

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
      <Header category="صفحه" title="کارمندان" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        enableRtl
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Edit, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
