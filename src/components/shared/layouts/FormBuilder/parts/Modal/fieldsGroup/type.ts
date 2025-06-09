import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  SelectHTMLAttributes,
} from "react";

export type FormSelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  name: string;
  label: string;
  defaultValue?: string;
  options: Array<OptionsData>;
  onChange?: (ev: ChangeEvent<HTMLSelectElement>) => void;
};
export type FormGroupProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
  measure?: string;
  label: string;
  defaultValue?: string;
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
};

type OptionsData = {
  text: string;
  value: string;
  selected?: boolean;
};
