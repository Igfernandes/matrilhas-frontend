import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  FilterCallback,
  TableContextData,
  TableData,
} from "./types";
import { useTableRules } from "../../hooks/useTableRules";
import { usePaginationRules } from "../../utilities/Pagination/hooks/usePaginationRules";
import { useSortRules } from "../../utilities/Sort/hooks/useSortRules";

export const TableContext = createContext({} as TableContextData);

const TableProvider = ({
  children,
  sort: sortInstance,
  pagination: paginationInstance,
  data,
  excludes,
  amountHiddenCols,
  selectors,
  setOffset,
  filters: optionsFilters,
}: TableData) => {

  // Hooks para manipulação dos dados da tabela
  const { sortTableData, getTRows, getPaginatedData } = useTableRules({ data });
  const { sort, handleChangeSort } = useSortRules({ sortInstance });

  const [filters, setFilters] = useState<Record<string, FilterCallback>>({});
  const amountRegisters = useMemo(() => data.length, [data]);

  // Atualiza os filtros
  const handleChangeFilters = useCallback((callback: Record<string, FilterCallback>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...callback,
    }));
  }, []);

  const filteredData = useMemo(() => {
    let data = sortTableData(sort);
    if (optionsFilters?.search)
      data = data.filter((item) =>
        Object.values(item)
          .some(value =>
            String(value).toLowerCase()
              .indexOf(optionsFilters?.search.toLowerCase()) !== -1));

    return Object.values(filters).reduce((acc, filterFn) => {
      return filterFn(acc);
    }, data);
  }, [sort, filters, sortTableData, optionsFilters?.search]);

  const tRows = useMemo(() => {
    return getTRows(filteredData, excludes);
  }, [filteredData, excludes, getTRows]);

  const { pagination, handleChangePagination } = usePaginationRules({
    paginationInstance,
    tRows,
    setOffset,
  });

  const paginatedTRows = useMemo(() => {
    return getPaginatedData(tRows, pagination);
  }, [tRows, pagination, getPaginatedData]);

  // Memoização das propriedades do contexto
  const contextValue = useMemo(
    () => ({
      sort,
      handleChangeSort,
      pagination,
      handleChangePagination,
      paginatedTRows,
      tRows,
      filters,
      handleChangeFilters,
      amountHiddenCols,
      amountRegisters,
      selectors
    }),
    [sort, pagination, paginatedTRows, tRows, filters, amountHiddenCols, amountRegisters, selectors, handleChangeSort, handleChangePagination, handleChangeFilters]
  );

  return (
    <TableContext.Provider value={contextValue}>
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;

// Hook para acessar o contexto
export const useTableContext = () => useContext(TableContext);
