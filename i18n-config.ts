export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'tr'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export function isValidLocale(locale: string): locale is Locale {
  return i18n.locales.includes(locale as Locale);
}

export function getPreferredLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return i18n.defaultLocale;
  
  const preferredLocales = acceptLanguage
    .split(',')
    .map(item => item.split(';')[0].trim().toLowerCase())
    .map(locale => locale.split('-')[0]);

  const matchedLocale = preferredLocales.find(locale => 
    i18n.locales.includes(locale as Locale)
  );

  return (matchedLocale as Locale) || i18n.defaultLocale;
}