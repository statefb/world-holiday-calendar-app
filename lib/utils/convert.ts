import { Holiday } from "../../components/Calendar";
import Holidays from "date-holidays";
import { CalendarEvent } from "../types/event";

export function toEvent(holidays: Holiday[]): CalendarEvent[] {
  return holidays.map((holiday) => {
    const title = holiday.countryName + " " + holiday.name;
    return { start: holiday.start, end: holiday.end, title: title };
  });
}
