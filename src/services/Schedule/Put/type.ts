import { ScheduleShape } from "@type/Schedule";

export type PutSchedulePayload = Omit<
  ScheduleShape,
  "linked" | "created_at" | "updated_at"
> & {
  linked: Array<number>;
};
