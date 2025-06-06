export type MessagesDispatcherShape = {
  id: number;
  title: string;
  weekday?: TypesWeekdaysMessagesDispatcher;
  period?: "DAILY" | "WEEKLY" | "MONTHLY";
  content?: string;
  status: "ACTIVE" | "INACTIVE";
  platforms?: TypesPlatformsMessagesDispatchers;
  scheduled_at?: string;
  started_at?: string;
  service_id?: number;
  charge_id?: number;
  author?: number;
  linked?: number;
  created_at: string;
  updated_at: string;
};

export type TypesPlatformsMessagesDispatchers = Array<
  "FACEBOOK" | "INSTAGRAM" | "WHATSAPP" | "EMAIL" | "SMS"
>;

export type TypesPeriodsMessagesDispatcher = "DAILY" | "WEEKLY" | "MONTHLY";
export type TypesWeekdaysMessagesDispatcher = Array<
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
>;
