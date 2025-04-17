import { type Metadata } from 'next';
import { type Locale, i18n } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  const awaitedDictionary = await getDictionary(lang || i18n.defaultLocale);
  if (!awaitedDictionary?.pages?.faq?.meta) {
    throw new Error('Required metadata not found in dictionary');
  }

  const dictionary = awaitedDictionary;

  return {
    title: dictionary.pages.faq.meta.title,
    description: dictionary.pages.faq.meta.description,
    keywords: dictionary.pages.faq.meta.keywords,
    metadataBase: new URL('https://www.adhesivewheelweight.com'),
    alternates: {
      canonical: `/faq`,
      languages: i18n.locales.reduce((acc: Record<string, string>, locale) => {
        acc[locale] = `/${locale}/faq`;
        return acc;
      }, {}),
    },
    openGraph: {
      title: dictionary.pages.faq.meta.title,
      description: dictionary.pages.faq.meta.description,
      images: [
        {
          url: '/images/faq_background.jpg',
          width: 1200,
          height: 630,
          alt: dictionary.pages.faq.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.pages.faq.meta.title,
      description: dictionary.pages.faq.meta.description,
      images: ['/images/faq_background.jpg'],
    },
  };
}
