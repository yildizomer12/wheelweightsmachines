'use client';

import { useTranslations } from "@/hooks/use-translations";
import { BaseSpecification } from "./base-specification";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

export function TapingMachineSpecifications() {
  const { t } = useTranslations();

  return (
    <BaseSpecification
      imageSrc="/images/taping-packaging-machine.png"
      imageAlt="Taping and Packaging Machine"
    >
      <div className="space-y-4 text-justify">
        <p className="text-gray-600">
          {t('machines.taping.specifications.intro')}
        </p>
      </div>
      
      <div className="rounded-lg border bg-white shadow-lg overflow-hidden">
        <Table>
          <TableBody>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">{t('machines.taping.specifications.machine.dimensions')}</TableCell>
              <TableCell>{t('machines.taping.specifications.machine.dimensionsValue')}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">{t('machines.taping.specifications.machine.application')}</TableCell>
              <TableCell>{t('machines.taping.specifications.machine.applicationValue')}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">{t('machines.taping.specifications.machine.capacity')}</TableCell>
              <TableCell>{t('machines.taping.specifications.machine.capacityValue')}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">{t('machines.taping.specifications.machine.weight')}</TableCell>
              <TableCell>{t('machines.taping.specifications.machine.weightValue')}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">{t('machines.taping.specifications.machine.energy')}</TableCell>
              <TableCell>{t('machines.taping.specifications.machine.energyValue')}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">{t('machines.taping.specifications.machine.control')}</TableCell>
              <TableCell>{t('machines.taping.specifications.machine.controlValue')}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">{t('machines.taping.specifications.machine.packaging')}</TableCell>
              <TableCell>{t('machines.taping.specifications.machine.packagingValue')}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </BaseSpecification>
  );
}