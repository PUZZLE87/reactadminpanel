import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";

import Header from "../components/Header";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
      <Header category="صفحه" title="مشتریان" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete", "Search"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
        enableRtl
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Edit, Selection, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
