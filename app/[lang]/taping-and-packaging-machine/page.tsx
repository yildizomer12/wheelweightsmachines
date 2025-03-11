import { type Locale } from "@/i18n-config";
import { Hero } from "@/components/hero";
import { TapingMachineSpecifications } from "@/components/machines/specifications";
import TapingAndPackagingMachineDescription from "@/components/taping-and-packaging-machine-description";
import { Contact } from "@/components/contact";

export default async function TapingAndPackagingMachinePage({ params }: { params: { lang: Locale }; }) {
  const awaitedParams = await params;
  const { lang } = awaitedParams;
  return (
    <>
      <Hero />
      <TapingMachineSpecifications />
      <TapingAndPackagingMachineDescription />
      <Contact />
    </>
  );
}

export { generateMetadata } from './page.metadata'
