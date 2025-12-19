import { useMemo } from "react";
import { HookFillFieldsProps } from "../type";
import { FieldsShape } from "@type/Fields";
import { useFormRules } from "@hooks/Forms/useFormRules";
import { z } from "zod";

export function useFillFieldsForms({ fields, form }: HookFillFieldsProps) {
  const fieldsData = useMemo<Array<FieldsShape>>(() => {
    if (!form.components) return [];

    const components = JSON.parse(form.components) as Array<FieldsShape>;

    return components
      .filter((component) =>
        ["simple", "user", "custom"].includes(component?.group ?? "")
      )
      .map((component) => {
        const field = fields.find((field) => field.field_id == component?.id);

        return {
          ...component,
          name: `input_${component.id}`,
          defaultValue: field?.value,
        };
      });
  }, [fields, form]);

  const { formMethods } = useFormRules({
    schema: z.object(
      Object.fromEntries(
        fieldsData.map(({ id }: FieldsShape) => [
          `input_${id}`,
          z.string().optional().nullable(),
        ])
      )
    ),
  });

  return {
    fieldsData,
    formMethods,
  };
}
