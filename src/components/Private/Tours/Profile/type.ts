import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { TourProfilePayload } from "./profileSchemas";
import { ProfileManagerProps } from "../type";

export type ProfileFormProps = Pick<ProfileManagerProps, "tour"> & {
  watch: UseFormWatch<TourProfilePayload>;
  register: UseFormRegister<TourProfilePayload>;
  errors: FieldErrors<TourProfilePayload>;
  setValue: UseFormSetValue<TourProfilePayload>;
};
