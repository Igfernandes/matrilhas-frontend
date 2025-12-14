import {
  CriteriaMode,
  DefaultValues,
  FieldValues,
  useForm as useFormReactHook,
  useWatch,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import { useEffect, useMemo } from "react";

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
    shouldFocusError: true,
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = formMethods;

  /** 🔥 useWatch só atualiza quando o campo realmente muda */
  const watchedValues = useWatch({ control });

  /**
   * 🧠 Cálculo 100% estável
   * sem state, sem useEffect, sem re-render desnecessário.
   */
  const isAllFilled = useMemo(() => {
    if (!watchedValues) return false;

    // remove excluídos
    const payload = Object.fromEntries(
      Object.entries(watchedValues).filter(
        ([key]) => !exclude.includes(key as keyof Payload)
      )
    );

    const values = Object.values(payload);

    return (
      values.length > 0 &&
      values.every((v) => v !== "" && v !== null && v !== undefined) &&
      Object.keys(errors).length === 0
    );
  }, [watchedValues, errors, exclude]);

  /** ✔️ Scroll suave apenas quando houver erro */
  useEffect(() => {
    const first = Object.keys(errors)[0];
    if (!first) return;

    const el = document.querySelector(`[name="${first}"]`);
    if (el instanceof HTMLElement) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.focus();
    }
  }, [errors]);

  /** Memo estável do resultado */
  const result = useMemo(
    () => ({
      register,
      handleSubmit,
      errors,
      formMethods,
      isAllFilled,
      isLoading: isSubmitting,
    }),
    [errors, isSubmitting, isAllFilled, formMethods, register, handleSubmit]
  );

  return result;
}
