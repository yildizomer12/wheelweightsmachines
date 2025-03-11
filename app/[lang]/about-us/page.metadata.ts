import { type Metadata } from 'next';
import { type Locale, i18n } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  const awaitedDictionary = await getDictionary(lang || i18n.defaultLocale);
  if (!awaitedDictionary?.company?.about_us?.meta) {
    throw new Error('Required metadata not found in dictionary');
  }

  const dictionary = awaitedDictionary;

  return {
    title: dictionary.company.about_us.meta.title,
    description: dictionary.company.about_us.meta.description,
    keywords: dictionary.company.about_us.meta.keywords,
    metadataBase: new URL('https://www.wheelweightsmachines.com'),
    alternates: {
      canonical: `/about-us`,
      languages: i18n.locales.reduce((acc: Record<string, string>, locale) => {
        acc[locale] = `/${locale}/about-us`;
        return acc;
      }, {}),
    },
    openGraph: {
      title: dictionary.company.about_us.meta.title,
      description: dictionary.company.about_us.meta.description,
      images: [
        {
          url: '/images/about-background.jpg',
          width: 1200,
          height: 630,
          alt: dictionary.company.about_us.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.company.about_us.meta.title,
      description: dictionary.company.about_us.meta.description,
      images: ['/images/about-background.jpg'],
    },
  };
}
