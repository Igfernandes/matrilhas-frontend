import React, { useEffect } from "react";
import { TableProps, THeadRequiredProps } from "../../type";
import { Pagination } from "../../utilities/Pagination";
import { THead } from "./Thead";
import { TFoot } from "./TFoot";
import { TBody } from "./Tbody";
import { When } from "@components/utilities/When";
import { Sort } from "../../utilities/Sort";
import { Options } from "../../utilities/Options";
import TableProvider from "../../contexts/table";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import { useColumnRules } from "../../hooks/useColumnRules";
import { useTableData } from "../../hooks/useTableData";
import SelectorProvider from "../../contexts/selectors";

export function Table<TableData extends Array<Record<string, unknown>>>({
  title,
  data,
  excludes = [],
  tHeads: currentTHeads,
  hasTFoot,
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

  const { handleTruncateColumn, amountHiddenCols } = useColumnRules({
    tHeadsWidth: currentTHeads?.widths ?? [],
  });
  const { tHeads } = useTableData({
    data,
    excludes,
    tHeads: currentTHeads as THeadRequiredProps,
    pagination: {
      max: options.pagination?.max ?? 3,
    }
  });

  useEffect(() => {
    handleTruncateColumn(ref.current as HTMLTableElement);
  }, [width, handleTruncateColumn, ref]);

  return (
    <TableProvider
      excludes={excludes}
      data={[]}
      tHeads={currentTHeads}
      amountHiddenCols={amountHiddenCols}
      table={ref}
      {...options}
    >
      <SelectorProvider data={[]} {...options.selector} >
        <div className="bg-white p-6 rounded-2xl">
          <div className=" mb-6">
            <div className="flex justify-between">
              <div className="flex items-center w-[50%]">
                <div className="mr-4">
                  <h2 className="text-2xl">
                    <strong>{title}</strong>
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
          <div className="min-w-[30vw]">
            <table className=" w-full border-collapse" ref={ref}>
              <THead tHeads={tHeads} widths={currentTHeads?.widths} />
              <TBody />
              <TFoot
                hasTFoot={hasTFoot}
                tHeads={tHeads}
                widths={currentTHeads?.widths}
              />
            </table>
          </div>
          <Pagination />
        </div>
      </SelectorProvider>
    </TableProvider>
  );
}
