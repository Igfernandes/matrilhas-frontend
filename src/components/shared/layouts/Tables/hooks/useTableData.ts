import { useMemo, useCallback, useState, useEffect } from "react";
import { HookTableDataProps } from "../type";
import { TDataOptions } from "../presets/SmartTable/Tbody/TData/type";
import { useColumnMetrics } from "./useColumnMetrics";
import { useTableMetrics } from "./useTableMetrics";
import useGetTable from "./useGet";

export function useTableData<TableData extends Array<Record<string, unknown>>>({
  data,
  excludes,
  tHeads: tHeadProps,
  ajax,
}: HookTableDataProps<TableData>) {
  const [offset, setOffset] = useState<number>(0);
  const { rows, count, isPending, refetch } = useGetTable(
    {
      limit: 50,
      start: offset,
    },
    ajax?.url,
    ajax?.key
  );
  const [tRows, setTRows] = useState<TableData>((data ?? []) as TableData);

  const updateOffset = (newOffset: number) => {
    setOffset(newOffset);
    if (newOffset !== offset) refetch();
  };

  const currentData = useMemo(() => {
    if (ajax?.url) {
      return rows.map((row) => ajax.builder(row)) as TableData;
    }
    return (data ?? []) as TableData;
  }, [ajax, data, rows]);
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

  const appendRows = useCallback((rows: TableData) => {
    setTRows((prev) => {
      const map = new Map<unknown, unknown>();
      prev.forEach((item) => map.set(item.id, item));
      rows.forEach((item: TableData[number]) => map.set(item.id, item)); // sobrescreve

      return Array.from(map.values()) as TableData;
    });
  }, []);

  useEffect(() => {
    if (isPending || currentData.length == 0) return;

    appendRows(currentData);
  }, [currentData, isPending, appendRows]);

  return {
    tHeads,
    tRows,
    setOffset: updateOffset,
    count,
    isLoading: isPending,
    handleManagerColumn,
  };
}
