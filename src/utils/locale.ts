/**
 * Utility functions for locale/language management
 */

/**
 * Switches the locale in a given pathname
 * 
 * @param pathname - Current pathname (e.g., "/ja/about")
 * @param newLocale - New locale to switch to (e.g., "ko")
 * @returns New pathname with switched locale (e.g., "/ko/about")
 */
export function switchLocale(pathname: string, newLocale: string): string {
  const segments = pathname.split("/");
  segments[1] = newLocale;
  return segments.join("/");
}

/**
 * Valid locales supported by the application
 */
export const LOCALES = ["ko", "ja"] as const;
export const DEFAULT_LOCALE = "ja";

export type Locale = (typeof LOCALES)[number];
