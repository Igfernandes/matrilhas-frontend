export type ScheduleShape = {
  id: string;
  title: string;
  date: string;
  end_date?: string|null;
  describe?: string;
  color: string;
  linked?: Array<{
    name: string;
    id: number;
  }>;
};
