export type PostExportsPayload = {
  in_ids: Array<number>;
  entity: EntitiesShape;
  type: "EXCEL" | "PDF";
};

export type EntitiesShape = "VOUCHERS";
