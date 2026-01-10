import { useFormRules } from "@hooks/Forms/useFormRules";
import { SubscribePayload, SubscribeSchema } from "../schemas";
import usePostSubscribeService from "@services/Subscribers/Post/usePost";
import { useCallback } from "react";

export function useSubscribe() {
  const { formMethods, handleSubmit, register } =
    useFormRules<SubscribePayload>({
      schema: SubscribeSchema,
    });
  const { reset } = formMethods;
  const { mutateAsync: subscribe, isPending: isLoading } =
    usePostSubscribeService();

  const onSubmit = useCallback(
    (payload: SubscribePayload) => {
      subscribe({ ...payload, data: payload, type: "CLIENT" }).then(() => {
        reset();
      });
    },
    [subscribe, reset]
  );

  return {
    formMethods,
    handleSubmit,
    register,
    onSubmit,
    isLoading,
  };
}
