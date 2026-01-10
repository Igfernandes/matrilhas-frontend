import { useFormRules } from "@hooks/Forms/useFormRules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { IntegrationsPayload, integrationsSchema } from "../schemas";
import usePostIntegrations from "@services/Integrations/Post/usePost";
import { useEffect, useMemo, useState } from "react";
import { useModalContext } from "@contexts/Modal";
import { IntegrationShape } from "@type/Integrations";
import { useI18n } from "@contexts/I18n";

dayjs.extend(customParseFormat);

type Props = {
  integrations: Array<IntegrationShape>;
};

export function useIntegrationModal({ integrations }: Props) {
  const { t } = useI18n();
  const schema = useMemo(() => integrationsSchema(t), [t]);
  const { formMethods, handleSubmit, errors, register } =
    useFormRules<IntegrationsPayload>({
      schema,
    });
  const { modal, handleToggleModal } = useModalContext();
  const { mutateAsync: postIntegrations, isPending } = usePostIntegrations();
  const [integration, setIntegration] = useState<IntegrationShape>();

  const submit = async (payload: IntegrationsPayload) => {
    if (!integration?.type || !integration.provider) return;

    await postIntegrations({
      ...payload,
      public_token: payload.public_token ?? "",
      private_token: payload.private_token ?? "",
      provider: integration.provider,
      type: integration?.type,
    });

    handleToggleModal(null);
  };

  useEffect(() => {
    const integrationTarget = integrations.find(
      (integration) => modal.id === integration.id
    );

    if (!integrationTarget) return;

    setIntegration(integrationTarget);
  }, [integrations, modal.id]);

  return {
    formMethods,
    handleSubmit,
    submit,
    isLoading: isPending,
    integration,
    errors,
    register,
  };
}
