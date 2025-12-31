import { getCPFFormatted, handleMaskCPF } from "@helpers/string";
import { InputProps } from "./type";
import { Input } from "../Input";

export const CPF = ({ name, register, ...props }: InputProps) => {

  return (
    <Input {...register(name, {
      setValueAs: (value: string) => getCPFFormatted(value)
    })} {...props} onKeyUp={(ev) => handleMaskCPF(ev)} />
  );
};
