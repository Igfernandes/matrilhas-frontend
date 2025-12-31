import { useEffect, useState } from "react";
import { TimeLineChartProps } from "../type";

export function useTimeLineChart({ data }: Pick<TimeLineChartProps, "data">) {
  const [labels, setLabels] = useState<Array<string>>([]);
  const [dates, setDates] = useState<Array<string>>([]);

  const handleUpdateDate = () => {
    const onlyDates = data.map((item) => item.date); // ex: ['2024-05-01', '2024-05-20', '2024-06-10']

    const uniqueMonthDatesMap = new Map<string, string>();

    onlyDates.forEach((fullDate) => {
      const [year, month] = fullDate.split("-");
      const key = `${year}-${month}`; // "2024-05"

      // Salva a primeira data encontrada do mês
      if (!uniqueMonthDatesMap.has(key)) {
        uniqueMonthDatesMap.set(key, fullDate);
      }
    });

    const uniqueDates = Array.from(uniqueMonthDatesMap.values());

    setDates(uniqueDates);
  };

  useEffect(() => {
    setLabels([...new Set(data.map((item) => item.label))]);
    handleUpdateDate();
  }, [data]);

  return {
    labels,
    dates,
  };
}
