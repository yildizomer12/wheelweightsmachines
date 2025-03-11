import { type Locale, i18n } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';
import { ClientLayout } from './client-layout';
import './globals.css';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  // Use URL locale or fall back to default
  const locale = params.lang || i18n.defaultLocale;
  
  // Load dictionary for the locale
  const dictionary = await getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/yilsa-logo.svg" />
        {i18n.locales.map((locale) => (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={`/${locale}`}
          />
        ))}
      </head>
      <body>
        <ClientLayout dictionary={dictionary} locale={locale}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
