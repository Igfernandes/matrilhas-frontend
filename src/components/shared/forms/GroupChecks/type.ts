import { FieldValues, Path } from "react-hook-form";

type GroupCheckItemShape = {
  label: string;
  value: string | number;
  isChecked?: boolean;
};

export type GroupChecksProps<Payload extends FieldValues> = {
  items: Array<GroupCheckItemShape>;
  name: Path<Payload>;
};
