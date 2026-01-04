import { FieldValues, Path } from "react-hook-form";

export type GroupCheckItemShape = {
  label: string;
  value: string | number;
  isChecked?: boolean;
};

export type GroupChecksProps<Payload extends FieldValues> = {
  data?: Array<GroupCheckItemShape>;
  ajax?: GroupCheckAjaxProps;
  name: Path<Payload>;
};

export type GroupCheckAjaxProps = {
  url: string;
  key: string;
  ref: GroupCheckAjaxRefShape;
};

export type GroupCheckAjaxRefShape = {
  label: string;
  value: string;
  queryIndex?: string;
};
