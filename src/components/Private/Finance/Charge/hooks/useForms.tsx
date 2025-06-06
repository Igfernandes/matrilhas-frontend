import { useFormRules } from "@hooks/Forms/useFormRules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useState } from "react";
import { ChargeUpdatePayload, ChargeUpdateSchema } from "../schemas";
import useGetServices from "@services/Services/Get/useGetServices";
import usePutCharge from "@services/Charges/Put/usePostCreateClient";
import { ChargeShape } from "@type/Charges";

dayjs.extend(customParseFormat);

type Props = {
  charge: ChargeShape;
};

export function useForms({ charge }: Props) {
  const { formMethods, handleSubmit, errors } =
    useFormRules<ChargeUpdatePayload>({
      schema: ChargeUpdateSchema,
      defaultValues: {
        status: charge.status,
        privacy: charge.privacy,
        type: charge.type,
        expired_at: charge.expired_at,
      },
    });
  const { data: services } = useGetServices();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const { mutateAsync: putCharges, isPending: isLoadingPutCharge } =
    usePutCharge();

  const submit = (payload: ChargeUpdatePayload) => {
    putCharges({
      ...payload,
      id: charge.id,
      service_id: parseInt(payload?.service_id ?? ""),
      amount: +payload.amount,
      price: +payload.price,
      promotional_price: +payload.promotional_price,
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
    services,
  };
}
