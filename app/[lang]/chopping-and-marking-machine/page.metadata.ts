import { type Metadata } from 'next';
import { type Locale, i18n } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  const dictionary = await getDictionary(lang || i18n.defaultLocale);

  return {
    title: dictionary.machines.chopping.meta.title,
    description: dictionary.machines.chopping.meta.description,
    keywords: dictionary.machines.chopping.meta.keywords,
    metadataBase: new URL('https://www.wheelweightsmachines.com'),
    alternates: {
      canonical: `/chopping-and-marking-machine`,
      languages: i18n.locales.reduce((acc: Record<string, string>, locale) => {
        acc[locale] = `/${locale}/chopping-and-marking-machine`;
        return acc;
      }, {}),
    },
    openGraph: {
      title: dictionary.machines.chopping.meta.title,
      description: dictionary.machines.chopping.meta.description,
      images: [
        {
          url: '/images/chopping-marking-machine.png',
          width: 1200,
          height: 630,
          alt: dictionary.machines.chopping.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.machines.chopping.meta.title,
      description: dictionary.machines.chopping.meta.description,
      images: ['/images/chopping-marking-machine.png'],
    },
  };
}
