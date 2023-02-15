import React from "react";
import {
  KanbanComponent,
  ColumnDirective,
  ColumnsDirective,
} from "@syncfusion/ej2-react-kanban";
import { kanbanData, kanbanGrid } from "../data/dummy";

import Header from "../components/Header";

const Kanban = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
      <Header category="اپلیکیشن‌ها" title="کانبان" />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Title" }}
        keyField="Status"
        enableRtl
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
