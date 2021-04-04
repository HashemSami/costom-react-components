import { FC, Fragment } from "react";

interface CalendarDaysProps {
  totalSlots: JSX.Element[];
}

export const CalendarDays: FC<CalendarDaysProps> = ({ totalSlots }) => {
  let rows: JSX.Element[][] = [];
  let cells: JSX.Element[] = [];

  totalSlots.forEach((slot: JSX.Element, i: number) => {
    if (i % 7 !== 0 || i === 0) {
      cells.push(slot);
    } else {
      let insertRow = cells.slice();
      rows.push(insertRow);
      //reset cell
      cells = [];
      //insert the first element of the row
      cells.push(slot);
    }
    if (i === totalSlots.length - 1) {
      //for the last row
      let insertRow = cells.slice();
      rows.push(insertRow);
    }
  });
  // console.log(rows);
  return (
    <Fragment>
      {rows.map((row, i) => (
        <tr key={i * 100}>{row}</tr>
      ))}
    </Fragment>
  );
};

export default CalendarDays;
