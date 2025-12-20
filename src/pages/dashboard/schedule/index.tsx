import { ScheduleCalendar } from "@components/Private/Schedule/Calendar";
import { SchedulingModal } from "@components/Private/Schedule/Modals/Scheduling";
import { OptionsBar } from "@components/Private/Schedule/OptionsBar";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";

export default function Schedule() {
  return (
    <DashboardContainer>
      <OptionsBar />
      <div className="bg-white p-6 rounded-xl relative z-0">
        <ScheduleCalendar />
      </div>
      <SchedulingModal
      />
    </DashboardContainer>
  );
}
