export type TurnsTile = {
  execute: () => void;
  getResponse: () => string | null;
  implicitRender: () => void;
  isExpired: () => boolean;
  ready: () => Promise<void>;
  remove: (widgetId?: string) => void;
  render: (
    container: HTMLDivElement | null,
    context: ShapeContextRecaptcha
  ) => string;
  reset: (widgetId?: string) => void;
};

type ShapeContextRecaptcha = {
  sitekey?: string;
  theme?: "light" | "dark" | "auto";
  action?: string;
};
