import { ChangeEvent } from "react";
import { FieldShape } from "../../../type";

export type TabProps = {
  field?: FieldShape;
  oChangeField: (ev: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  tabActive: string;
  handleUpdateField?: (name: string, value: string) => void;
};
