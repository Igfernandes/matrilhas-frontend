import { TableActions } from "./utilities/Options/type";
import { PaginationOptionShape } from "./utilities/Pagination/type";
import { SortShape } from "./utilities/Sort/type";
import { SelectorShape } from "../Selector/type";
import { RefObject } from "react";

export type TableProps<TableData> = {
  title: string;
  data?: TableData;
  ajax?: TableAjaxProps;
  tHeads?: THeadProps;
  excludes?: Array<string>;
  sort?: SortShape;
  hasTFoot?: boolean;
  options: {
    selector?: TableSelectorProps;
    sort?: SortShape;
    pagination?: PaginationOptionShape;
    actions?: Array<TableActions>;
    actionsBar?: Array<TableActions>;
    buttons?: React.ReactNode;
    filters?: Record<string, unknown>;
  };
};

export type TableSelectorProps = {
  selectorRef: RefObject<SelectorShape[]>;
};

export type HookTableDataProps<TableData> = {
  data?: TableData;
  excludes: Array<string>;
  ajax?: TableAjaxProps;
  filters?: Record<string, unknown> | undefined;
  tHeads: THeadRequiredProps;
};

export type THeadProps = {
  data?: Array<string>;
  widths?: Array<number>;
};

export type THeadRequiredProps = {
  data: Array<string>;
  widths: Array<number>;
};

export type HookTableProps<TableData> = {
  sort: SortShape;
  data: TableData;
  pagination: PaginationOptionShape;
};

export type TableAjaxProps = {
  url: string;
  key: string;
  builder: (entity: unknown) => Record<string, unknown>;
};

export type TableShape = Array<Record<string, unknown>>;
