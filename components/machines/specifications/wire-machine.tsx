'use client';

import { useTranslations } from "@/hooks/use-translations";
import { BaseSpecification } from "./base-specification";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

export function WireMachineSpecifications() {
  const { t } = useTranslations();

  return (
    <BaseSpecification
      imageSrc="/images/wire-flattening-machine.png"
      imageAlt="Wire Flattening Machine"
    >
      <div className="space-y-4 text-justify">
        <p className="text-gray-600">
          {t('machines.wire.specifications.description')}
        </p>
      </div>
      
      <div className="rounded-lg border bg-white shadow-lg overflow-hidden">
        <Table>
          <TableBody>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Power System</TableCell>
              <TableCell>{t('machines.wire.specifications.table.power')}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Production Speed</TableCell>
              <TableCell>{t('machines.wire.specifications.table.speed')}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Machine Dimensions</TableCell>
              <TableCell>{t('machines.wire.specifications.table.dimensions')}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Machine Weight</TableCell>
              <TableCell>{t('machines.wire.specifications.table.weight')}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Input Material</TableCell>
              <TableCell>{t('machines.wire.specifications.table.input')}</TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium">Output Product</TableCell>
              <TableCell>{t('machines.wire.specifications.table.output')}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </BaseSpecification>
  );
}