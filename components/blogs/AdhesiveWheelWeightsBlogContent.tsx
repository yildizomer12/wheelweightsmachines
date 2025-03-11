"use client";
import React from 'react';
import { useTranslation } from '@/contexts/translation-context';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface AdhesiveWheelWeightsBlogContentProps {}

const AdhesiveWheelWeightsBlogContent: React.FC<AdhesiveWheelWeightsBlogContentProps> = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const renderHTML = (html: string) => {
    const processedHtml = html
      .replace(/<bold>(.*?)<\/bold>/g, '<strong>$1</strong>')
      .replace(
        /<a href=['"](.+?)['"]>(.*?)<\/a>/g,
        (match, href, text) => 
        `<span class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline cursor-pointer transition-colors" data-href="${href}">${text}</span>`
      );

    return (
      <div
        dangerouslySetInnerHTML={{ __html: processedHtml }}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          const href = target.getAttribute('data-href');
          if (href) {
            e.preventDefault();
            router.push(href);
          }
        }}
        className="leading-relaxed space-y-4 text-justify"
      />
    );
  };

  return (
    <article className="pt-16 pb-8 md:pt-28 md:pb-12">
      <div className="container">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t('blogs.adhesive-wheel-weights-production.title')}
          </h1>
        </header>
        <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4">
          {renderHTML(t('blogs.adhesive-wheel-weights-production.description'))}
        </div>
      </div>

      {/* Advanced Production Technology section */}
      <div className="container mt-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          {t('blogs.adhesive-wheel-weights-production.advancedProductionTechnology.title')}
        </h2>
        <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4 mb-4">
          {renderHTML(t('blogs.adhesive-wheel-weights-production.advancedProductionTechnology.description'))}
        </div>
        <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4">
          <p>
            {t('blogs.adhesive-wheel-weights-production.rotaryPunchAdvantages')}:
          </p>
          {(() => {
            const advantagesList = t('blogs.adhesive-wheel-weights-production.rotaryPunchAdvantagesList');
            if (Array.isArray(advantagesList)) {
              return (
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
                  {advantagesList.map((item: any, index: number) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: renderHTML(item).props.dangerouslySetInnerHTML.__html }} />
                  ))}
                </ul>
              );
            } else if (typeof advantagesList === 'string') {
              return <p className="text-justify">{advantagesList}</p>;
            }
            return null; // Or return <></> or a default fallback UI
          })()}
        </div>
      </div>
      {/* Comprehensive Production Line section */}
      <section className="pt-8">
        <div className="container">
          <header className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {t('blogs.adhesive-wheel-weights-production.comprehensiveProductionLine.title')}
            </h2>
          </header>
          <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4">
            {renderHTML(t('blogs.adhesive-wheel-weights-production.comprehensiveProductionLine.description'))}
          </div>
        </div>
        <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4">
          {(() => {
            const advantagesList = t('blogs.adhesive-wheel-weights-production.wireFlatteningMachineList');
            if (Array.isArray(advantagesList)) {
              return (
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
                  {advantagesList.map((item: any, index: number) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: renderHTML(item).props.dangerouslySetInnerHTML.__html }} />
                  ))}
                </ul>
              );
            } else if (typeof advantagesList === 'string') {
              return <p className="text-justify">{advantagesList}</p>;
            }
            return null; // Or return <></> or a default fallback UI
          })()}
        </div>
      </section>

      {/* Machine Advantages section */}
      <section className="pb-8">
        <div className="container">
          <header className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {t('blogs.adhesive-wheel-weights-production.machineAdvantages.title')}
            </h2>
          </header>
          <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4">
            {(() => {
              const advantagesList = t('blogs.adhesive-wheel-weights-production.machineAdvantages.list');
              if (Array.isArray(advantagesList)) {
                return (
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
                    {advantagesList.map((item: any, index: number) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: renderHTML(item).props.dangerouslySetInnerHTML.__html }} />
                    ))}
                  </ul>
                );
              } else if (typeof advantagesList === 'string') {
                return <p className="text-justify">{advantagesList}</p>;
              }
              return null;
            })()}
          </div>
        </div>
      </section>

      {/* Materials and Quality section */}
      <section className="pt-0 pb-8">
        <div className="container">
          <header className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {t('blogs.adhesive-wheel-weights-production.materialsAndQuality.title')}
            </h2>
          </header>
          <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4">
            <div className="leading-relaxed space-y-4 text-justify">
              {renderHTML(t('blogs.adhesive-wheel-weights-production.materialsAndQuality.introduction'))}
            </div>
          </div>
          <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4">
            {(() => {
              const featuresList = t('blogs.adhesive-wheel-weights-production.materialsAndQuality.features');
              if (Array.isArray(featuresList)) {
                return (
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-justify">
                    {featuresList.map((item: any, index: number) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: renderHTML(item).props.dangerouslySetInnerHTML.__html }} />
                    ))}
                  </ul>
                );
              } else if (typeof featuresList === 'string') {
                return <p className="text-justify">{featuresList}</p>;
              }
              return null;
            })()}
          </div>
          <div className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto px-4 mt-6">
            <p className="leading-relaxed text-justify font-bold">
              {t('blogs.adhesive-wheel-weights-production.materialsAndQuality.conclusion')}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default AdhesiveWheelWeightsBlogContent;
