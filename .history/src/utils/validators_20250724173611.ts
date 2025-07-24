// src/utils/validators.ts

/**
 * Check if a string is a valid phone number (basic check)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-]{7,15}$/;
  return phoneRegex.test(phone);
}
