import { type Metadata } from 'next';
import { type Locale, i18n } from '@/i18n-config';

type MetadataParams = {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  image?: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  };
};

export function generateSEOMetadata({
  title,
  description,
  keywords,
  path,
  image = {
    url: '/images/production-line.jpg',
    alt: 'YILSA Wheel Weight Manufacturing Equipment',
    width: 1200,
    height: 630,
  },
}: MetadataParams, locale: Locale): Metadata {
  const url = 'https://www.adhesivewheelweight.com';

  // Generate language alternates
  const languageAlternates = i18n.locales.reduce((acc: Record<string, string>, lang) => {
    acc[lang] = `${url}/${lang}${path}`;
    return acc;
  }, {});

  // Generate canonical URL - always use default locale for canonical
  const canonical = `${url}${path}`;

  return {
    title: `${title} | YILSA Wheel Weight Machines`,
    description,
    keywords,
    metadataBase: new URL(url),
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: `${url}/${locale}${path}`,
      title,
      description,
      siteName: 'YILSA Wheel Weight Machines',
      images: [
        {
          url: image.url,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
      creator: '@YilsaMachines',
      site: '@YilsaMachines',
    },
    verification: {
      google: 'YOUR-GOOGLE-VERIFICATION-ID', // You'll need to replace this with actual verification ID
    },
    other: {
      'google-site-verification': 'YOUR-GOOGLE-VERIFICATION-ID', // You'll need to replace this with actual verification ID
    },
  };
}
