import { useUserNavigationContext } from "@contexts/UserNavigation";
import useGetNotifications from "@services/Notifications/Get/useGetNotifications";
import useGetUserNotifications from "@services/Users/Notifications/Get/useGetUserNotifications";
import usePostUserNotifications from "@services/Users/Notifications/Post/usePostUserNotifications";
import { NotificationShape } from "@type/Notifications/Notifications";
import { UsersNotificationsShape } from "@type/Notifications/UsersNotifications";
import { useEffect, useState } from "react";

export function useNotificationData() {
  const [isShowNotifications, setIsShowNotifications] =
    useState<boolean>(false);
  const { userAuth } = useUserNavigationContext();
  const { data: notificationsData } = useGetNotifications();
  const { data: userNotificationData } = useGetUserNotifications({
    id: userAuth?.id,
  });
  const [notifications, setNotifications] = useState<Array<NotificationShape>>(
    []
  );
  const [userNotifications, setUserNotifications] = useState<
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
    setUserNotifications(userNotificationData ?? []);
    setNotifications(notificationsData ?? []);
  }, [userNotificationData, notificationsData]);

  return {
    isShowNotifications,
    handleToggleNotification,
    notifications,
    userNotifications,
  };
}
