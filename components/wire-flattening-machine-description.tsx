'use client';

import { useTranslations } from "@/hooks/use-translations";

export function WireFlatteningMachineDescription() {
  const { t } = useTranslations();
  
  return (
    <div>
      <section className="w-full bg-white pt-16 pb-16">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#e6f0f7] text-[#0065A1]">
                {t('sections.productDescription')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold">
                {t('machines.wire.description.title')}
              </h2>
            </div>
            
            <div className="mt-8 text-justify">
              <p className="text-gray-600">
                {t('machines.wire.description.intro')}
              </p>
            </div>

            <div className="mt-8 text-justify">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('machines.wire.description.economic.title')}
              </h3>
              <p className="text-gray-600">
                {t('machines.wire.description.economic.description')}
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('machines.wire.description.technical.title')}
              </h3>
              <p className="text-gray-600">
                {t('machines.wire.description.technical.description')}
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('machines.wire.description.benefits.title')}
              </h3>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>{t('machines.wire.description.benefits.list.processing')}</li>
                <li>{t('machines.wire.description.benefits.list.quality')}</li>
                <li>{t('machines.wire.description.benefits.list.operation')}</li>
                <li>{t('machines.wire.description.benefits.list.cost')}</li>
                <li>{t('machines.wire.description.benefits.list.integration')}</li>
                <li>{t('machines.wire.description.benefits.list.usability')}</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('machines.wire.description.integration.title')}
              </h3>
              <p className="text-gray-600">
                {t('machines.wire.description.integration.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
