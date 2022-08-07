import { CalendarEvent } from "../types/event";

export function toEvent(holidays: any[]): CalendarEvent[] {
  return holidays.map((holiday) => {
    const title = holiday.countryName + " " + holiday.name;
    return { ...holiday, title: title };
  });
}
