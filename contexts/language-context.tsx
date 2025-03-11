'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '@/translations';

type Language = 'en' | 'tr';
type TranslationKey = keyof typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'preferred_language';
const AVAILABLE_LANGUAGES: Language[] = ['en', 'tr'];

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';

  const storedLanguage = localStorage.getItem(STORAGE_KEY);
  if (storedLanguage && AVAILABLE_LANGUAGES.includes(storedLanguage as Language)) {
    return storedLanguage as Language;
  }

  const browserLang = navigator.language.split('-')[0];
  if (AVAILABLE_LANGUAGES.includes(browserLang as Language)) {
    return browserLang as Language;
  }

  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const initialLang = getInitialLanguage();
    setLanguageState(initialLang);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, language);
    }
  }, [language, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
