import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { SaleProfilePayload } from "./profileSchemas";

export type ProfileFormProps = {
  watch: UseFormWatch<SaleProfilePayload>;
  register: UseFormRegister<SaleProfilePayload>;
  errors: FieldErrors<SaleProfilePayload>;
  setValue: UseFormSetValue<SaleProfilePayload>;
};
