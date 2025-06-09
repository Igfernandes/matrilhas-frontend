import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { DeleteSchedulePayload } from "./type";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { useDeleteScheduleService } from ".";

export default function useDeleteSchedule() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { deleteSchedule } = useDeleteScheduleService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: DeleteSchedulePayload) => {
    const { data } = await deleteSchedule(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      dispatchSnackbar({
        message: i18n("schedules.delete.success_text"),
        title: i18n("schedules.delete.success_title"),
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["schedules"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
