import { FieldShape } from "@components/shared/layouts/FormBuilder/type";
import { FormShape } from "@type/Forms";

export type HookFormsProps<FormType> = {
  filter: string;
  handleFilter: (data: FormType) => boolean;
};

export type ModalFormsOperationType = "EXCLUDE" | boolean;

export type FormsPageProps = {
  targetForm: FormShape;
};

export type ComponentsProps = {
  form: FieldShape[];
  handleChangeFormFields: (fieldsForm: Array<FieldShape>) => void;
};

export type FormType = "OPENED" | "TERMINATED" | "RELEASES";
