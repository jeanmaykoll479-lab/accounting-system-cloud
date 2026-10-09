export function formatCurrency(value: number, currency: string = "NIO"): string {
  return new Intl.NumberFormat("es-NI", {
    style: "currency",
    currency,
  }).format(value);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("es-NI").format(date);
}

export function formatPercentage(value: number): string {
  return `${(value * 100).toFixed(2)}%`;
}

export function calculateVariance(budget: number, actual: number): number {
  return ((actual - budget) / budget) * 100;
}
