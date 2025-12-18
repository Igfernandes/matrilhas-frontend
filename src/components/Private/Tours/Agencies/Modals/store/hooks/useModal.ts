import { useFormRules } from "@hooks/Forms/useFormRules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ToursAgenciesSchema, ToursAgenciesUpdatePayload } from "../schemas";
import { useMemo } from "react";
import { useModalContext } from "@contexts/Modal";
import useGetTourAgencies from "@services/Tours/Agency/Get/useGet";
import { TourShape } from "@type/Tours";
import useGetAgencies from "@services/Agencies/Get/useGet";
import usePostTourAgency from "@services/Tours/Agency/Post/usePost";

dayjs.extend(customParseFormat);

type Props = {
  tour: TourShape;
};

export function useModal({ tour }: Props) {
  const { rows: agenciesRelations } = useGetTourAgencies({
    tour_id: tour?.id,
  });
  const { formMethods, handleSubmit } =
    useFormRules<ToursAgenciesUpdatePayload>({
      schema: ToursAgenciesSchema,
    });

  const { rows: agenciesData } = useGetAgencies();
  const agencies = useMemo(() => {
    return agenciesData
      .filter((agencyData) =>
        agenciesRelations
          ? !agenciesRelations.find(
              (relation) => relation.agency_id === agencyData.id
            )
          : false
      )
      .map((agencyData) => ({
        label: agencyData.name,
        value: String(agencyData.id),
      }));
  }, [agenciesData, agenciesRelations]);

  const { handleToggleModal } = useModalContext();
  const { mutateAsync: postTourAgency, isPending: isLoadingPost } =
    usePostTourAgency();

  const handleDeleteSchedule = async () => {
    // await deleteSchedule({
    //   id: parseInt(modal.id as string),
    // });
    handleToggleModal(false);
  };

  const submit = async ({ agencies }: ToursAgenciesUpdatePayload) => {
    await postTourAgency({
      tour_id: tour.id,
      in_agencies: agencies
        .filter((agencyId) => !!agencyId)
        .map((agencyId) => +agencyId),
    });

    handleToggleModal(false);
  };

  return {
    formMethods,
    handleSubmit,
    submit,
    isLoading: isLoadingPost,
    agencies,
    handleDeleteSchedule,
  };
}
