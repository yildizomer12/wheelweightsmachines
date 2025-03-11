'use client';

import { usePathname } from 'next/navigation';
import { ChoppingMachineSpecifications } from './machines/specifications/chopping-machine';
import { TapingMachineSpecifications } from './machines/specifications/taping-machine';
import { WireMachineSpecifications } from './machines/specifications/wire-machine';
import { DecoilerMachineSpecifications } from './machines/specifications/decoiler-machine';

export function MachineSpecifications() {
  const pathname = usePathname();

  const isChoppingPage = pathname?.endsWith('/chopping-and-marking-machine') ?? false;
  const isTapingPage = pathname?.endsWith('/taping-and-packaging-machine') ?? false;
  const isWirePage = pathname?.endsWith('/wire-flattening-machine') ?? false;
  const isDecoilerPage = pathname?.endsWith('/decoiler-machine') ?? false;

  if (isChoppingPage) {
    return <ChoppingMachineSpecifications />;
  }

  if (isTapingPage) {
    return <TapingMachineSpecifications />;
  }

  if (isWirePage) {
    return <WireMachineSpecifications />;
  }

  if (isDecoilerPage) {
    return <DecoilerMachineSpecifications />;
  }

  return null;
}
