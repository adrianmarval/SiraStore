export const currencyFormat = (value: number, locale: string = "en-US", currency: string = "USD") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};
