import { isEquals } from "@helpers/json";
import useGetNotifications from "@services/Notifications/Get/useGet";
import usePostUserNotifications from "@services/Users/Notifications/Post/usePost";
import { NotificationShape } from "@type/Notifications/Notifications";
import { useCallback, useEffect, useState } from "react";

export function useNotificationData() {
  const [isShowNotifications, setIsShowNotifications] = useState(false);

  // PAGINAÇÃO
  const [start, setStart] = useState(0);
  const limit = 50;

  const {
    rows,
    count,
    viewedCount,
    isPending: isLoading,
  } = useGetNotifications({
    entity: "USER",
    start,
    limit,
  });
  const [notifications, setNotifications] = useState<NotificationShape[]>([]);
  const { mutateAsync: postUserNotifications } = usePostUserNotifications();

  const handleToggleNotification = (isShow: boolean) => {
    setIsShowNotifications(isShow);
    if (isShow && viewedCount < count) {
      postUserNotifications();
    }
  };

  // ACUMULA NOTIFICAÇÕES (lazy load)
  useEffect(() => {
    if (!rows || rows.length === 0) return;

    setNotifications((prev) => {
      // 1. Se já temos a quantidade correspondente → não faz nada
      if (prev.length >= count) return prev;

      // 2. Se as novas rows já estão dentro do prev, não atualiza
      const lastChunk = prev.slice(-rows.length);

      if (isEquals(lastChunk, rows)) {
        return prev;
      }

      // 3. Caso contrário, adiciona
      const merged = [...prev, ...rows];
      // remove duplicatas
      const unique = merged.filter(
        (item, index, self) => index === self.findIndex((n) => n.id === item.id)
      );

      return unique;
    });
  }, [rows, count]);

  const handleScroll = useCallback(
    (ev: React.UIEvent<HTMLDivElement>) => {
      const div = ev.currentTarget;

      if (!div || notifications.length >= count) return;

      const { scrollTop, clientHeight, scrollHeight } = div;

      const isEnd = scrollTop + clientHeight >= scrollHeight - 20; // margem de 20px

      const hasMore = notifications.length < count;

      if (isEnd && hasMore) {
        setStart((prev) => prev + limit);
      }
    },
    [notifications, count]
  );

  return {
    isShowNotifications,
    handleToggleNotification,
    notifications,
    count,
    viewedCount,
    isLoadingNotifications: isLoading,
    handleScroll,
  };
}
