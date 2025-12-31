import dayjs from "dayjs";
import { useCallback } from "react";
import { useFiltersContext } from "../contexts";

export function useManager() {
  const { references } = useFiltersContext();
  const isDate = useCallback((date: string) => {
    return date.indexOf("-") !== -1 && dayjs(date).isValid();
  }, []);

  const isOnlyString = useCallback(
    (date: string) => {
      return !isDate(date);
    },
    [isDate]
  );

  const builderText = useCallback(
    (key: string, value: unknown) => {
      if (references[key]) {
        return String(references[key](value));
      }
      return String(value);
    },
    [references]
  );

  return {
    isDate,
    isOnlyString,
    builderText,
  };
}
