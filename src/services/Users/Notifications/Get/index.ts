import { API_ROUTES } from "@configs/routes/Api/api";
import { GetNotificationsUserRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { UsersNotificationsShape } from "@type/Notifications/UsersNotifications";

export default function useGet() {
  const { notificationsUser } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getUserNotifications(request?: GetNotificationsUserRequest) {
    const { id, notificationId, ...query } = request ?? {};
    return await axios.get<UsersNotificationsShape[]>(
      setQueries({
        url: setParams({
          url: notificationsUser,
          data: {
            id: id,
            notificationId: notificationId,
          },
        }),
        query,
      })
    );
  }

  return {
    getUserNotifications,
  };
}
