export type ClientsMessagesDispatcherShape = {
  client_id: number;
  client_name: string;
  message_id: number;
  message_title: string;
  status: "PENDING" | "SUCCESSFUL" | "BLOCKED";
  platform: "FACEBOOK" | "INSTAGRAM" | "WHATSAPP" | "EMAIL";
  log_error?: string;
  send_at?: string;
  created_at: string;
};
