import { DetailedHTMLProps, InputHTMLAttributes, useCallback } from "react";

export function useInput() {
  const isUpLabel = useCallback(
    ({
      placeholder,
      type,
      value,
      defaultValue,
    }: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >) => {
      if (placeholder) return true;

      if (
        ["file", "date", "datetime-local", "color"].includes(
          `${type?.toLowerCase()}`
        )
      )
        return true;

      if (value || defaultValue) return true;
    },
    []
  );

  return {
    isUpLabel,
  };
}
