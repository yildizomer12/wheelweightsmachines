import { type Metadata } from 'next';
import { type Locale, i18n } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  const awaitedDictionary = await getDictionary(lang || i18n.defaultLocale);
  if (!awaitedDictionary?.machines?.rotaryPunch?.meta) {
    throw new Error('Required metadata not found in dictionary');
  }

  const dictionary = awaitedDictionary;

  return {
    title: dictionary.machines.rotaryPunch.meta.title,
    description: dictionary.machines.rotaryPunch.meta.description,
    keywords: dictionary.machines.rotaryPunch.meta.keywords,
    metadataBase: new URL('https://www.wheelweightsmachines.com'),
    alternates: {
      canonical: `/rotary-punch`,
      languages: i18n.locales.reduce((acc: Record<string, string>, locale) => {
        acc[locale] = `/${locale}/rotary-punch`;
        return acc;
      }, {}),
    },
    openGraph: {
      title: dictionary.machines.rotaryPunch.meta.title,
      description: dictionary.machines.rotaryPunch.meta.description,
      images: [
        {
          url: '/images/Rotary_Punch_Animation.gif',
          width: 1200,
          height: 630,
          alt: dictionary.machines.rotaryPunch.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.machines.rotaryPunch.meta.title,
      description: dictionary.machines.rotaryPunch.meta.description,
      images: ['/images/Rotary_Punch_Animation.gif'],
    },
  };
}
