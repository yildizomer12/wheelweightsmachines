import { type Locale, i18n } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';
import { generateOrganizationSchema } from '@/lib/schema';
import { ClientLayout } from './client-layout';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.wheelweightsmachines.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'tr-TR': '/tr',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: '/yilsa-logo.svg',
    shortcut: '/yilsa-logo.svg',
    apple: '/yilsa-logo.svg',
  },
  verification: {
    google: 'AiSiarEPNKXsp4SKrEwvPx_eSv9P2V1NtrBNgM1Gosw',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/yilsa-logo.svg" />
        {i18n.locales.map((locale) => (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={`/${locale}`}
          />
        ))}
        <link
          rel="alternate"
          href="https://www.wheelweightsmachines.com"
          hrefLang="x-default"
        />
        <meta
          name="google-site-verification"
          content="AiSiarEPNKXsp4SKrEwvPx_eSv9P2V1NtrBNgM1Gosw"
        />
        <div dangerouslySetInnerHTML={{ __html: generateOrganizationSchema(locale) }} />
      </head>
      <body>
        <ClientLayout dictionary={dictionary} locale={locale}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
