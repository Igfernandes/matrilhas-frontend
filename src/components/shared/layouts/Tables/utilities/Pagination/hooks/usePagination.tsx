import { useMemo, useRef } from "react";
import { useTableContext } from "../../../contexts/table";

export function usePagination() {
  const { pagination } = useTableContext();
  const MAX_NUMBERS_PAGE = useRef<number>(3);

  const displayedGroupPage = useMemo(() => {
    return Math.ceil((pagination.current ?? 1) / MAX_NUMBERS_PAGE.current);
  }, [pagination]);

  const displayedPages = useMemo(() => {
    const start = (displayedGroupPage - 1) * MAX_NUMBERS_PAGE.current + 1;
    const end = Math.min(start + MAX_NUMBERS_PAGE.current - 1, pagination.amount ?? 0);

    const arr: number[] = [];
    for (let i = start; i <= end; i++) arr.push(i);

    return arr;
  }, [pagination.amount, displayedGroupPage]);

  const amountGroups = useMemo(() => {
    if (!pagination.amount) return 1;
    return Math.ceil(pagination.amount / MAX_NUMBERS_PAGE.current);
  }, [pagination.amount]);

  return {
    displayedGroupPage,
    displayedPages,
    amountGroups,
    MAX_NUMBERS_PAGE
  };
}
