import { NotificationShape } from "@type/Notifications/Notifications";

export type NotificationsProps = {
  notifications: Array<NotificationShape>;
  isShow: boolean;
  viewedCount: number;
  count: number;
  handleScroll: (ev: React.UIEvent<HTMLDivElement>) => void;
  isLoading?: boolean;
  handleNotification: (isShow: boolean) => void;
};
