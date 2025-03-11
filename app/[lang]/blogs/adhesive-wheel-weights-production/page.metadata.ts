import { type Metadata } from 'next';
import { type Locale, i18n } from '../../../../i18n-config';
import { getDictionary } from '../../../../lib/dictionary';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  const dictionary = await getDictionary(lang || i18n.defaultLocale);

  return {
    title: `${dictionary.blogs['adhesive-wheel-weights-production'].title} | YILSA`,
    description: dictionary.blogs['adhesive-wheel-weights-production'].description,
    keywords: ["wheel weight production machines", "rotary punch technology", "adhesive wheel weights", "high-speed wheel weight production", "wheel weight manufacturing equipment"],
    metadataBase: new URL('https://www.wheelweightsmachines.com'),
    alternates: {
      canonical: `/blogs/adhesive-wheel-weights-production`,
      languages: i18n.locales.reduce((acc: Record<string, string>, locale) => {
        acc[locale] = `/${locale}/blogs/adhesive-wheel-weights-production`;
        return acc;
      }, {}),
    },
    openGraph: {
      title: `${dictionary.blogs['adhesive-wheel-weights-production'].title} | YILSA`,
      description: dictionary.blogs['adhesive-wheel-weights-production'].description,
      images: [
        {
          url: '/images/your-image.jpg',
          width: 1200,
          height: 630,
          alt: dictionary.blogs['adhesive-wheel-weights-production'].title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dictionary.blogs['adhesive-wheel-weights-production'].title} | YILSA`,
      description: dictionary.blogs['adhesive-wheel-weights-production'].description,
      images: ['/images/your-image.jpg'],
    },
  };
}
