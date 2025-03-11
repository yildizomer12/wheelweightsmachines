import { Hero } from '@/components/hero';
import { Contact } from '@/components/contact';
import { WheelWeightsSpecifications } from '@/components/machines/specifications/wheel-weights-specifications';
import WheelWeightsDescription from '@/components/wheel-weights-description';

export { generateMetadata } from './page.metadata'

export default function WheelWeightsPage() {
  return (
    <>
      <Hero />
      <WheelWeightsSpecifications />
      <WheelWeightsDescription />
      <Contact />
    </>
  );
}
