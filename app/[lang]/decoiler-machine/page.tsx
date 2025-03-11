import DecoilerMachineDescription from '@/components/decoiler-machine-description';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { MachineSpecifications } from '@/components/machine-specifications';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export { generateMetadata } from './page.metadata'

export default function DecoilerMachinePage() {
  return (
    <>
      <Hero />
      <MachineSpecifications />
      <DecoilerMachineDescription />
      <Contact />
    </>
  );
}
