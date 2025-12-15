import { useNotificationData } from "../Notifications/hooks/useNotificationData";
import { useSidebar } from "../Sidebar/hooks/useSidebar";
import { Sidebar } from "../Sidebar";
import { Header } from "@components/Private/Header";
import { Notifications } from "../Notifications";

type Props = {
  title?: string;
  children: React.ReactNode;
};
export function DashboardContent({ children, title }: Props) {
  const { handleToggleSidebar, showSidebar } = useSidebar();
  const {
    isShowNotifications,
    handleToggleNotification,
    notifications,
    count,
    viewedCount,
    isLoadingNotifications,
handleScroll
  } = useNotificationData();

  return (
    <>
      <div className="bg-secondary h-[100vh] overflow-hidden flex">
        <Sidebar
          handleToggleSidebar={handleToggleSidebar}
          showSidebar={showSidebar}
        />
        <div className="h-[100vh] w-full">
          <Header
            title={title}
            handleSidebar={handleToggleSidebar}
            handleNotification={handleToggleNotification}
            notificationsAmount={
              count > 9 ? "+9" : `${count}`
            }
          />
          <div className="relative h-full pb-[vh] overflow-y-scroll">
            <div className="p-6">{children}</div>
          </div>
        </div>
      </div>
      <Notifications
        count={count}
        viewedCount={viewedCount}
        notifications={notifications}
        handleNotification={handleToggleNotification}
        isShow={isShowNotifications} handleScroll={handleScroll}
        isLoading={isLoadingNotifications}
      />
    </>
  );
}
