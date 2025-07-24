// src/utils/formatters.ts

/**
 * Format date string to readable format e.g. "Aug 25, 2025"
 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Format number to currency string e.g. "$12.00"
 */
export function formatCurrency(amount: number, currency = 'USD'): string {
  return amount.toLocaleString(undefined, {
    style: 'currency',
    currency,
  });
}
