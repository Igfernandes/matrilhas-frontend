import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostImportAgencyPayload } from "./type";
import { AxiosError } from "axios";
import { useImportAgenciesService } from ".";
import { useI18n } from "@contexts/I18n";

export default function usePostImportAgency() {
  const { t } = useI18n();
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postImportAgency } = useImportAgenciesService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostImportAgencyPayload) => {
    const { data } = await postImportAgency(payload);
    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: t(success),
        type: "success",
      });

      queryClient.removeQueries({ queryKey: ["agencies"], type: "all" });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
