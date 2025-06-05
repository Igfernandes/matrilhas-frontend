import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export type GroupCardItemShape = {
  icon?: React.ReactNode;
  label: string;
  value: string | number;
  text?: string;
  disabled?: boolean;
  index?: string;
  name?: string;
};

export type GroupCardsProps<Payload extends FieldValues> = {
  items: Array<GroupCardItemShape>;
  register: UseFormRegister<Payload>;
  name: Path<Payload>;
  text?: string;
};
