import { useTableData } from "../../hooks/useTableData";
import React, { useEffect } from "react";
import { TableProps, THeadRequiredProps } from "../../type";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import { Pagination } from "../../utilities/Pagination";
import { THead } from "./Thead";
import { TFoot } from "./TFoot";
import { TBody } from "./Tbody";
import { When } from "@components/utilities/When";
import TableProvider from "../../contexts/table";
import { Sort } from "../../utilities/Sort";
import { Options } from "../../utilities/Options";
import { useColumnRules } from "../../hooks/useColumnRules";
import useWindow from "@hooks/useWindow";
import { MobileView } from "./MobileView";
import { Skeleton } from "@components/utilities/Skeleton";
import SelectorProvider from "../../contexts/selectors";
import { ActionsBar } from "@components/shared/others/ActionsBar";

export function SmartTable<TableData extends Array<Record<string, unknown>>>({
  title,
  data,
  excludes = [],
  tHeads: currentTHeads,
  hasTFoot,
  ajax,
  options = {
    pagination: {
      max: 3,
    },
    sort: {
      type: "ASC",
      reference: "name",
    },
  },
}: TableProps<TableData>) {
  const { ref, width } = useResizeObserver();
  const { windowSize } = useWindow();

  const { handleTruncateColumn, amountHiddenCols } = useColumnRules({
    tHeadsWidth: currentTHeads?.widths ?? [],
  });
  const { tHeads, setOffset, tRows, count, isLoading, offset } = useTableData({
    data,
    excludes,
    ajax,
    filters: options.filters ? options.filters : {},
    pagination: options.pagination,
    tHeads: currentTHeads as THeadRequiredProps,
  });

  useEffect(() => {
    handleTruncateColumn(ref.current as HTMLTableElement);
  }, [width, ref, handleTruncateColumn]);

  return (
    <Skeleton
      settings={{
        type: "table",
        amount: 1,
      }}
      isLoading={!tRows || isLoading}
    >
      <TableProvider
        excludes={excludes}
        data={tRows}
        setOffset={setOffset}
        tHeads={currentTHeads}
        offset={(offset === 0 ? 1 : offset) * (options.pagination?.max ?? 3)}
        amountHiddenCols={amountHiddenCols}
        table={ref}
        {...options}
      >
        <SelectorProvider data={tRows ?? []}  {...options.selector} >
          <div className="bg-white p-4 md:p-6 rounded-2xl">
            <div className="mb-2 md:mb-4">
              <div className="flex justify-between flex-wrap md:flex-nowrap">
                <div className="flex items-center md:w-[60%]">
                  <div className="mr-4">
                    <h2 className="text-xl md:text-xl">
                      <strong> {title}</strong>
                    </h2>
                  </div>
                </div>
                <div className="flex lg:w-[30%] justify-end">
                  {options.buttons}
                  <When value={!!options.sort}>
                    <Sort />
                  </When>
                  <When value={!!options.actions}>
                    <Options actions={options.actions ?? []} />
                  </When>
                </div>
              </div>
            </div>

            <div className="min-w-[30vw] ">
              <When value={windowSize.width > 650}>
                <table className="sm:table w-full border-collapse" ref={ref}>
                  <THead tHeads={tHeads} widths={currentTHeads?.widths} />
                  <TBody tHeads={tHeads} />
                  <TFoot
                    hasTFoot={hasTFoot}
                    tHeads={tHeads}
                    widths={currentTHeads?.widths}
                  />
                </table>
              </When>
              <When value={windowSize.width <= 650}>
                <MobileView tHeaders={tHeads} />
              </When>
            </div>
            <Pagination counterRegisters={count} />
          </div>
          <ActionsBar
            actions={options.actionsBar ?? []}
          />
        </SelectorProvider>
      </TableProvider>

    </Skeleton>

  );
}
