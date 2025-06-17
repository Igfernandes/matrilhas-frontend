import { FieldsGroupsShape } from "@type/Fields/fieldsGroups";

export type FieldsGroupsContextData = {
  fieldsGroups: FieldsGroupsShape[];
  handleFieldsGroupToEditing: (fieldGroupName: string) => void;
  fieldsGroupEditing: string | undefined;
};

export type FieldsGroupsProviderProps = {
  groups: FieldsGroupsShape[];
  children: React.ReactNode;
};
