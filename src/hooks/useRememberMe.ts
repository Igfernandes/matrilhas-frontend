import { getCookie, setCookie } from "cookies-next/client";
import { useState } from "react";

export function useRememberMe<ShapeFields extends Record<string, string>>(
  prefix: string | undefined = ""
) {
  const [fields, setFields] = useState<ShapeFields>();
  const cookieKey = `${prefix}_remember`;

  const handleSaveCredentials = (props: ShapeFields) => {
    Object.entries(props).forEach(([key, value]) => {
      setCookie(key, value, {
        httpOnly: true,
        secure: process.env.NEXT_AMBIENT == "PROD",
      });
    });

    setFields(props);
  };

  const handleUpdateCredentials = (props: ShapeFields) => {
    setCookie(cookieKey, props);

    setFields(props);
  };

  const getCredentials = (props: ShapeFields) => {
    if (!fields) getCookie(cookieKey);

    setFields(props);
  };

  return {
    handleSaveCredentials,
    handleUpdateCredentials,
    getCredentials,
    fields,
  };
}
