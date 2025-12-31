import { useMemo, useCallback, useState, useEffect, useRef } from "react";
import { HookTableDataProps } from "../type";
import { TDataOptions } from "../presets/SmartTable/Tbody/TData/type";
import { useColumnMetrics } from "./useColumnMetrics";
import { useTableMetrics } from "./useTableMetrics";
import useGetTable from "./useGet";
import { PaginationOptionShape } from "../utilities/Pagination/type";

type Props<TableData> = HookTableDataProps<TableData> & {
  pagination: PaginationOptionShape | undefined;
};

export function useTableData<TableData extends Array<Record<string, unknown>>>({
  data,
  excludes,
  tHeads: tHeadProps,
  filters,
  pagination,
  ajax,
}: Props<TableData>) {
  const resetDataRef = useMemo(() => {
    const map = new Map<unknown, unknown>();
    return Array.from(map.values()) as TableData;
  }, []);
  const refRows = useRef<TableData>(resetDataRef);
  const filtersRef = useRef<Record<string, unknown>>(null);
  const paginationMax = useMemo(() => pagination?.max ?? 3, [pagination]);
  const [offset, setOffset] = useState<number>(0);
  const { rows, count, isPending, refetch } = useGetTable(
    {
      ...filters,
      limit: 100,
      start: offset,
    },
    ajax?.url,
    ajax?.key
  );
  const updateOffset = (newOffset: number) => {
    setOffset(newOffset);
    const offsetMin = 100 / paginationMax;
    const offsetTotal = rows.length / paginationMax;

    if (offsetTotal > offsetMin && newOffset !== offset) {
      refetch();
    }
  };

  const appendRows = useCallback((prev: TableData, newRows: TableData) => {
    const map = new Map<unknown, unknown>();

    prev.forEach((item, key) => map.set(item?.id ?? rows[key]?.id, item));
    newRows.forEach((item: TableData[number], key) =>
      map.set(item?.id ?? rows[key]?.id, item)
    ); // sobrescreve

    return Array.from(map.values()) as TableData;
  }, [rows]);

  const tRows = useMemo(() => {
    let rowData = data as TableData;
    if (ajax?.url) {
      rowData = rows.map((row) => ajax.builder(row)) as TableData;
    }

    const rowNew = appendRows(refRows.current, rowData) as TableData;
    refRows.current = rowNew;
    return rowNew;
  }, [ajax, data, rows, appendRows]);
  const { data: tHeadsData = [], widths = [] } = tHeadProps ?? {};

  const { getCurrentWidthColumn, adjustCellContent } = useColumnMetrics({
    widths,
  });

  const { getColumnContent, getTableElement } = useTableMetrics();

  /**
   * Cabeçalhos da tabela, derivados e memoizados
   */
  const tHeads = useMemo(() => {
    if (tHeadsData.length > 0) return tHeadsData;

    if (data && data.length > 0) {
      return Object.keys(data[0]).filter((k) => !excludes.includes(k));
    }

    return [];
  }, [tHeadsData, data, excludes]);

  /**
   * Gerenciador de conteúdo das células
   * Memoizado para não recriar em toda renderização
   */
  const handleManagerColumn = useCallback(
    (el: HTMLTableCellElement, { value, index }: TDataOptions) => {
      if (!el || widths.length === 0 || !value) return;

      const table = getTableElement(el);
      if (!table) return;

      const columnContent = getColumnContent(value);
      if (!columnContent) return;

      const width = getCurrentWidthColumn(table, index);
      el.setAttribute("width", width.toString());

      adjustCellContent(el, columnContent, width);
    },
    [
      widths,
      getTableElement,
      getColumnContent,
      getCurrentWidthColumn,
      adjustCellContent,
    ]
  );

  useEffect(() => {
    if (filtersRef.current === filters || !filters) return;

    refRows.current = resetDataRef;
    filtersRef.current = filters;
    setOffset(0);
    refetch();
  }, [filters, resetDataRef, paginationMax, refetch]);

  return {
    tHeads,
    tRows,
    setOffset: updateOffset,
    count,
    offset,
    isLoading: isPending,
    handleManagerColumn,
  };
}
