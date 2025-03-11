'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { type Locale, i18n, isValidLocale } from '@/i18n-config';
import { type Dictionary } from '@/types/i18n';
import { getDictionary } from '@/lib/dictionary';

interface TranslationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  dictionary: Dictionary;
  isLoading: boolean;
}

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const STORAGE_KEY = 'preferred_language';

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return i18n.defaultLocale;

  // Check URL path first
  const pathname = window.location.pathname;
  const urlLocale = pathname.split('/')[1] as Locale;
  if (urlLocale && i18n.locales.includes(urlLocale)) {
    return urlLocale;
  }

  // Fall back to stored preference
  const storedLocale = localStorage.getItem(STORAGE_KEY);
  if (storedLocale && i18n.locales.includes(storedLocale as Locale)) {
    return storedLocale as Locale;
  }

  // Fall back to browser language
  const browserLang = navigator.language.split('-')[0] as Locale;
  if (i18n.locales.includes(browserLang)) {
    return browserLang;
  }

  return i18n.defaultLocale;
}

export function TranslationProvider({ 
  children,
  initialDictionary,
  initialLocale 
}: { 
  children: React.ReactNode;
  initialDictionary: Dictionary;
  initialLocale: Locale;
}) {
  const [dictionary, setDictionary] = useState<Dictionary>(initialDictionary);
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlLocale = window.location.pathname.split('/')[1] as Locale;
      if (urlLocale && isValidLocale(urlLocale) && urlLocale !== initialLocale) {
        handleLocaleChange(urlLocale);
      }
    }
  }, [initialLocale]);

  const handleLocaleChange = async (newLocale: Locale) => {
    try {
      setIsLoading(true);
      const newDictionary = await getDictionary(newLocale);
      setDictionary(newDictionary);
      setLocaleState(newLocale);
    } catch (error) {
      console.error('Failed to load dictionary:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getValue = (obj: any, path: string): string => {
    return path.split('.').reduce((current, key) => {
      if (current === undefined) {
        console.warn(`Translation missing at ${key} in path: ${path}`);
        return path;
      }
      return current[key];
    }, obj) || path;
  };

  return (
    <TranslationContext.Provider
      value={{
        locale,
        setLocale: handleLocaleChange,
        t: (key: string) => getValue(dictionary, key),
        dictionary,
        isLoading
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
