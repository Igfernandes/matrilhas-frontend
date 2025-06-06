import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FieldsShape } from "@type/Fields";
import {
  FieldContextData,
  FieldProviderProps,
  ViewedEntityShape,
} from "./types";
const FieldContext = createContext<FieldContextData>({} as FieldContextData);

function FieldProvider({
  children,
  fieldsRelation,
  entity,
  entityType,
  handleSubmitFields,
}: FieldProviderProps) {
  const [viewedField, setViewedField] = useState<ViewedEntityShape>(entity);
  const [fields, setFields] = useState<FieldsShape[]>([]);

  const handleChangeField = (field: ViewedEntityShape) => {
    setViewedField(field);
  };

  useEffect(() => {
    setViewedField(entity);
  }, [entity]);

  useEffect(() => {
    setFields(fieldsRelation);
  }, [fieldsRelation]);

  const props = useMemo(
    () => ({
      viewedField,
      handleChangeField,
      fields,
      entityType,
      handleSubmitFields,
    }),
    [viewedField, fields, handleSubmitFields, entityType]
  );

  return (
    <FieldContext.Provider value={props}>{children}</FieldContext.Provider>
  );
}

export default FieldProvider;

export function useFieldContext() {
  return useContext(FieldContext) as FieldContextData;
}
