'use client';

import { useTranslations } from "@/hooks/use-translations";
import { BaseSpecification } from "./base-specification";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableHeader,
} from "@/components/ui/table";

export function WheelWeightsSpecifications() {
  const { t } = useTranslations();

  return (
    <BaseSpecification
      imageSrc="/images/wheel-weights.png"
      imageAlt="Wheel Weights"
    >
      <div className="space-y-4 text-justify">
        <p className="text-gray-600">
          {t('pages.wheelWeights.specifications.description')}
        </p>
      </div>
      
      <div className="rounded-lg border bg-white shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[33%]">{t('pages.wheelWeights.specifications.table.specification')}</TableHead>
              <TableHead className="w-[33%]">{t('pages.wheelWeights.specifications.table.series5_5')}</TableHead>
              <TableHead className="w-[33%]">{t('pages.wheelWeights.specifications.table.series10_5')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium w-[250px]">{t('pages.wheelWeights.specifications.table.dimensions')}</TableCell>
              <TableCell>{t('pages.wheelWeights.specifications.table.dimensionsValue5_5')}</TableCell>
              <TableCell>{t('pages.wheelWeights.specifications.table.dimensionsValue10_5')}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium w-[250px]">{t('pages.wheelWeights.specifications.table.stripConfiguration')}</TableCell>
              <TableCell>{t('pages.wheelWeights.specifications.table.stripConfigurationValue5_5')}</TableCell>
              <TableCell>{t('pages.wheelWeights.specifications.table.stripConfigurationValue10_5')}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium w-[250px]">{t('pages.wheelWeights.specifications.table.stripsPerBox')}</TableCell>
              <TableCell>{t('pages.wheelWeights.specifications.table.stripsPerBoxValue')}</TableCell>
              <TableCell>{t('pages.wheelWeights.specifications.table.stripsPerBoxValue')}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium w-[250px]">{t('pages.wheelWeights.specifications.table.totalWeightPerBox')}</TableCell>
              <TableCell>{t('pages.wheelWeights.specifications.table.totalWeightPerBoxValue')}</TableCell>
              <TableCell>{t('pages.wheelWeights.specifications.table.totalWeightPerBoxValue')}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium w-[250px]">{t('pages.wheelWeights.specifications.table.surfaceTreatment')}</TableCell>
              <TableCell>{t('pages.wheelWeights.specifications.table.surfaceTreatmentValue')}</TableCell>
              <TableCell>{t('pages.wheelWeights.specifications.table.surfaceTreatmentValue')}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium w-[250px]">{t('pages.wheelWeights.specifications.table.edgeType')}</TableCell>
              <TableCell>{t('pages.wheelWeights.specifications.table.edgeTypeValue')}</TableCell>
              <TableCell>{t('pages.wheelWeights.specifications.table.edgeTypeValue')}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium w-[250px]">{t('pages.wheelWeights.specifications.table.adhesiveType')}</TableCell>
              <TableCell>{t('pages.wheelWeights.specifications.table.adhesiveTypeValue')}</TableCell>
              <TableCell>{t('pages.wheelWeights.specifications.table.adhesiveTypeValue')}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </BaseSpecification>
  );
}
