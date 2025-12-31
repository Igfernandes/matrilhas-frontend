import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  dataTestId: string;
  isLoading?: boolean;
  label?: string;
  name: string;
  errors?: FieldError;
  tooltip?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  prefix?: string;
  handleChange?: (ev: React.ChangeEvent<HTMLInputElement> | undefined) => void;
};
