import { type Metadata } from 'next';
import { type Locale, i18n } from '../../../i18n-config';
import { getDictionary } from '../../../lib/dictionary';

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang || i18n.defaultLocale);
  const lang = params.lang || i18n.defaultLocale;

  return {
    title: `${dictionary.blogs.meta.title || 'Wheel Weight Manufacturing Insights'} | YILSA`,
    description: dictionary.blogs.meta.description || 'Explore expert insights on wheel weight manufacturing machines and industry innovations.',
    keywords: ["wheel weight machines", "wheel weight production", "adhesive wheel weights", "wheel weight manufacturing", "wheel balancing technology"],
    metadataBase: new URL('https://www.adhesivewheelweight.com'),
    alternates: {
      canonical: `/blogs`,
      languages: i18n.locales.reduce((acc: Record<string, string>, locale) => {
        acc[locale] = `/${locale}/blogs`;
        return acc;
      }, {}),
    },
    openGraph: {
      title: `${dictionary.blogs.meta.title} | YILSA`,
      description: dictionary.blogs.meta.description,
      images: [
        {
          url: '/images/blog-background.jpg',
          width: 1200,
          height: 630,
          alt: dictionary.blogs.meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dictionary.blogs.meta.title} | YILSA`,
      description: dictionary.blogs.meta.description,
      images: ['/images/blog-background.jpg'],
    },
  };
}
