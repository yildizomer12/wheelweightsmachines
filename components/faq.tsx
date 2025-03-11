'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslations } from '@/hooks/use-translations';
import { useLanguage } from '@/contexts/language-context';

const faqs = [
  {
    question: 'company.faq.warranty.question',
    answer: 'company.faq.warranty.answer'
  },
  {
    question: 'company.faq.support.question',
    answer: 'company.faq.support.answer'
  },
  {
    question: 'company.faq.installation.question',
    answer: 'company.faq.installation.answer'
  },
  {
    question: 'company.faq.parts.question',
    answer: 'company.faq.parts.answer'
  },
  {
    question: 'company.faq.training.question',
    answer: 'company.faq.training.answer'
  }
];

export function FAQ() {
  const { t } = useTranslations();
  const { language } = useLanguage();

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#e6f0f7] text-[#0065A1]">
            {t('company.faq.tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('company.faq.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('company.faq.subtitle')}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-none shadow-lg"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-semibold">{t(faq.question as any)}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                  {t(faq.answer as any)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-4">
            <a
              href={`/faq`}
              className="flex items-center justify-between px-6 py-4 font-semibold rounded-md shadow-lg glass-card hover:no-underline"
            >
              <b><span>{t('pages.faq.view_all_faqs_button' as any)}</span></b>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 ml-2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
