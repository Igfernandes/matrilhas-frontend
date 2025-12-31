import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { AgencyProfilePayload } from "./profileSchemas";
import { SaleShape } from "@type/Sales";

export type ProfileManagerProps = {
  sale: SaleShape;
};

export type ProfileFormProps = Pick<ProfileManagerProps, "sale"> & {
  watch: UseFormWatch<AgencyProfilePayload>;
  register: UseFormRegister<AgencyProfilePayload>;
  errors: FieldErrors<AgencyProfilePayload>;
  setValue: UseFormSetValue<AgencyProfilePayload>;
};
