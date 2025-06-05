import React from "react";
import {
  Calendar as CalendarLibrary,
  Components,
  momentLocalizer,
  View,
  ViewsProps,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import i18n from "@configs/i18n";

type CalendarProps = {
  components?:
    | Components<
        {
          title: string;
          start: Date;
          end: Date;
          allDay: boolean;
          resource: string;
          color?: string;
        },
        object
      >
    | undefined;
  events: {
    title: string;
    start: Date;
    end: Date;
    allDay: boolean;
    resource: string;
    color?: string;
  }[];
  defaultView?: View;
  views?:
    | ViewsProps<
        {
          title: string;
          start: Date;
          end: Date;
          allDay: boolean;
          resource: string;
        },
        object
      >
    | undefined;
  onSelectEvent?:
    | ((
        event: {
          title: string;
          start: Date;
          end: Date;
          allDay: boolean;
          resource: string;
        },
        e: React.SyntheticEvent<HTMLElement>
      ) => void)
    | undefined;
  style?: React.CSSProperties | undefined;
  defaultDate?: string;
};

const localizer = momentLocalizer(moment);
moment.locale("pt-br");

export const Calendar: React.FC<CalendarProps> = ({
  events,
  views,
  onSelectEvent,
  defaultDate,
  defaultView,
  components,
  style,
}) => {
  return (
    <CalendarLibrary
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      components={components}
      style={style}
      views={views}
      defaultView={defaultView}
      defaultDate={defaultDate}
      popup
      messages={{
        today: i18n("words.today"),
        previous: i18n("words.previous"),
        next: i18n("words.next"),
        month: i18n("words.month"),
        week: i18n("words.week"),
        day: i18n("words.day"),
        agenda: i18n("words.agenda"),
        date: i18n("words.date"),
        time: i18n("words.time"),
        event: i18n("words.event"),
        noEventsInRange: i18n("words.no_events_in_range"),
        showMore: (total) => `+ ${i18n("words.more")} ${total}`,
      }}
      onSelectEvent={onSelectEvent}
    />
  );
};
