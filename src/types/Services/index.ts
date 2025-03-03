export type ServicesShape = {
  id: number;
  name: string;
  type: string;
  responsible: ResponsibleServiceShape;
  status: "ACTIVE" | "INACTIVE";
  created_at: string;
  updated_at: string;
};

type ResponsibleServiceShape = {
  id: number;
  name: string;
};
