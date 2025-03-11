import { type Metadata } from 'next';
import { type Locale, i18n } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  const awaitedDictionary = await getDictionary(lang || i18n.defaultLocale);
  if (!awaitedDictionary?.pages?.wheelWeights?.meta) {
    throw new Error('Required metadata not found in dictionary');
  }

  const dictionary = awaitedDictionary;

  return {
    title: dictionary.pages.wheelWeights.meta.title,
    description: dictionary.pages.wheelWeights.meta.description,
    keywords: dictionary.pages.wheelWeights.meta.keywords,
    metadataBase: new URL('https://www.wheelweightsmachines.com'),
    alternates: {
      canonical: `/wheel-weights`,
      languages: i18n.locales.reduce((acc: Record<string, string>, locale) => {
        acc[locale] = `/${locale}/wheel-weights`;
        return acc;
      }, {}),
    },
    openGraph: {
      title: dictionary.pages.wheelWeights.meta.title,
      description: dictionary.pages.wheelWeights.meta.description,
      images: [
        {
          url: '/images/wheel-weights.png',
          width: 1200,
          height: 630,
          alt: dictionary.pages.wheelWeights.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.pages.wheelWeights.meta.title,
      description: dictionary.pages.wheelWeights.meta.description,
      images: ['/images/wheel-weights.png'],
    },
  };
}
