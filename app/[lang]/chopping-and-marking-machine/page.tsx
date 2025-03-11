import { type Locale } from "@/i18n-config";
import { Hero } from '@/components/hero';
import { ChoppingMachineSpecifications } from '@/components/machines/specifications';
import { ChoppingAndMarkingMachineDescription } from '@/components/chopping-and-marking-machine-description';
import { Contact } from '@/components/contact';

export default async function ChoppingMarkingMachine({ params }: { params: { lang: Locale }; }) {
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  return (
    <>
      <Hero />
      <ChoppingMachineSpecifications />
      <ChoppingAndMarkingMachineDescription />
      <Contact />
    </>
  );
}

export { generateMetadata } from './page.metadata'
