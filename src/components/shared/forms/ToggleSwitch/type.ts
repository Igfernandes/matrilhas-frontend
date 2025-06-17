import {
  FieldError,
  FieldValues,
  Path,
  UseFormSetValue,
} from "react-hook-form";

export type ToggleSwitchProps<Payload extends FieldValues> = {
  setValue: UseFormSetValue<Payload>;
  dataTestId: string;
  label: string;
  name: Path<Payload>;
  defaultValue?: string;
  errors?: FieldError;
  tooltip?: string;
  handledChange?: (ev: React.ChangeEvent<HTMLInputElement> | undefined) => void;
  options: OptionsSwitch;
};

export type OptionsSwitch = {
  left: OptionsData;
  right: OptionsData;
};

type OptionsData = {
  text: string;
  value: string | number | boolean;
};
