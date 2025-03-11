'use client';

'use client';

import { Badge } from "@/components/ui/badge";
import { useTranslations } from "@/hooks/use-translations";
import { Locale } from "@/i18n-config";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TechnologySectionProps {
  lang: Locale;
}

export function TechnologySection({ lang }: TechnologySectionProps) {
  const { t } = useTranslations();

  return (
    <section className="w-full bg-white pt-16 pb-16">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#e6f0f7] text-[#0065A1] hover:bg-[#e6f0f7]">{t('menu.technology')}</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t('machines.rotaryPunch.description.title')}
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-8 items-center">
            <div className="flex flex-col items-center">
              <div className="text-center font-semibold text-[#0066a1] mb-2">Rotary Punch</div>
              <img src="/images/Rotary_Punch_Animation.gif" alt="Rotary Punch Animation" className="max-w-[80%] h-auto" />
            </div>
            <div className="text-justify text-gray-600">
              {t('machines.rotaryPunch.description.intro').split('(link)').map((part, i) => {
                if (i === 0) {
                  return <span key="first">{part}</span>;
                }
                return (
                  <span key="second">
                    <a
                      href="https://rotarypunch.tech/"
                      className="text-[#0066a1] hover:text-blue-800 transition-colors duration-200 font-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {lang === 'tr' ? 'Rotary Punch Teknolojisi' : 'Rotary Punch Technology'}
                    </a>
                    {part}
                  </span>
              );
              })}
            </div>
            <div className="flex flex-col items-center">
              <div className="text-center font-semibold text-[#0066a1] mb-2">Punch Press</div>
              <img src="/images/Punch_Press_Animation.gif" alt="Punch Press Animation" className="max-w-[80%] h-auto" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 text-justify">
            {t('machines.rotaryPunch.description.edgeTitle')}
          </h3>
          <p className="text-gray-600 text-justify mb-4">
            {t('machines.rotaryPunch.description.edgeDescription')}
          </p>
          <ul className="list-disc list-inside text-gray-600 text-justify">
            <li>{t('machines.rotaryPunch.description.edgePoints.speed')}</li>
            <li>{t('machines.rotaryPunch.description.edgePoints.energy')}</li>
            <li>{t('machines.rotaryPunch.description.edgePoints.waste')}</li>
            <li>{t('machines.rotaryPunch.description.edgePoints.quality')}</li>
            <li>{t('machines.rotaryPunch.description.edgePoints.adaptable')}</li>
            <li>{t('machines.rotaryPunch.description.edgePoints.durable')}</li>
          </ul>


          <div className="rounded-lg border bg-white shadow-lg overflow-hidden max-w-2xl mx-auto mt-8">
            <Table>
              <TableBody>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium w-40 font-medium">{t('machines.rotaryPunch.description.comparisonTable.feature')}</TableCell>
                  <TableCell className="w-40 font-medium">{t('machines.rotaryPunch.description.comparisonTable.rotaryPunch')}</TableCell>
                  <TableCell className="w-40 font-medium">{t('machines.rotaryPunch.description.comparisonTable.traditionalPress')}</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium w-40">{t('machines.rotaryPunch.description.comparisonTable.productionSpeed')}</TableCell>
                  <TableCell className="w-40">{t('machines.rotaryPunch.description.comparisonTable.productionSpeedValueRotary')}</TableCell>
                  <TableCell className="w-40">{t('machines.rotaryPunch.description.comparisonTable.productionSpeedValueTraditional')}</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium w-40">{t('machines.rotaryPunch.description.comparisonTable.energyEfficiency')}</TableCell>
                  <TableCell className="w-40">{t('machines.rotaryPunch.description.comparisonTable.energyEfficiencyValueRotary')}</TableCell>
                  <TableCell className="w-40">{t('machines.rotaryPunch.description.comparisonTable.energyEfficiencyValueTraditional')}</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium w-40">{t('machines.rotaryPunch.description.comparisonTable.motion')}</TableCell>
                  <TableCell className="w-40">{t('machines.rotaryPunch.description.comparisonTable.motionValueRotary')}</TableCell>
                  <TableCell className="w-40">{t('machines.rotaryPunch.description.comparisonTable.motionValueTraditional')}</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium w-40">{t('machines.rotaryPunch.description.comparisonTable.feedingMechanism')}</TableCell>
                  <TableCell className="w-40">{t('machines.rotaryPunch.description.comparisonTable.feedingMechanismValueRotary')}</TableCell>
                  <TableCell className="w-40">{t('machines.rotaryPunch.description.comparisonTable.feedingMechanismValueTraditional')}</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium w-40">{t('machines.rotaryPunch.description.comparisonTable.cutQuality')}</TableCell>
                  <TableCell className="w-40">{t('machines.rotaryPunch.description.comparisonTable.cutQualityValueRotary')}</TableCell>
                  <TableCell className="w-40">{t('machines.rotaryPunch.description.comparisonTable.cutQualityValueTraditional')}</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium w-40">{t('machines.rotaryPunch.description.comparisonTable.materialWaste')}</TableCell>
                  <TableCell className="w-40">{t('machines.rotaryPunch.description.comparisonTable.materialWasteValueRotary')}</TableCell>
                  <TableCell className="w-40">{t('machines.rotaryPunch.description.comparisonTable.materialWasteValueTraditional')}</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium w-40">{t('machines.rotaryPunch.description.comparisonTable.maintenanceCosts')}</TableCell>
                  <TableCell className="w-40">{t('machines.rotaryPunch.description.comparisonTable.maintenanceCostsValueRotary')}</TableCell>
                  <TableCell className="w-40">{t('machines.rotaryPunch.description.comparisonTable.maintenanceCostsValueTraditional')}</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium w-40">{t('machines.rotaryPunch.description.comparisonTable.overallLifespan')}</TableCell>
                  <TableCell className="w-40">{t('machines.rotaryPunch.description.comparisonTable.overallLifespanValueRotary')}</TableCell>
                  <TableCell className="w-40">{t('machines.rotaryPunch.description.comparisonTable.overallLifespanValueTraditional')}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mt-16 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 text-justify">{t('machines.rotaryPunch.applications.title')}</h3>
            <p className="text-gray-600 text-justify">{t('machines.rotaryPunch.applications.subtitle')}</p>
            <ul className="space-y-6 text-justify">
              <li>
                <Link href="/chopping-and-marking-machine" className="font-medium text-[#0066a1] hover:text-blue-700">
                  {t('machines.rotaryPunch.applications.wheelWeights.title')}
                </Link>
                <p className="mt-1 text-gray-600">{t('machines.rotaryPunch.applications.wheelWeights.description')}</p>
              </li>
              <li>
                <a href="https://rotarypunch.tech/urun-rotary-punch--clamping-profile-perforation--1631.html"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="font-medium text-[#0066a1] hover:text-blue-700"
                >
                  {t('machines.rotaryPunch.applications.clampingProfile.title')}
                </a>
                <p className="mt-1 text-gray-600">{t('machines.rotaryPunch.applications.clampingProfile.description')}</p>
              </li>
              <li>
                <a href="https://rotarypunch.tech/urun-cardboard-reel-edge-protector-v-notching-machine-technical-specifications-1630.html"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="font-medium text-[#0066a1] hover:text-blue-700"
                >
                  {t('machines.rotaryPunch.applications.cardboardReel.title')}
                </a>
                <p className="mt-1 text-gray-600">{t('machines.rotaryPunch.applications.cardboardReel.description')}</p>
              </li>
              <li>
                <a href="https://rotarypunch.tech/urun-rotary-punch-cable-tray-production-line-1633.html"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="font-medium text-[#0066a1] hover:text-blue-700"
                >
                  {t('machines.rotaryPunch.applications.cableTray.title')}
                </a>
                <p className="mt-1 text-gray-600">{t('machines.rotaryPunch.applications.cableTray.description')}</p>
              </li>
              <li>
                <div className="font-medium text-[#0066a1]">{t('machines.rotaryPunch.applications.customSolutions.title')}</div>
                <p className="mt-1 text-gray-600">{t('machines.rotaryPunch.applications.customSolutions.description')}</p>
              </li>
            </ul>
            <h4 className="text-xl font-semibold text-gray-900 mt-8 text-justify">{t('machines.rotaryPunch.applications.impact')}</h4>
            <p className="text-gray-600 mt-4 text-justify">{t('machines.rotaryPunch.applications.impactDescription')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
