import {
  CriteriaMode,
  DefaultValues,
  FieldValues,
  useForm as useFormReactHook,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import { useEffect, useMemo, useState } from "react";

type Props<Payload> = {
  schema: ZodType;
  exclude?: Array<keyof Payload>;
  defaultValues?: DefaultValues<Payload>;
  shouldUseNativeValidation?: boolean;
  criteriaMode?: CriteriaMode;
};

export function useFormRules<Payload extends FieldValues>({
  schema,
  exclude = [],
  defaultValues,
  shouldUseNativeValidation,
  criteriaMode,
}: Props<Payload>) {
  const formMethods = useFormReactHook<Payload>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues,
    shouldUseNativeValidation,
    criteriaMode,
    shouldFocusError: true, // já vem true por padrão
  });

  const [isAllFilled, setIsAllFilled] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = formMethods;

  const watchedValues = watch();

  useEffect(() => {
    const payload = { ...watchedValues };

    // remover campos excluídos
    exclude.forEach((field) => delete payload[field]);

    const values = Object.values(payload);

    const filled =
      values.length > 0 &&
      values.every((v) => !!v) &&
      Object.keys(errors).length === 0;

    setIsAllFilled(filled);
  }, [watchedValues, errors]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0];
      const el = document.querySelector(`[name="${firstErrorField}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        (el as HTMLElement).focus();
      }
    }
  }, [errors]);

  return useMemo(
    () => ({
      register,
      handleSubmit,
      errors,
      formMethods,
      isAllFilled,
      isLoading: isSubmitting,
    }),
    [schema, exclude, errors, isSubmitting, formMethods, defaultValues]
  );
}
