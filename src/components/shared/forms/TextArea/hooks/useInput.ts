import { DetailedHTMLProps, TextareaHTMLAttributes, useCallback } from "react";

export function useTextarea() {
  const isUpLabel = useCallback(
    ({
      placeholder,
      value,
      defaultValue,
    }: DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >) => {
      if (placeholder) return true;

      if (value || defaultValue) return true;
    },
    []
  );

  return {
    isUpLabel,
  };
}
