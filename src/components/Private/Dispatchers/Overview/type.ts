import { JSX } from "react";
import { MessagesDispatcherShape } from "@type/MessagesDispatcherShape";

export type HookMessagesDispatcherProps = {
  filter: string;
};

export type TDataMessagesDispatcher = Pick<
  MessagesDispatcherShape,
  "id" | "title" | "author" | "linked" | "status"
> & {
  actions: JSX.Element;
};

export type MessagesDispatcherProps = {
  search: string;
};

export type ModalMessagesDispatcherOperationType = "DELETE" | boolean;
