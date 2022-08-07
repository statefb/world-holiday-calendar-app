export type CalendarEvent = {
  start: Date;
  end: Date;
  title: string;
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  extendedProps: {
    countryName: string;
    regionName: string;
    stateName: string;
    type: string;
    rule: string;
  };
};
