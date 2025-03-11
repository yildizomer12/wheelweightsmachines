import type { Dictionary, TranslationKey } from '@/types/i18n';
import { TranslationContext } from '@/contexts/translation-context';
import { useContext } from 'react';

export function useTranslations() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslations must be used within a TranslationProvider');
  }

  const { t, locale, setLocale, isLoading } = context;

  // Type-safe translation function
  const translate = (key: TranslationKey): string => {
    return t(key as keyof Dictionary);
  };

  return {
    t: translate,
    locale,
    setLocale,
    isLoading,
  };
}

// Helper type for getting nested keys
export type TranslationSection<T extends keyof Dictionary> = {
  [K in keyof Dictionary[T]]: string;
};
