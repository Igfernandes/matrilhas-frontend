import { useFormRules } from "@hooks/Forms/useFormRules";
import { DispatchersSchema, FormsPayload } from "../schema";
import { useMessagesDispatcherStep } from "./useMessagesDispatcherStep";
import usePostMessagesDispatcher from "@services/Dispatchers/Post/usePost";
import {
  TypesPeriodsMessagesDispatcher,
  TypesPlatformsMessagesDispatchers,
  TypesWeekdaysMessagesDispatcher,
} from "@type/MessagesDispatcherShape";
import { useRouter } from "next/router";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { useI18n } from "@contexts/I18n";
import { useMemo } from "react";

export function useMessagesDispatcherForms() {
  const { t } = useI18n();
  const schema = useMemo(() => DispatchersSchema(t), [t]);
  const { formMethods, handleSubmit } = useFormRules<FormsPayload>({
    schema,
    defaultValues: {
      all_clients: false,
    },
  });
  const router = useRouter();
  const {
    handleNextStep,
    handlePrevStep,
    stepActive,
    isLastStep,
    setStepActive,
  } = useMessagesDispatcherStep({
    formMethods,
  });
  const {
    mutateAsync: postMessagesDispatcher,
    isPending: isLoadingPostNotification,
  } = usePostMessagesDispatcher();

  const submit = ({
    platforms,
    period,
    weekday,
    client_ids,
    ...payload
  }: FormsPayload) => {
    postMessagesDispatcher({
      ...payload,
      client_ids: client_ids.filter((id) => id > 0) as number[],
      platforms: platforms.filter(
        (platform) => typeof platform !== "boolean"
      ) as TypesPlatformsMessagesDispatchers,
      period: period as TypesPeriodsMessagesDispatcher,
      weekday: (weekday ?? []).filter(
        (platform) => typeof platform !== "boolean"
      ) as TypesWeekdaysMessagesDispatcher,
    }).then(() => router.push(privateRoutes.dispatcher));
  };

  return {
    formMethods,
    handleNextStep,
    handlePrevStep,
    stepActive,
    isLastStep,
    handleSubmit,
    setStepActive,
    submit,
    isLoading: isLoadingPostNotification,
  };
}
