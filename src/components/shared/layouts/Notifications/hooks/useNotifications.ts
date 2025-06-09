import { useEffect, useState } from "react";

type Props = {
  isShow: boolean;
};

export function useNotifications({ isShow }: Props) {
  const [notificationBarStyled, setNotificationBarStyled] =
    useState<string>("");

  useEffect(() => {
    setNotificationBarStyled(!isShow ? "opacity-0 mr-[-35%]" : "");
  }, [isShow]);

  return {
    notificationBarStyled,
  };
}
