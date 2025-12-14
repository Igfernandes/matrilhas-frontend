import { useCallback, useMemo, useRef, useState } from "react";
import { PaginationOptionShape, PaginationShape } from "../type";
import { getOnlyNumberRange } from "@helpers/numbers";

type Props = {
  paginationInstance?: PaginationOptionShape;
  tRows: Array<unknown[]>;
  setOffset?: (newOffset: number) => void;
};

export function usePaginationRules({
  paginationInstance,
  tRows,
  setOffset,
}: Props) {
  const INITIAL_PAGE = useRef(1);
  const MAX_PAGINATION = useRef(paginationInstance?.max ?? 10);

  const pageAmount = useMemo(() => {
    return Math.ceil(tRows.length / MAX_PAGINATION.current);
  }, [tRows]);

  const [pagination, setPagination] = useState<PaginationShape>({
    max: MAX_PAGINATION.current,
    current: INITIAL_PAGE.current,
  });

  const handleChangePagination = useCallback(
    (pageNumber: number) => {
      if (pageNumber >= pageAmount - 3 && setOffset)
        setOffset((pageNumber - 1) * MAX_PAGINATION.current);
      setPagination((prev) => ({
        ...prev,
        current: getOnlyNumberRange(pageNumber, 1, pageAmount),
      }));
    },
    [pageAmount, setOffset]
  );

  return {
    pagination: {
      ...pagination,
      amount: pageAmount,
    },
    handleChangePagination,
  };
}
