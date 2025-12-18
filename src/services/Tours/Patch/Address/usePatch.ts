import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PatchAgencyAddressPayload } from "./type";
import i18n from "@configs/i18n"
import { usePatchAgencyAddressService } from "@services/Agencies/Patch/Address";

export default function usePatchAgencyAddress() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { patchAgencyAddress } = usePatchAgencyAddressService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PatchAgencyAddressPayload) => {
    const { data } = await patchAgencyAddress(payload);
    return data;
  };

  return useMutation({
    mutationFn: handleMutate,

    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });

      queryClient.invalidateQueries({ queryKey: ["agencies"] });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
