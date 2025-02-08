import { Axios, AxiosError } from "axios";
import { useSnackbar } from "./useSnackbar";
import { env } from "@configs/variables";

type CustomAxiosError = AxiosError<{
  error?: string;
}>;

export function useAxios() {
  const { dispatchSnackbar } = useSnackbar();

  const axios = new Axios({
    baseURL: env.API_URL,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });

  function handleAxiosError(error: unknown) {
    let messageError = "";
    const typedError = error as CustomAxiosError;
    const responseData = typedError.response?.data;

    const responseError = (!!responseData && responseData.error) as string;
    if (responseError) {
      messageError = responseError;
    } else {
      messageError = "response.error.default";
    }

    dispatchSnackbar({ message: messageError, type: "error" });

    return { messageError };
  }
  return {
    axios,
    handleAxiosError,
  };
}
