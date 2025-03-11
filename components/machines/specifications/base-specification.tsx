'use client';

import { ReactNode } from "react";
import { useTranslations } from "@/hooks/use-translations";

interface BaseSpecificationProps {
  title?: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
}

export function BaseSpecification({ 
  title, 
  subtitle, 
  imageSrc, 
  imageAlt,
  children 
}: BaseSpecificationProps) {
  const { t } = useTranslations();

  return (
    <section className="w-full bg-white" style={{ paddingTop: '4rem', paddingBottom: '2px' }}>
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#e6f0f7] text-[#0065A1]">
            {title || t('sections.productSpecifications')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            {subtitle || t('sections.keyFeatures')}
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-50 flex items-center justify-center min-h-[500px]">
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4 right-4 z-10 flex items-center justify-between">
              <button className="p-2 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-2 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <img 
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-[500px] object-contain" 
            />
          </div>
          <div className="space-y-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
