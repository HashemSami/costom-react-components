import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";

dayjs.extend(localeData);

export const months = dayjs.months();

export const weekDays = dayjs.weekdays();

export const weekDaysShort = dayjs.weekdaysShort();

export const getYear = (dayjsContext: dayjs.Dayjs) =>
  dayjsContext.format("YYYY");

export const getMonth = (dayjsContext: dayjs.Dayjs) =>
  dayjsContext.format("MMMM");

export const getNumberOfDaysInMonth = (dayjsContext: dayjs.Dayjs) =>
  dayjsContext.daysInMonth();

export const getCurrentDate = (dayjsContext: dayjs.Dayjs) =>
  dayjsContext.get("date");

export const getCurrentDay = (dayjsContext: dayjs.Dayjs) =>
  parseInt(dayjsContext.format("D"));

export const getFirstDayOfTheMonth = (dayjsContext: dayjs.Dayjs) =>
  parseInt(dayjs(dayjsContext).startOf("month").format("d"));

export const setDateContextByMonthNumber = (
  dayjsContext: dayjs.Dayjs,
  monthNumber: number
) => dayjs(dayjsContext).set("month", monthNumber);

export const setDateContextByYear = (dayjsContext: dayjs.Dayjs, year: number) =>
  dayjs(dayjsContext).set("year", year);

export const getNextMonth = (dayjsContext: dayjs.Dayjs) =>
  dayjs(dayjsContext).add(1, "month");

export const getPrevMonth = (dayjsContext: dayjs.Dayjs) =>
  dayjs(dayjsContext).subtract(1, "month");

export default dayjs;
