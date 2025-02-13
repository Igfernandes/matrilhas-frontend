import { I18nProps } from "@configs/i18n";

export type SnackbarContextData = {
  dispatchSnackbar: (
    args: Pick<SnackbarProps, "type" | "message" | "title">
  ) => void;
};

export type SnackbarProps = {
  type?: "error" | "success" | "notice";
  message?:  I18nProps<string> | string;
  title?:  I18nProps<string> | string;
  timestamp: Date;
};

export type SnackbarData = Pick<SnackbarProps, "message" | "type" | "title">;
