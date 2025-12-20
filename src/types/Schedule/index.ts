export type ScheduleShape = {
  id: number;
  title: string;
  date: string;
  end_date?: string;
  describe?: string;
  color: string;
  linked?: Array<{
    name: string;
    id: number;
  }>;
};
