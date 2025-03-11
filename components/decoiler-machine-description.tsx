'use client';

import { useTranslations } from "@/hooks/use-translations";

export default function DecoilerMachineDescription() {
  const { t } = useTranslations();

  return (
    <div>
      <section className="w-full bg-white pt-16 pb-16">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#e6f0f7] text-[#0065A1]">
                {t('machines.decoiler.description.tag')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t('machines.decoiler.description.title')}
              </h2>
            </div>

            <div className="mt-8 text-justify">
              <p className="text-gray-600">
                {t('machines.decoiler.description.intro')}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-xl shadow-lg bg-white w-3/4 mx-auto mt-8">
              <img
                src="/images/production-line-with-decoiler-machine.jpg"
                alt="Production line"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="mt-8 text-justify">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('machines.decoiler.description.features.title')}
              </h3>
              <p className="text-gray-600">
                {t('machines.decoiler.description.features.description')}
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('machines.decoiler.description.series.title')}
              </h3>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                <li>{t('machines.decoiler.description.series.light')}</li>
                <li>{t('machines.decoiler.description.series.medium')}</li>
                <li>{t('machines.decoiler.description.series.heavy')}</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('machines.decoiler.description.standard.title')}
              </h3>
              <p className="text-gray-600">
                {t('machines.decoiler.description.standard.description')}
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('machines.decoiler.description.applications.title')}
              </h3>
              <p className="text-gray-600">
                {t('machines.decoiler.description.applications.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
