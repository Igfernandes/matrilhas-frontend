import useGetNotifications from "@services/Notifications/Get/useGetNotifications";
import usePostUserNotifications from "@services/Users/Notifications/Post/usePostUserNotifications";
import { NotificationShape } from "@type/Notifications/Notifications";
import { UsersNotificationsShape } from "@type/Notifications/UsersNotifications";
import { useEffect, useState } from "react";

export function useNotificationData() {
  const [isShowNotifications, setIsShowNotifications] =
    useState<boolean>(false);
  const { data: notificationsData } = useGetNotifications();
  const [notifications, setNotifications] = useState<Array<NotificationShape>>(
    []
  );
  const [userNotifications] = useState<
    Array<UsersNotificationsShape>
  >([]);
  const { mutateAsync: postUserNotifications } = usePostUserNotifications();

  const handleToggleNotification = (isShow: boolean) => {
    setIsShowNotifications(isShow);
    if (isShow && userNotifications?.length > 0) {
      postUserNotifications();
    }
  };

  useEffect(() => {
    setNotifications(notificationsData ?? []);
  }, [notificationsData]);

  return {
    isShowNotifications,
    handleToggleNotification,
    notifications,
    userNotifications,
  };
}
