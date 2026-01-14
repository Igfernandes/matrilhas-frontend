import { useFormRules } from "@hooks/Forms/useFormRules";
import { SettingsPayload, SettingsSchema } from "../schemas";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { getNumberFormatted } from "@helpers/string";
import { useEffect, useState } from "react";
import usePutClientProfile from "@services/Clients/Profile/usePutClientProfile";
import { useClientNavigationContext } from "@contexts/Navigation/Client";

dayjs.extend(customParseFormat);

export function useForms() {
  const { clientAuth } = useClientNavigationContext();
  const { formMethods, handleSubmit, errors } = useFormRules<SettingsPayload>({
    schema: SettingsSchema,
  });
  const { setValue } = formMethods
  const { mutateAsync: putUsers, isPending } = usePutClientProfile();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const submit = ({ ...payload }: SettingsPayload) => {
    putUsers({
      ...payload,
      id: clientAuth?.id as number,
    });
  };
  useEffect(() => {
    if (!clientAuth) return;
    Object.entries({
      name: clientAuth?.name,
      phone: getNumberFormatted(clientAuth?.phone),
      email: clientAuth?.email ?? "",
    }).forEach(([colName, ColValue]) =>
      setValue(colName as keyof SettingsPayload, ColValue)
    );
  }, [clientAuth, setValue]);

  const handleToggleModal = (isShowModal: boolean) => {
    setIsShowModal(isShowModal);
  };

  return {
    formMethods,
    handleSubmit,
    errors,
    submit,
    clientAuth,
    isShowModal,
    handleToggleModal,
    isPending
  };
}
