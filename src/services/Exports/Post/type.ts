export type PostExportsPayload = {
  in_ids: Array<number>;
  entity: EntitiesShape;
  type: "EXCEL" | "PDF";
};

export type EntitiesShape =
  | "CLIENTS"
  | "USERS"
  | "SERVICES"
  | "FORMS"
  | "SALES"
  | "CHARGES"
  | "AGENCIES"
  | "FORMS_FILLS"
  | "TOURS"
  | "INSCRIBES";
