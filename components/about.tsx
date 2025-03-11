'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslations } from '@/hooks/use-translations';
import { Eye, Lightbulb, Trophy, Medal } from 'lucide-react';

const aboutSections = [
  {
    question: 'company.about_us.vision.question' as const,
    answer: 'company.about_us.vision.answer' as const,
    icon: Eye
  },
  {
    question: 'company.about_us.innovation.question' as const,
    answer: 'company.about_us.innovation.answer' as const,
    icon: Lightbulb
  },
  {
    question: 'company.about_us.expertise.question' as const,
    answer: 'company.about_us.expertise.answer' as const,
    icon: Trophy
  },
  {
    question: 'company.about_us.quality.question' as const,
    answer: 'company.about_us.quality.answer' as const,
    icon: Medal
  }
] as const;

export function About() {
  const { t } = useTranslations();
  const [value, setValue] = React.useState('item-0');
  const [lastHovered, setLastHovered] = React.useState('item-0');
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleHover = (itemValue: string) => {
    setLastHovered(itemValue);
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Set a new timeout for 100ms before opening the accordion
    timeoutRef.current = setTimeout(() => {
      setValue(itemValue);
    }, 50);
  };

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
<section id="about" className="py-20 bg-[#e6f0f7]">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#cfe2ee] text-[#0065A1]">
            {t('company.about_us.tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('company.about_us.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('company.about_us.subtitle')}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion 
            type="single" 
            value={value} 
            onValueChange={setValue} 
            className="space-y-4"
          >
            {aboutSections.map((section, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
className="bg-white border-none shadow-lg"
                onMouseEnter={() => handleHover(`item-${index}`)}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3">
                    {section.icon && <section.icon className="h-5 w-5 text-[#0065A1]" />}
                    <span className="text-left font-semibold">{t(section.question)}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                  {t(section.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
