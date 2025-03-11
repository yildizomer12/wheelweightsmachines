import { type Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';
import { Hero } from '@/components/hero';
import { ProductionLine } from '@/components/production-line';
import { TechnologyAdvantages } from '@/components/technology-advantages';
import { FAQ } from '@/components/faq';
import { Contact } from '@/components/contact';
import { About } from '@/components/about';

export { generateMetadata } from './page.metadata';

interface Props {
  params: { lang: Locale };
}

export default async function HomePage({ params }: Props) {
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  return (
    <>
      <Hero />
      <ProductionLine />
      <TechnologyAdvantages />
      <FAQ />
      <About />
      <Contact />      
    </>
  );
}