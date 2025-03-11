'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslations } from '@/hooks/use-translations';

const faqSections = [
  {
    category: 'pages.faq.generalQuestionsYilsa.category',
    questions: [
      {
        question: 'pages.faq.generalQuestionsYilsa.q1.question',
        answer: 'pages.faq.generalQuestionsYilsa.q1.answer',
      },
      {
        question: 'pages.faq.generalQuestionsYilsa.q2.question',
        answer: 'pages.faq.generalQuestionsYilsa.q2.answer',
      },
      {
        question: 'pages.faq.generalQuestionsYilsa.q3.question',
        answer: 'pages.faq.generalQuestionsYilsa.q3.answer',
      },
      {
        question: 'pages.faq.generalQuestionsYilsa.q4.question',
        answer: 'pages.faq.generalQuestionsYilsa.q4.answer',
      },
      {
        question: 'pages.faq.generalQuestionsYilsa.q5.question',
        answer: 'pages.faq.generalQuestionsYilsa.q5.answer',
      },
      {
        question: 'pages.faq.generalQuestionsYilsa.q6.question',
        answer: 'pages.faq.generalQuestionsYilsa.q6.answer',
      },
      {
        question: 'pages.faq.generalQuestionsYilsa.q7.question',
        answer: 'pages.faq.generalQuestionsYilsa.q7.answer',
      },
      {
        question: 'pages.faq.generalQuestionsYilsa.q8.question',
        answer: 'pages.faq.generalQuestionsYilsa.q8.answer',
      },
      {
        question: 'pages.faq.generalQuestionsYilsa.q9.question',
        answer: 'pages.faq.generalQuestionsYilsa.q9.answer',
      },
      {
        question: 'pages.faq.generalQuestionsYilsa.q10.question',
        answer: 'pages.faq.generalQuestionsYilsa.q10.answer',
      },
      {
        question: 'pages.faq.generalQuestionsYilsa.q11.question',
        answer: 'pages.faq.generalQuestionsYilsa.q11.answer',
      },
      {
        question: 'pages.faq.generalQuestionsYilsa.q12.question',
        answer: 'pages.faq.generalQuestionsYilsa.q12.answer',
      },
      {
        question: 'pages.faq.generalQuestionsYilsa.q13.question',
        answer: 'pages.faq.generalQuestionsYilsa.q13.answer',
      },
      {
        question: 'pages.faq.generalQuestionsYilsa.q14.question',
        answer: 'pages.faq.generalQuestionsYilsa.q14.answer',
      },
      {
        question: 'pages.faq.generalQuestionsYilsa.q15.question',
        answer: 'pages.faq.generalQuestionsYilsa.q15.answer',
      },
      {
        question: 'pages.faq.generalQuestionsYilsa.q16.question',
        answer: 'pages.faq.generalQuestionsYilsa.q16.answer',
      },
    ],
  },
  {
    category: 'pages.faq.wheelWeightChopping.category',
    questions: [
      {
        question: 'pages.faq.wheelWeightChopping.q1.question',
        answer: 'pages.faq.wheelWeightChopping.q1.answer',
      },
      {
        question: 'pages.faq.wheelWeightChopping.q2.question',
        answer: 'pages.faq.wheelWeightChopping.q2.answer',
      },
      {
        question: 'pages.faq.wheelWeightChopping.q3.question',
        answer: 'pages.faq.wheelWeightChopping.q3.answer',
      },
      {
        question: 'pages.faq.wheelWeightChopping.q4.question',
        answer: 'pages.faq.wheelWeightChopping.q4.answer',
      },
      {
        question: 'pages.faq.wheelWeightChopping.q5.question',
        answer: 'pages.faq.wheelWeightChopping.q5.answer',
      },
      {
        question: 'pages.faq.wheelWeightChopping.q6.question',
        answer: 'pages.faq.wheelWeightChopping.q6.answer',
      },
      {
        question: 'pages.faq.wheelWeightChopping.q7.question',
        answer: 'pages.faq.wheelWeightChopping.q7.answer',
      },
      {
        question: 'pages.faq.wheelWeightChopping.q8.question',
        answer: 'pages.faq.wheelWeightChopping.q8.answer',
      },
      {
        question: 'pages.faq.wheelWeightChopping.q9.question',
        answer: 'pages.faq.wheelWeightChopping.q9.answer',
      },
      {
        question: 'pages.faq.wheelWeightChopping.q10.question',
        answer: 'pages.faq.wheelWeightChopping.q10.answer',
      },
    ],
  },
  {
    category: 'pages.faq.wheelWeightTaping.category',
    questions: [
      {
        question: 'pages.faq.wheelWeightTaping.q1.question',
        answer: 'pages.faq.wheelWeightTaping.q1.answer',
      },
      {
        question: 'pages.faq.wheelWeightTaping.q2.question',
        answer: 'pages.faq.wheelWeightTaping.q2.answer',
      },
      {
        question: 'pages.faq.wheelWeightTaping.q3.question',
        answer: 'pages.faq.wheelWeightTaping.q3.answer',
      },
      {
        question: 'pages.faq.wheelWeightTaping.q4.question',
        answer: 'pages.faq.wheelWeightTaping.q4.answer',
      },
      {
        question: 'pages.faq.wheelWeightTaping.q5.question',
        answer: 'pages.faq.wheelWeightTaping.q5.answer',
      },
      {
        question: 'pages.faq.wheelWeightTaping.q6.question',
        answer: 'pages.faq.wheelWeightTaping.q6.answer',
      },
      {
        question: 'pages.faq.wheelWeightTaping.q7.question',
        answer: 'pages.faq.wheelWeightTaping.q7.answer',
      },
      {
        question: 'pages.faq.wheelWeightTaping.q8.question',
        answer: 'pages.faq.wheelWeightTaping.q8.answer',
      },
    ],
  },
  {
    category: 'pages.faq.decoilerMachine.category',
    questions: [
      {
        question: 'pages.faq.decoilerMachine.q1.question',
        answer: 'pages.faq.decoilerMachine.q1.answer',
      },
      {
        question: 'pages.faq.decoilerMachine.q2.question',
        answer: 'pages.faq.decoilerMachine.q2.answer',
      },
      {
        question: 'pages.faq.decoilerMachine.q3.question',
        answer: 'pages.faq.decoilerMachine.q3.answer',
      },
      {
        question: 'pages.faq.decoilerMachine.q4.question',
        answer: 'pages.faq.decoilerMachine.q4.answer',
      },
      {
        question: 'pages.faq.decoilerMachine.q5.question',
        answer: 'pages.faq.decoilerMachine.q5.answer',
      },
      {
        question: 'pages.faq.decoilerMachine.q6.question',
        answer: 'pages.faq.decoilerMachine.q6.answer',
      },
    ],
  },
  {
    category: 'pages.faq.productionLine.category',
    questions: [
      {
        question: 'pages.faq.productionLine.q1.question',
        answer: 'pages.faq.productionLine.q1.answer',
      },
      {
        question: 'pages.faq.productionLine.q2.question',
        answer: 'pages.faq.productionLine.q2.answer',
      },
      {
        question: 'pages.faq.productionLine.q3.question',
        answer: 'pages.faq.productionLine.q3.answer',
      },
      {
        question: 'pages.faq.productionLine.q4.question',
        answer: 'pages.faq.productionLine.q4.answer',
      },
      {
        question: 'pages.faq.productionLine.q5.question',
        answer: 'pages.faq.productionLine.q5.answer',
      },
      {
        question: 'pages.faq.productionLine.q6.question',
        answer: 'pages.faq.productionLine.q6.answer',
      },
      {
        question: 'pages.faq.productionLine.q7.question',
        answer: 'pages.faq.productionLine.q7.answer',
      },
      {
        question: 'pages.faq.productionLine.q8.question',
        answer: 'pages.faq.productionLine.q8.answer',
      },
      {
        question: 'pages.faq.productionLine.q9.question',
        answer: 'pages.faq.productionLine.q9.answer',
      },
      {
        question: 'pages.faq.productionLine.q10.question',
        answer: 'pages.faq.productionLine.q10.answer',
      },
    ],
  },
  {
    category: 'pages.faq.generalQuestionsWeights.category',
    questions: [
      {
        question: 'pages.faq.generalQuestionsWeights.q1.question',
        answer: 'pages.faq.generalQuestionsWeights.q1.answer',
      },
      {
        question: 'pages.faq.generalQuestionsWeights.q2.question',
        answer: 'pages.faq.generalQuestionsWeights.q2.answer',
      },
      {
        question: 'pages.faq.generalQuestionsWeights.q3.question',
        answer: 'pages.faq.generalQuestionsWeights.q3.answer',
      },
      {
        question: 'pages.faq.generalQuestionsWeights.q4.question',
        answer: 'pages.faq.generalQuestionsWeights.q4.answer',
      },
      {
        question: 'pages.faq.generalQuestionsWeights.q5.question',
        answer: 'pages.faq.generalQuestionsWeights.q5.answer',
      },
      {
        question: 'pages.faq.generalQuestionsWeights.q6.question',
        answer: 'pages.faq.generalQuestionsWeights.q6.answer',
      },
      {
        question: 'pages.faq.generalQuestionsWeights.q7.question',
        answer: 'pages.faq.generalQuestionsWeights.q7.answer',
      },
      {
        question: 'pages.faq.generalQuestionsWeights.q8.question',
        answer: 'pages.faq.generalQuestionsWeights.q8.answer',
      },
      {
        question: 'pages.faq.generalQuestionsWeights.q9.question',
        answer: 'pages.faq.generalQuestionsWeights.q9.answer',
      },
      {
        question: 'pages.faq.generalQuestionsWeights.q10.question',
        answer: 'pages.faq.generalQuestionsWeights.q10.answer',
      },
      {
        question: 'pages.faq.generalQuestionsWeights.q11.question',
        answer: 'pages.faq.generalQuestionsWeights.q11.answer',
      },
      {
        question: 'pages.faq.generalQuestionsWeights.q12.question',
        answer: 'pages.faq.generalQuestionsWeights.q12.answer',
      },
      {
        question: 'pages.faq.generalQuestionsWeights.q13.question',
        answer: 'pages.faq.generalQuestionsWeights.q13.answer',
      },
    ],
  },
];

export function FAQSections() {
  const { t } = useTranslations();

  return (
    <section id="faq-sections" className="py-20 bg-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqSections.map((section, sectionIndex) => (
              <AccordionItem key={sectionIndex} value={`section-${sectionIndex}`} className="glass-card border-none shadow-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                  <h3 className="font-semibold text-lg">{t(section.category as any)}</h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <Accordion type="single" collapsible className="space-y-4">
                    {section.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${sectionIndex}-${index}`}
                        className="border-none"
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
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
