import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { FieldsGroupsShape } from "@type/Fields/fieldsGroups";
import { FieldsGroupsContextData, FieldsGroupsProviderProps } from "./types";
import { helperRemoveDuplicatesInArrayOfObjects } from "@helpers/array";
const FieldsGroupsContext = createContext<FieldsGroupsContextData>(
  {} as FieldsGroupsContextData
);

function FieldsGroupsProvider({ children, groups }: FieldsGroupsProviderProps) {
  const [fieldsGroups, setFieldsGroups] = useState<FieldsGroupsShape[]>([]);
  const [fieldsGroupEditing, setFieldsGroupEditing] = useState<string>();

  const handleFieldsGroupToEditing = (fieldGroupName: string) => {
    setFieldsGroupEditing(fieldGroupName);
  };

  useEffect(() => {
    setFieldsGroups(helperRemoveDuplicatesInArrayOfObjects(groups, "name"));
  }, [groups]);

  const props = useMemo(
    () => ({
      fieldsGroups,
      handleFieldsGroupToEditing,
      fieldsGroupEditing,
    }),
    [fieldsGroups, fieldsGroupEditing]
  );

  return (
    <FieldsGroupsContext.Provider value={{ ...props }}>
      {children}
    </FieldsGroupsContext.Provider>
  );
}

export default FieldsGroupsProvider;

export function useFieldsGroupsContext() {
  return useContext(FieldsGroupsContext) as FieldsGroupsContextData;
}
