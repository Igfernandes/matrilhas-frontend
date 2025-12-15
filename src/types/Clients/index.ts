import { BaseShape } from "@type/data";

export type ClientShape = BaseShape & {
  id: number;
  name: string;
  avatar?: string;
  phone?: string;
  cpf: string;
  status: "ACTIVE" | "INACTIVE";
  email?: string;
  categories: UserCategoryData[];
  is_confirm?: boolean;
  birthdate?: string;
  created_at: string;
  updated_at: string;
};

export type UserCategoryData = {
  name: string;
  id: number;
};
