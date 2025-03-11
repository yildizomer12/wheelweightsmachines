import { Contact } from '@/components/contact';
import AdhesiveWheelWeightsBlogContent from '@/components/blogs/AdhesiveWheelWeightsBlogContent';

export default function AdhesiveWheelWeightsProductionBlogPage() {
  return (
    <>
      <AdhesiveWheelWeightsBlogContent />
      <Contact />
    </>
  );
}

export { generateMetadata } from './page.metadata';
