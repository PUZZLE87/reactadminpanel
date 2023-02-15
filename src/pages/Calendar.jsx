import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";
import Header from "../components/Header";

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
      <Header category="اپلیکیشن ها " title="تقویم" />
      <div>
        <ScheduleComponent
          height="650px"
          eventSettings={{ dataSource: scheduleData }}
          enableRtl
          locale="fa"
        >
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
      </div>
    </div>
  );
};

export default Calendar;
