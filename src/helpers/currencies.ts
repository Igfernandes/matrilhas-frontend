type CurrencyModel = "REAL" | "USD" | "EURO";

const currencyMap: Record<CurrencyModel, { locale: string; code: string }> = {
  REAL: { locale: "pt-BR", code: "BRL" },
  USD: { locale: "en-US", code: "USD" },
  EURO: { locale: "de-DE", code: "EUR" }, // ou fr-FR
};

export function formatMoney(value: number, currency: CurrencyModel): string {
  const config = currencyMap[currency] ?? currencyMap.USD;

  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.code,
  }).format(value);
}
