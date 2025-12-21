export type DateShape = {
  date: string;
  timezone_type: number;
  timezone: string;
};

export type BaseShape = {
  id: number;
};

export type CurrenciesType = "REAL" | "USD" | "EURO";

export type ImageShape = {
  src: string;
  alt?: string;
};
