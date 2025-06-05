import { useMemo } from "react";
import { FieldsShape } from "../../types/Fields";
import { FieldsGroupsShape } from "@type/Fields/fieldsGroups";

type Props = {
  fields: FieldsShape[];
  fieldGroups: FieldsGroupsShape[];
};

export function useFieldsByGroup({ fields, fieldGroups }: Props) {
  return useMemo(() => {
    const grouped: Record<string, FieldsShape[]> = { ATTACHMENTS: [] };

    const groupMap = fieldGroups.reduce((acc, group) => {
      acc[group.id] = group;
      return acc;
    }, {} as Record<number, FieldsGroupsShape>);

    fields.forEach((field) => {
      const group = groupMap[field.group_id];
      if (!group) return;

      if (field.type === "FILE") {
        grouped.ATTACHMENTS.push(field);
        return;
      }

      if (!grouped[group.name]) grouped[group.name] = [];
      grouped[group.name].push(field);
    });

    const positionMap = fieldGroups.reduce((acc, group) => {
      acc[group.name] = Number(group.position);
      return acc;
    }, {} as Record<string, number>);

    const sorted = Object.entries(grouped).sort(([groupA], [groupB]) => {
      const posA = positionMap[groupA] ?? Infinity;
      const posB = positionMap[groupB] ?? Infinity;
      return posA - posB;
    });
    const final = sorted.filter(([key]) => key !== "ATTACHMENTS");
    const attachments = sorted.find(([key]) => key === "ATTACHMENTS");

    if (attachments) final.push(attachments);
    
    return { fieldByGroup: final };
  }, [fields, fieldGroups]);
}
