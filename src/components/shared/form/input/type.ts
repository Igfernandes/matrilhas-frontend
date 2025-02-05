import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  dataTestId: string;
  isLoading?: boolean;
  label: string;
  type?: "text" | "email" | "search" | "hidden" | "tel" | "url";
};
