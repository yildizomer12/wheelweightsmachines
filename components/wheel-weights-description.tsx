'use client';

import { useTranslations } from "@/hooks/use-translations";

export default function WheelWeightsDescription() {
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {t('pages.wheelWeights.productDescription.title')}
              </h2>
            </div>
            
            <div className="mt-8 text-justify">
              <p className="text-gray-600">
                {t('pages.wheelWeights.productDescription.intro')}
              </p>
            </div>

            <div className="mt-8 text-justify">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t('pages.wheelWeights.productDescription.qualityAssurance.title')}
              </h3>
              <p className="text-gray-600">
                {t('pages.wheelWeights.productDescription.qualityAssurance.description')}
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('pages.wheelWeights.productDescription.applications.title')}
              </h3>
              <p className="text-gray-600">
                {t('pages.wheelWeights.productDescription.applications.description')}
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('pages.wheelWeights.productDescription.manufacturingExcellence.title')}
              </h3>
              <p className="text-gray-600">
                {t('pages.wheelWeights.productDescription.manufacturingExcellence.description')}
              </p>
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-white w-3/4 mx-auto mt-8">
                <img
                  src="/images/production-line.bmp"
                  alt="Production Line"
                  className="w-full h-auto object-contain"
                />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                {t('pages.wheelWeights.productDescription.orderPackaging.title')}
              </h3>
              <p className="text-gray-600">
                {t('pages.wheelWeights.productDescription.orderPackaging.description')}
              </p>
              <p className="mt-4 text-gray-600">
                {t('pages.wheelWeights.productDescription.learnMore')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
