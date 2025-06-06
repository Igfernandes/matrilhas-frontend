import { FieldsShape, ScopeFields } from "@type/Fields";

export type FieldContextData = {
  viewedField: ViewedEntityShape;
  handleChangeField: (field: FieldsShape) => void;
  fields: FieldsShape[];
  entityType: ScopeFields;
  handleSubmitFields: (viewedId: number, payload: PayloadFieldValues) => void;
};

export type FieldProviderProps = {
  fieldsRelation: Array<FieldsShape>;
  entity: ViewedEntityShape;
  children: React.ReactNode;
  entityType: ScopeFields;
  handleSubmitFields: (viewedId: number, payload: PayloadFieldValues) => void;
};

export type PayloadFieldValues = {
  fields: Array<{
    id: number;
    value: string;
  }>;
};

export type ViewedEntityShape = {
  id: number;
  avatar?: string;
  name: string;
};
