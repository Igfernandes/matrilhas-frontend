import { useFormRules } from "@hooks/Forms/useFormRules";
import { SalesPayload, SalesSchema } from "../salesSchemas";
import usePostSaleGateway from "@services/Sales/PostGateway/usePost";
import { useSalesContext } from "../context";

export function useSales() {
  const { register, formMethods, handleSubmit } = useFormRules<SalesPayload>({
    schema: SalesSchema,
  });
  const { tour } = useSalesContext();
  const { mutateAsync: postGateway } = usePostSaleGateway();

  const onSubmit = (data: SalesPayload) => {
    if (!tour) return;

    postGateway({
      ...data,
      tour_id: tour?.id,
    });
  };

  return {
    register,
    formMethods,
    handleSubmit,
    onSubmit,
  };
}
