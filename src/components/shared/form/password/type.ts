import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type PasswordProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  dataTestId: string;
  isLoading?: boolean;
  label: string;
  type?: "password";
};
