import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export type SelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  dataTestId: string;
  label: string;
  errors?: FieldError;
  options: Array<OptionsShape>;
  handledChange?: (
    ev: React.ChangeEvent<HTMLInputElement> | undefined
  ) => void;
};

export type OptionsShape = {
  value: string | number | null;
  text: string;
  selected?: boolean;
};
