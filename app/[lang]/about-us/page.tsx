
import { Hero } from '@/components/hero';
import { Contact } from '@/components/contact';
import { AboutSection } from '@/components/about-section';

export { generateMetadata } from './page.metadata';

export default function AboutUsPage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Contact />
    </>
  );
}
