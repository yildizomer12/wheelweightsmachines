import { type Locale } from "@/i18n-config";
import { Hero } from "@/components/hero";
import { WireMachineSpecifications } from "@/components/machines/specifications";
import { WireFlatteningMachineDescription } from "@/components/wire-flattening-machine-description";
import { Contact } from "@/components/contact";

export { generateMetadata } from './page.metadata';

export default async function WireFlatteningMachinePage({ params }: { params: { lang: Locale }; }) {
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  return (
    <>
      <Hero />
      <WireMachineSpecifications />
      <WireFlatteningMachineDescription />
      <Contact />
    </>
  );
}
