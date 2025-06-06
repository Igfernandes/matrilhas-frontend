import {
  DefaultValues,
  FieldValues,
  useForm as useFormReactHook,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import { useMemo } from "react";

type Props<Payload> = {
  schema: ZodType;
  exclude?: Array<keyof Payload>;
  defaultValues?: DefaultValues<Payload>;
  shouldUseNativeValidation?: boolean;
};

export function useFormRules<Payload extends FieldValues>({
  schema,
  exclude = [],
  defaultValues,
  shouldUseNativeValidation,
}: Props<Payload>) {
  const formMethods = useFormReactHook<Payload>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues,
    shouldUseNativeValidation,
  });
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = formMethods;

  /**
   * @function hasAllFilledFields
   * - A função irá retornar o status em boolean sobre o preenchimento de todos os campos obrigatórios.
   *
   * @returns {boolean}
   */
  const hasAllFilledFields = (): boolean => {
    const payload = getValues();

    exclude.forEach((field) => {
      delete payload[field];
    });
    const fieldsValue = Object.values(payload);

    const isAllPositiveValues = fieldsValue.every((value) => !!value);
    if (!isAllPositiveValues || fieldsValue.length == 0) return false;

    if (Object.values(errors).length > 0) return false;

    return true;
  };

  return useMemo(
    () => ({
      register,
      handleSubmit,
      errors,
      formMethods,
      hasAllFilledFields,
      isLoading: isSubmitting,
    }),
    [schema, exclude, defaultValues]
  );
}
