export type GetSchedulesRequest = {
  id?: number;
  in_ids?: Array<number>;
  title?: string;
  title_contains?: string;
  date?: string;
  end_date?: string;
  created_at?: string;
  updated_at?: string;
};
