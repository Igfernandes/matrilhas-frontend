import { useFormRules } from "@hooks/Forms/useFormRules";
import { SalesPayload, SalesSchema } from "../salesSchemas";
import usePostSaleGateway from "@services/Sales/PostGateway/usePost";
import { useSalesContext } from "../context";

export function useSales() {
  const { register, formMethods, handleSubmit } = useFormRules<SalesPayload>({
    schema: SalesSchema,
  });
  const { tour, agency_id} = useSalesContext();
  const { mutateAsync: postGateway, isPending: isLoadingSubmit } =
    usePostSaleGateway();

  const onSubmit = (data: SalesPayload) => {
    if (!tour) return;

    postGateway({
      ...data,
      tour_id: tour?.id,
      agency_id
    });
  };

  return {
    register,
    formMethods,
    handleSubmit,
    onSubmit,
    isLoadingSubmit,
  };
}
