export function formatPrice(value: number): string {
  return value.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR",
  });
}

export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
