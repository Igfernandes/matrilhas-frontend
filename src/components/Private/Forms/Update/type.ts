import { JSX } from "react";

export type TDataForms = {
  id: React.ReactNode;
  value: string;
  created_at: string;
  actions: JSX.Element;
};

export type ModalFormsOperationType = "SHARED" | "DELETE" | boolean;
