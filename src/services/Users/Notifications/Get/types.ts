import { UsersNotificationsShape } from "@type/Notifications/UsersNotifications";
import { GetRequestShape } from "@type/service";
import { Status } from "@type/status";

export type GetNotificationsUserRequest = GetRequestShape & {
  id?: number;
  notificationId?: Status;
};
export type GetUsersResponse = {
  rows: UsersNotificationsShape[];
  count: number;
  viewedCount?: number;
};
