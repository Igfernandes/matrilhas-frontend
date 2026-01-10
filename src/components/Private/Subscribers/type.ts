import { JSX } from "react";
import { SubscriptionShape } from "@components/shared/layouts/Subscribe/type";


export type TDataSubscriber = {
  id: React.ReactNode;
  name: string;
  phone: string;
  created_at: string;
  actions: JSX.Element;
};


export type ModalSubscriberOperationType = "DELETE" | "SHARED" | boolean;

export type SubscriberPageProps = {
  targetSubscriber: SubscriptionShape;
};
