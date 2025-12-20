import { ScheduleShape } from "@type/Schedule";
import { GetRequestShape } from "@type/service";

export type GetSchedulesRequest = GetRequestShape & {
  id?: number;
  in_ids?: Array<number>;
  title?: string;
  title_contains?: string;
  date?: string;
  end_date?: string;
  created_at?: string;
  updated_at?: string;
};

export type GetSchedulesResponse = {
  rows: Array<ScheduleShape>;
  count: number;
};
