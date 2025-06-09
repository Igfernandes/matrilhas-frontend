import { handleMaskCEP, handleMaskCPF, handleMaskPhone } from "@helpers/string";
import { Input } from "../../fields/Input";
import { FieldShape } from "../../type";

export const classNameDefault = "w-full h-7 py-1 px-2";
export const fieldsUser = {
  email: ({ className, ...props }: FieldShape) => (
    <Input
      type="email"
      className={`${classNameDefault} ${className}`}
      {...props}
    />
  ),
  password: ({ className, ...props }: FieldShape) => (
    <Input
      type="password"
      className={`${classNameDefault} py-1 px-2 ${className}`}
      {...props}
    />
  ),
  phone: ({ className, ...props }: FieldShape) => (
    <Input
      type="tel"
      onChange={handleMaskPhone}
      className={`${classNameDefault} ${className}`}
      {...props}
    />
  ),
  cpf: ({ className, ...props }: FieldShape) => (
    <Input
      type="text"
      onChange={handleMaskCPF}
      className={`${classNameDefault} ${className}`}
      {...props}
    />
  ),
  cep: ({ className, ...props }: FieldShape) => (
    <Input
      type="text"
      onChange={handleMaskCEP}
      className={`${classNameDefault} ${className}`}
      {...props}
    />
  ),
};
