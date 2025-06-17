import { API_ROUTES } from "@configs/routes/Api/api";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { GetNotificationsRequest } from "./types";
import { NotificationShape } from "@type/Notifications/Notifications";

export default function useGet() {
  const { notifications } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getNotifications(request?: GetNotificationsRequest) {
    const { id, ...query } = request ?? {};
    return await axios.get<NotificationShape[]>(
      setQueries({
        url: setParams({
          url: notifications,
          data: {
            id: id ?? "",
          },
        }),
        query,
      })
    );
  }

  return {
    getNotifications,
  };
}
