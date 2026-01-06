import { JSX } from "react";
import { TInput } from "./Input";
import { TEmail } from "./Email";
import { TPhone } from "./Phone";
import { TDate } from "./Date";
import { TDependents } from "./Dependents";
import { TCpf } from "./Cpf";
import { TGallery } from "./Gallery";
import { TFile } from "./File";
import { TFields } from "../type";
import { TReference } from "./Reference";
import { TNumber } from "./Number";
import { TDatetime } from "./Datetime";
import { TTime } from "./Time";
import { TColor } from "./Color";
import { TTextarea } from "./Textarea";

export const components = {
  text: TInput,
  email: TEmail,
  number: TNumber,
  password: TInput,
  phone: TPhone,
  name: TInput,
  date: TDate,
  "datetime-local": TDatetime,
  url: TInput,
  time: TTime,
  color: TColor,
  textarea: TTextarea,
  dependents: TDependents,
  birthdate: TDate,
  cpf: TCpf,
  reference: TReference,
  gallery: TGallery,
  file: TFile,
} as Record<string, (props: TFields) => JSX.Element>;
