import { Calendar } from "@components/shared/others/Calendar";
import { useModalContext } from "@contexts/Modal";
import { ScheduleShape } from "@type/Schedule";
import moment from "moment";

type Props = {
  schedules: Array<ScheduleShape>;
};

export function ScheduleCalendar({ schedules }: Props) {
  const { handleToggleModal } = useModalContext();

  return (
    <div className="timeCalendar">
      <Calendar
        events={schedules.map(({ end_date, ...schedule }) => ({
          title: schedule.title,
          start: moment(schedule.date).toDate(),
          end: end_date
            ? moment(end_date).toDate()
            : new Date(
                moment(schedule.date).toDate().getTime() + 60 * 60 * 1000
              ),
          allDay: false,
          resource: schedule.id,
        }))}
        style={{ height: "63vh" }}
        views={["week"]}
        defaultView="week"
        components={{
          event: ({ event }) => {
            const schedule = schedules.find(
              (schedule) => schedule.id === event.resource
            );

            return (
              <div
                className="line-clamp-1 px-1"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: ".8rem",
                  height: "100%",
                  backgroundColor: schedule?.color ?? "#fff",
                }}
              >
                {event.title}
              </div>
            );
          },
        }}
        onSelectEvent={(event) => {
          handleToggleModal("SCHEDULE", event.resource);
        }}
      />
    </div>
  );
}
