'use client';

import { Zap, Battery, Award, Maximize } from 'lucide-react';
import { useTranslations } from '@/hooks/use-translations';
import { type TranslationKeys } from '@/translations';

type Advantage = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export function TechnologyAdvantages() {
  const { t } = useTranslations();
  
  const advantages: Advantage[] = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'pages.home.tech.speed.title',
      description: 'pages.home.tech.speed.description'
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: 'pages.home.tech.energy.title',
      description: 'pages.home.tech.energy.description'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'pages.home.tech.quality.title',
      description: 'pages.home.tech.quality.description'
    },
    {
      icon: <Maximize className="h-8 w-8" />,
      title: 'pages.home.tech.space.title',
      description: 'pages.home.tech.space.description'
    }
  ];

  // Debug log to check translations
  console.log('Tech section translations:', {
    tag: t('pages.home.tech.tag'),
    title: t('pages.home.tech.title'),
    subtitle: t('pages.home.tech.subtitle'),
    speed: {
      title: t('pages.home.tech.speed.title'),
      description: t('pages.home.tech.speed.description'),
    },
    energy: {
      title: t('pages.home.tech.energy.title'),
      description: t('pages.home.tech.energy.description'),
    },
    quality: {
      title: t('pages.home.tech.quality.title'),
      description: t('pages.home.tech.quality.description'),
    },
    space: {
      title: t('pages.home.tech.space.title'),
      description: t('pages.home.tech.space.description'),
    },
  });

  return (
    <section id="technology" className="py-20 bg-[#e6f0f7]">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#cfe2ee] text-[#0065A1]">
            {t('pages.home.tech.tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('pages.home.tech.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('pages.home.tech.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            // Always show the translations, even if they match the keys
            const title = t(advantage.title);
            const description = t(advantage.description);

            return (
              <div
                key={index}
                className="p-8 rounded-xl text-center transition-all duration-300 hover:translate-y-[-4px] shadow-lg hover:shadow-xl bg-white"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e6f0f7] text-[#0065A1] mb-6">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
