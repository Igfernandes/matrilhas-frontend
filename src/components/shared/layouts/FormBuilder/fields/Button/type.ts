import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonProps = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "type"
> & {
  type?: string;
  label?: string;
  LeftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  form?: string;
};
