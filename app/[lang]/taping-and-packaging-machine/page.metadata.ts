import { type Metadata } from 'next';
import { type Locale, i18n } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  const awaitedDictionary = await getDictionary(lang || i18n.defaultLocale);
  if (!awaitedDictionary?.machines?.taping?.meta) {
    throw new Error('Required metadata not found in dictionary');
  }
  
  const dictionary = awaitedDictionary;

  return {
    title: dictionary.machines.taping.meta.title,
    description: dictionary.machines.taping.meta.description,
    keywords: dictionary.machines.taping.meta.keywords,
    metadataBase: new URL('https://www.adhesivewheelweight.com'),
    alternates: {
      canonical: `/taping-and-packaging-machine`,
      languages: i18n.locales.reduce((acc: Record<string, string>, locale) => {
        acc[locale] = `/${locale}/taping-and-packaging-machine`;
        return acc;
      }, {}),
    },
    openGraph: {
      title: dictionary.machines.taping.meta.title,
      description: dictionary.machines.taping.meta.description,
      images: [
        {
          url: '/images/taping-packaging-machine.png',
          width: 1200,
          height: 630,
          alt: dictionary.machines.taping.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.machines.taping.meta.title,
      description: dictionary.machines.taping.meta.description,
      images: ['/images/taping-packaging-machine.png'],
    },
  };
}
