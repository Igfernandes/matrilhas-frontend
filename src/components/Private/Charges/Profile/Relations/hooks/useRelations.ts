import { ChargeShape } from "@type/Charges";
import { useCallback, useEffect, useMemo } from "react";
import { ChargeRelationsPayload } from "../type";
import useGetRelations from "@services/Charges/Relations/Get/useGet";
import usePostChargeRelations from "@services/Charges/Relations/Post/usePostChargeClients";
import { ChargeRelationsSchema } from "../schemas";
import { useFormRules } from "@hooks/Forms/useFormRules";

type Props = {
  charge: ChargeShape;
};

export function useRelations({ charge }: Props) {
  const { rows: relations } = useGetRelations({ charge_id: charge.id });
  const relation = useMemo(() => {
    return relations[0];
  }, [relations]);
  const { formMethods, handleSubmit } = useFormRules<ChargeRelationsPayload>({
    schema: ChargeRelationsSchema,
  });
  const { mutateAsync: postChargeRelations } = usePostChargeRelations();

  const onSubmit = useCallback(
    (payload: ChargeRelationsPayload) => {
      postChargeRelations({
        ...payload,
        charge_id: charge.id,
      });
    },
    [charge.id, postChargeRelations]
  );

  useEffect(() => {
    formMethods.setValue(
      "agency_ids",
      relation?.agencies?.map((relation) => relation.id) || []
    );
    formMethods.setValue(
      "client_ids",
      relation?.clients?.map((relation) => relation.id) || []
    );
  }, [relation, formMethods]);

  return {
    formMethods,
    handleSubmit,
    onSubmit,
    relation,
  };
}
