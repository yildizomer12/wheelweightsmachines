import { Hero } from '@/components/hero';
import { Contact } from '@/components/contact';
import { FAQSections } from '@/components/faq-sections';

export { generateMetadata } from './page.metadata'

export default function FaqPage() {
  return (
    <>
      <Hero />
      <FAQSections />
      <Contact />
    </>
  );
}
