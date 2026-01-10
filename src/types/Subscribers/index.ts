import { BaseShape } from "@type/data";

export type SubscriberShape = BaseShape & {
  id: number;
  name: string;
  phone?: string;
  created_at: string;
  type: "string";
};
