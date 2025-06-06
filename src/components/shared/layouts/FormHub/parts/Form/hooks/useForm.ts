import { useFieldsByGroup } from "@hooks/useFields/useFieldsByGroup";
import { useFieldContext } from "../../../context/Fields";
import { useFieldsGroupsContext } from "../../../context/FieldsGroups";
import { useTabsContext } from "../../../context/Tabs";

export function useForm() {
  const { fields } = useFieldContext();
  const { fieldsGroups, fieldsGroupEditing } = useFieldsGroupsContext();
  const { targetTab } = useTabsContext();

  const { fieldByGroup } = useFieldsByGroup({
    fieldGroups: fieldsGroups,
    fields: fields,
  });

  return {
    fieldByGroup,
    targetTab,
    fieldsGroupEditing,
  };
}
