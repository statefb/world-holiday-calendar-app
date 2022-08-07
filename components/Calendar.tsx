import FullCalendar, { DatesSetArg } from "@fullcalendar/react";
import jaLocale from "@fullcalendar/core/locales/ja";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Holidays, { HolidaysTypes } from "date-holidays";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { toEvent } from "../lib/utils/convert";
import { RegionSetting } from "../lib/types/region";
import { useEffect, useState } from "react";
import { CalendarEvent } from "../lib/types/event";
import getColor from "../lib/utils/palette";

interface CalendarProps {
  regions: RegionSetting[];
}

export default function Calendar(props: CalendarProps) {
  const { regions } = props;
  const [year, setYear] = useState(new Date().getFullYear());
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    let tmp: any[] = [];

    regions.forEach((region, index) => {
      const backgroundColor = getColor(index);

      const hd = new Holidays(region.country, region.state, region.region);
      tmp = [
        ...tmp,
        ...hd.getHolidays(year).map((h) => {
          return {
            // holiday attributes from date-holidays
            ...h,
            // region attributes
            ...region,
            // color scheme
            backgroundColor: backgroundColor,
            borderColor: backgroundColor,
            textColor: "#eeeeee",
          };
        }),
      ];
    });

    setEvents(toEvent(tmp));
  }, [regions, year]);

  const handleDatesSet = (arg: DatesSetArg) => {
    setYear(arg.start.getFullYear());
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        // 日本語指定
        locale={jaLocale}
        headerToolbar={{
          left: "today prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        // 初期表示ビュー
        initialView="dayGridMonth"
        // // 週・日表示の開始と終了時刻の指定
        // slotMinTime="06:00:00"
        // slotMaxTime="22:00:00"
        // 日付をクリックしたら詳細に飛べるようにする
        navLinks
        // 営業時間を強調表示する
        // https://fullcalendar.io/docs/businessHours
        businessHours={{
          // days of week. an array of zero-based day of week integers (0=Sunday)
          daysOfWeek: [1, 2, 3, 4, 5], // Monday - Friday

          startTime: "9:00", // a start time (10am in this example)
          endTime: "18:00", // an end time (6pm in this example)
        }}
        //
        datesSet={handleDatesSet}
      />
    </>
  );
}
