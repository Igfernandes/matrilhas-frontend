import { FieldsGroupsShape } from "@type/Fields/fieldsGroups";

export type GetFieldsGroupsRequest = {
  id?: number;
  fieldId?: string;
  name?: string;
  name_contains?: string;
  scope?: "USER" | "CLIENT" | "COMPANY";
};

export type GetFieldsGroupsResponse = {
  rows: Array<FieldsGroupsShape>;
  count: number;
}