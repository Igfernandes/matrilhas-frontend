import { useFormRules } from "@hooks/Forms/useFormRules";
import { ChargeSchema, ChargesPayload } from "../schemas";
import { ClientShape } from "@type/Clients";
import usePostCreateCharge from "@services/Charges/Post/usePostCreateClient";
import { useRouter } from "next/router";
import { privateRoutes } from "@configs/routes/Web/navigation";

type Props = {
  clientsSelected: Array<ClientShape>;
};

export function useCharge({ clientsSelected }: Props) {
  const { formMethods, errors } = useFormRules<ChargesPayload>({
    schema: ChargeSchema,
  });
  const { mutateAsync: postCharge, isPending } = usePostCreateCharge();
  const router = useRouter();

  const submit = (payload: ChargesPayload) => {
    postCharge({
      ...payload,
      service_id: +payload.service_id,
      price: +payload.price,
      amount: +payload.amount,
      promotional_price: +payload.promotional_price,
      clients: clientsSelected.map((client) => client.id),
    }).then(() => {
      setTimeout(() => {
        router.push(privateRoutes.finance);
      }, 2000);
    });
  };

  return {
    formMethods,
    errors,
    submit,
    isPending
  };
}
