'use client';

import { Badge } from '@/components/ui/badge';
import { useTranslations } from '@/hooks/use-translations';

export function AboutSection() {
  const { t } = useTranslations();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center">
          <Badge className="px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#e6f0f7] text-[#0065A1] hover:bg-[#e6f0f7]">
            {t('company.about_us.tag')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            {t('company.about_us.section.title')}
          </h2>
          <p className="text-gray-700">
            {t('company.about_us.section.description')}
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            {t('company.about_us.section.subtitle')}
          </h3>
        </div>
        <p className="text-gray-700 mt-4">
          {t('company.about_us.section.ourVisionDescription')}
        </p>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {t('company.about_us.section.researchAndDevelopmentTitle')}
          </h3>
          <p className="text-gray-700 mt-4">
            {t('company.about_us.section.researchAndDevelopmentDescription')}
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {t('company.about_us.section.productionExpertiseTitle')}
          </h3>
          <p className="text-gray-700 mt-4">
            {t('company.about_us.section.productionExpertiseDescription')}
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {t('company.about_us.section.qualityAssuranceTitle')}
          </h3>
          <p className="text-gray-700 mt-4">
            {t('company.about_us.section.qualityAssuranceDescription')}
          </p>
        </div>
      </div>
    </section>
  );
}
