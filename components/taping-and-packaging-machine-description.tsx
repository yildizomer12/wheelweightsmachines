'use client';

import { useTranslations } from "@/hooks/use-translations";

export default function TapingAndPackagingMachineDescription() {
  const { t } = useTranslations();
  
  return (
    <div>
      <section className="w-full bg-white pt-16 pb-16">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#e6f0f7] text-[#0065A1]">
                {t('machines.taping.description.tag')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t('machines.taping.description.title')}
              </h2>
            </div>
            
            <div className="mt-8 text-justify">
              <p className="text-gray-600">
                {t('machines.taping.description.intro')}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg bg-white w-3/4 mx-auto mt-8">
              <img
                src="/images/production-line-highlight.bmp"
                alt="Complete wheel weight production line with highlighted Taping and Packaging Machine"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="mt-8 text-justify">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('machines.taping.description.system.title')}
              </h3>
              <p className="text-gray-600">
                {t('machines.taping.description.system.description')}
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('machines.taping.description.features.title')}
              </h3>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>{t('machines.taping.description.features.list.config')}</li>
                <li>{t('machines.taping.description.features.list.control')}</li>
                <li>{t('machines.taping.description.features.list.monitoring')}</li>
                <li>{t('machines.taping.description.features.list.quality')}</li>
                <li>{t('machines.taping.description.features.list.integration')}</li>
                <li>{t('machines.taping.description.features.list.energy')}</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('machines.taping.description.production.title')}
              </h3>
              <p className="text-gray-600">
                {t('machines.taping.description.production.description')}
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('machines.taping.description.integration.title')}
              </h3>
              <p className="text-gray-600">
                {t('machines.taping.description.integration.description')}
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('machines.taping.description.benefits.title')}
              </h3>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>{t('machines.taping.description.benefits.list.productivity')}</li>
                <li>{t('machines.taping.description.benefits.list.quality')}</li>
                <li>{t('machines.taping.description.benefits.list.flexibility')}</li>
                <li>{t('machines.taping.description.benefits.list.packaging')}</li>
                <li>{t('machines.taping.description.benefits.list.operation')}</li>
                <li>{t('machines.taping.description.benefits.list.performance')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
