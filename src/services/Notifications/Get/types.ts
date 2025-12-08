import { NotificationShape } from "@type/Notifications/Notifications";
import { GetRequestShape } from "@type/service";

export type GetNotificationsRequest = GetRequestShape & {
  id?: number;
  in_ids?: Array<number>;
  entity?: "USER" | "CLIENT";
};
export type GetResponse = {
  rows: NotificationShape[];
  count: number;
  viewedCount?: number;
};
