import { useFormRules } from "@hooks/Forms/useFormRules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useMemo, useState } from "react";
import { ChargeUpdatePayload, ChargeUpdateSchema } from "../schemas";
import usePutCharge from "@services/Charges/Put/usePut";
import { ChargeShape } from "@type/Charges";
import { useI18n } from "@contexts/I18n";

dayjs.extend(customParseFormat);

type Props = {
  charge: ChargeShape;
};

export function useForms({ charge }: Props) {
  const { t } = useI18n()
  const schema = useMemo(() => ChargeUpdateSchema(t), [t]);
  const { formMethods, handleSubmit, errors } =
    useFormRules<ChargeUpdatePayload>({
      schema,
      defaultValues: charge,
    });
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const { mutateAsync: putCharges, isPending: isLoadingPutCharge } =
    usePutCharge();

  const submit = ({
    ...payload
  }: ChargeUpdatePayload) => {
    putCharges({
      ...payload,
      id: charge.id,
    });
  };

  const handleToggleModel = (isShowModal: boolean) => {
    setIsShowModal(isShowModal);
  };

  return {
    formMethods,
    handleSubmit,
    errors,
    submit,
    isShowModal,
    handleToggleModel,
    isLoadingPutCharge,
  };
}
