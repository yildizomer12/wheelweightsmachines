'use client';

import { useState } from "react";
import { useTranslations } from "@/hooks/use-translations";
import { BaseSpecification } from "./base-specification";
import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  TableHead
} from "@/components/ui/table";

export function DecoilerMachineSpecifications() {
  const [activeTable, setActiveTable] = useState<'standard' | 'wheel'>('standard');
  const { t } = useTranslations();

  return (
    <BaseSpecification
      imageSrc="/images/decoiler-machine.png"
      imageAlt={t('machines.decoiler.specifications.title')}
    >
      <div className="space-y-4 text-justify">
        <p className="text-gray-600">
          {t('machines.decoiler.specifications.description')}
        </p>
      </div>
      
      <div className="rounded-lg border bg-white shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 hover:bg-gray-100 cursor-pointer select-none">
              <TableHead 
                onClick={() => setActiveTable('standard')}
                className={`text-center hover:bg-gray-200 transition-colors w-1/2 ${activeTable === 'standard' ? 'bg-gray-800 text-white hover:bg-gray-800' : ''}`}
              >
                {t('machines.decoiler.specifications.standardProductRange')}
              </TableHead>
              <TableHead 
                onClick={() => setActiveTable('wheel')}
                className={`text-center hover:bg-gray-200 transition-colors w-1/2 ${activeTable === 'wheel' ? 'bg-gray-800 text-white hover:bg-gray-800' : ''}`}
              >
                {t('machines.decoiler.specifications.wheelWeightSeries')}
              </TableHead>
            </TableRow>
          </TableHeader>
          
          {activeTable === 'standard' ? (
            <TableBody>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.decoiler.specifications.standard.models')}</TableCell>
                <TableCell>RL_300-10000</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.decoiler.specifications.standard.capacityRange')}</TableCell>
                <TableCell>300-10 000 kg</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.decoiler.specifications.standard.stripWidth')}</TableCell>
                <TableCell>200-1200 mm</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.decoiler.specifications.standard.maxOuterDiameter')}</TableCell>
                <TableCell>1000-1400 mm</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.decoiler.specifications.standard.innerDiameterRange')}</TableCell>
                <TableCell>300-550 mm</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.decoiler.specifications.standard.driveSystem')}</TableCell>
                <TableCell>{t('machines.decoiler.specifications.standard.mechanicalHydraulic')}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.decoiler.specifications.standard.maxSpeed')}</TableCell>
                <TableCell>40 m/min</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.decoiler.specifications.standard.powerRange')}</TableCell>
                <TableCell>0.25-5 kW</TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.decoiler.specifications.wheel.models')}</TableCell>
                <TableCell>Model LBADC</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.decoiler.specifications.wheel.capacityRange')}</TableCell>
                <TableCell>2000 kg</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.decoiler.specifications.wheel.stripWidth')}</TableCell>
                <TableCell>400 mm</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.decoiler.specifications.wheel.maxOuterDiameter')}</TableCell>
                <TableCell>1300 mm</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.decoiler.specifications.wheel.innerDiameterRange')}</TableCell>
                <TableCell>340-550 mm</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.decoiler.specifications.wheel.driveSystem')}</TableCell>
                <TableCell>Mechanical/Hydraulic</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.decoiler.specifications.wheel.maxSpeed')}</TableCell>
                <TableCell>40 m/min</TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="font-medium">{t('machines.decoiler.specifications.wheel.powerRange')}</TableCell>
                <TableCell>1.5 kW</TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </div>
    </BaseSpecification>
  );
}
