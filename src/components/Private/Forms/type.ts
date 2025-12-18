import { FormShape } from "../../../types/Forms";
import { FieldShape } from "@components/shared/layouts/FormBuilder/type";

export type HookFormsProps<FormType> = {
  filter: string;
  handleFilter: (data: FormType) => boolean;
};


export type FormsCardProps = {
  filterObjects: <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape
  ) => boolean;
  search: string;
};

export type ModalFormsOperationType = "EXCLUDE" | boolean;

export type FormsPageProps = {
  targetForm: FormShape;
};

export type ComponentsProps = {
  form: FieldShape[];
  handleChangeFormFields: (fieldsForm: Array<FieldShape>) => void;
};
