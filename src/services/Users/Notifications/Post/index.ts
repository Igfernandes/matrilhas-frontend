import { useAxios } from "@hooks/useAxios";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";

export function usePostUserNotificationsService() {
  const { axios } = useAxios();
  const { notificationsUser } = API_ROUTES;
  const { setParams } = useRoutes();

  async function postUserNotifications() {
    return axios.post(
      setParams({
        url: notificationsUser,
        data: {
          id: "",
          notificationId: "",
        },
      })
    );
  }

  return {
    postUserNotifications,
  };
}
