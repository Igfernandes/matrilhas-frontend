import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReturn,
} from "react-hook-form";

export type FiltersContextProps = {
  id: string;
  children: React.ReactNode;
};

export type FiltersContextData = {
  filters: Record<string, Record<string, unknown>>;
  handleAlterFilters: (
    newFilters: Record<string, Record<string, unknown>>
  ) => void;
  handleSubmit: UseFormHandleSubmit<FieldValues, FieldValues>;
  register: UseFormRegister<FieldValues>;
  updateReferences: (
    key: string,
    callback: (value: unknown) => unknown
  ) => void;
  references: Record<string, (value: unknown) => unknown>;
  methods: UseFormReturn<FieldValues, unknown, undefined>;
};
