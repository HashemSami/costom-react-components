import { FC, useState } from "react";
import "./Calendar.styles.css";

import dayjs, {
  weekDaysShort,
  getCurrentDay,
  getFirstDayOfTheMonth,
  getMonth,
  getNumberOfDaysInMonth,
  getYear,
  getNextMonth,
  getPrevMonth,
} from "./dayjs";

import MonthNav from "./calendar-components/MonthNav";
import CalendarDays from "./calendar-components/CalendarDays";
import YearNav from "./calendar-components/YearNav";

interface ClenderProps {
  width: string;
  style: any;
}

const Clendar: FC<ClenderProps> = ({ width = "350px", style = {} }) => {
  const [dayjsContext, setDayjsContext] = useState(dayjs()); //to navigate between months and years
  const [today, setToday] = useState(dayjs()); //for today's date

  const styles = { ...style, width };
  const year = getYear(dayjsContext);
  const daysInMonth = getNumberOfDaysInMonth(dayjsContext);
  const currentDate = getCurrentDay(dayjsContext);
  const currentDay = getCurrentDay(dayjsContext);
  const firstDayOfTheMonth = getFirstDayOfTheMonth(dayjsContext);

  const weekDaysNamesRender = weekDaysShort.map((day) => (
    <td key={day} className="week-day">
      {day}
    </td>
  ));

  const totalSlots = (firstDayOfTheMonth: number, daysInMonth: number) => {
    const onDayClicked = (day: number) => {
      // you can pass data to the parent prop from this function
      console.log(day);
    };

    const blanksElements = Array.from(
      { length: firstDayOfTheMonth },
      (_, i) => (
        <td key={i + 120} className="empty-slot">
          "♥"
        </td>
      )
    );

    const daysInMonthElements = Array.from({ length: daysInMonth }, (_, d) => {
      const day = d + 1;
      const className = day === currentDay ? "day current-day" : "day";
      return (
        <td key={day + 999} className={className}>
          <span onClick={() => onDayClicked(day)}>{day}</span>
        </td>
      );
    });

    return [...blanksElements, ...daysInMonthElements];
  };

  // console.log(daysInMonthRender);
  return (
    <div className="calendar-container" style={styles}>
      <table className="calendar">
        <thead>
          <tr className="calendar-header">
            <td colSpan={5}>
              <MonthNav
                dayjsContext={dayjsContext}
                setDayjsContext={setDayjsContext}
              />{" "}
              <YearNav year={year} setDayjsContext={setDayjsContext} />
            </td>
            <td colSpan={2} className="nav-month">
              <i
                className="prev fa fa-fw fa-chevron-left"
                onClick={() => setDayjsContext((state) => getPrevMonth(state))}
              ></i>
              <i
                className="prev fa fa-fw fa-chevron-right"
                onClick={() => setDayjsContext((state) => getNextMonth(state))}
              ></i>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>{weekDaysNamesRender}</tr>
          <CalendarDays
            totalSlots={totalSlots(firstDayOfTheMonth, daysInMonth)}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Clendar;
