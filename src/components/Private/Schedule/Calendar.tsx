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
          resource: String(schedule.id),
        }))}
        style={{ height: "63vh" }}
        views={["week"]}
        defaultView="week"
        components={{
          event: ({ event }) => {
            const schedule = schedules.find(
              (schedule) => String(schedule.id) === event.resource
            );

            return (
              <div
                className="line-clamp-1 pl-[2px]"
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  fontSize: ".8rem",
                  height: "100%",
                  backgroundColor: schedule?.color ?? "#fff",
                }}
              >
                📅
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
