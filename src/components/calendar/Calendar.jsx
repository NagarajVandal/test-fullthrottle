import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { useState } from "react";

const Calendar = ({ periods }) => {
  const [date, setDate] = useState("2020-02-01");

  let active = periods;
  let newData = [];
  active.map((item) => {
    console.log(item.start_time);
    let startDateTime = new Date(item.start_time);
    let finalDateTime = new Date(item.end_time);
    return newData.push({
      startDate: startDateTime.toISOString(),
      endDate: finalDateTime.toISOString(),
      title: "Active Hours ",
    });
  });

  const currentDateChange = (currentDate) => {
    setDate(currentDate);
  };

  console.log(newData);
  return (
    <Paper>
      <Scheduler data={newData}>
        <ViewState currentDate={date} onCurrentDateChange={currentDateChange} />
        <WeekView
          startDayHour={10}
          endDayHour={21}
          intervalCount={1}
          cellDuration={60}
        />
        <Toolbar />
        <DateNavigator />
        <Appointments />
      </Scheduler>
    </Paper>
  );
};

export default Calendar;
