import { Hero } from '@/components/hero';
import { Contact } from '@/components/contact';
import { TechnologySection } from '@/components/technology-section';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';

export { generateMetadata } from './page.metadata'

export default async function RotaryPunchPage({ params }: {
  params: { lang: Locale }
}) {
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  await getDictionary(lang);
  return (
    <>
      <Hero />
      <TechnologySection lang={lang} />
      <Contact />
    </>
  );
}
