import { AgencyShape } from "@type/Agencies";
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { AgencyProfilePayload } from "./profileSchemas";

export type ProfileManagerProps = {
  agency?: AgencyShape;
};

export type ProfileFormProps = Pick<ProfileManagerProps, "agency"> & {
  watch: UseFormWatch<AgencyProfilePayload>;
  register: UseFormRegister<AgencyProfilePayload>;
  errors: FieldErrors<AgencyProfilePayload>;
  setValue: UseFormSetValue<AgencyProfilePayload>;
};
