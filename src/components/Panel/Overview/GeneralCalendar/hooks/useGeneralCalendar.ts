import { HandleChangeRangeProps } from "@components/shared/others/Calendar";
import { SkeletonSettings } from "@components/utilities/Skeleton/type";
import dayjs from "dayjs";
import { useCallback, useMemo, useRef, useState } from "react";
type Props = {
  dateRef?: string;
};

export function useGeneralCalendar({ dateRef }: Props = {}) {
  const [date, setDate] = useState<string>(
    dateRef ?? dayjs().format("0000-MM-00")
  );
  const skeletonSettings = useRef<SkeletonSettings>({
    type: "board",
    amount: 1,
  });
  const lastRange = useRef<string>("");
  const handleUpdateDate = useCallback((newDate: string) => {
    setDate(newDate);
  }, []);

  const handleChangeRange = useCallback((date: HandleChangeRangeProps) => {
    const newDate = Array.isArray(date)
      ? dayjs(date[0]).format("0000-MM-00")
      : dayjs(date.end).format("0000-MM-00");

    if (newDate === lastRange.current) return;

    lastRange.current = newDate;
    setDate(newDate);
  }, []);

  return useMemo(
    () => ({
      date,
      handleUpdateDate,
      handleChangeRange,
      skeletonSettings,
    }),
    [date, handleUpdateDate, handleChangeRange]
  );
}
