import { useAxios } from "@hooks/useAxios";
import { getPayloadJSON } from "@helpers/payload";
import { PutServicesPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { fileToBase64 } from "@helpers/file";

export function usePutServicesService() {
  const { axios } = useAxios();
  const { services } = API_ROUTES;

  async function putServices(payload: PutServicesPayload) {
    let photo = null;
    if (
      payload.photo instanceof FileList &&
      Array.from(payload.photo).length > 0
    ) {
      const photoFile = payload.photo[0];
      photo = {
        base64: await fileToBase64(photoFile),
        name: photoFile.name,
        type: photoFile.type,
        size: photoFile.size,
      };
      delete payload["photo"];
    } else {
      photo = payload.photo;
      delete payload["photo"];
    }

    return axios.put(
      `${services}/${payload.id}`,
      getPayloadJSON({ ...payload, photo })
    );
  }

  return {
    putServices,
  };
}
