import { ScheduleShape } from "@type/Schedule";

export type PostCreateSchedulePayload = Omit<
  ScheduleShape,
  "id" | "linked" | "created_at" | "updated_at"
> & {
  linked: Array<number>;
};
