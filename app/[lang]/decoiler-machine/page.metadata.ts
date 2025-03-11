import { type Metadata } from 'next';
import { type Locale, i18n } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  const awaitedDictionary = await getDictionary(lang || i18n.defaultLocale);
  if (!awaitedDictionary?.machines?.decoiler?.meta) {
    throw new Error('Required metadata not found in dictionary');
  }
  
  const dictionary = awaitedDictionary;

  return {
    title: dictionary.machines.decoiler.meta.title,
    description: dictionary.machines.decoiler.meta.description,
    keywords: dictionary.machines.decoiler.meta.keywords,
    metadataBase: new URL('https://www.wheelweightsmachines.com'),
    alternates: {
      canonical: `/decoiler-machine`,
      languages: i18n.locales.reduce((acc: Record<string, string>, locale) => {
        acc[locale] = `/${locale}/decoiler-machine`;
        return acc;
      }, {}),
    },
    openGraph: {
      title: dictionary.machines.decoiler.meta.title,
      description: dictionary.machines.decoiler.meta.description,
      images: [
        {
          url: '/images/decoiler-machine.png',
          width: 1200,
          height: 630,
          alt: dictionary.machines.decoiler.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.machines.decoiler.meta.title,
      description: dictionary.machines.decoiler.meta.description,
      images: ['/images/decoiler-machine.png'],
    },
  };
}
