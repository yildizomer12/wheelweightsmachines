import commonEn from '../dictionaries/en/common.json';
import companyEn from '../dictionaries/en/company.json';
import commonTr from '../dictionaries/tr/common.json';
import companyTr from '../dictionaries/tr/company.json';

const translations = {
  en: {
    ...commonEn,
    ...companyEn,
  },
  tr: {
    ...commonTr,
    ...companyTr,
  },
} as const;

export type TranslationKeys = keyof typeof translations.en;
export { translations };
