import type { Locale } from '@/i18n-config';
import type { Dictionary } from '@/types/i18n';

let dictionaries: { [locale: string]: Dictionary } = {};

async function loadDictionary(locale: Locale): Promise<Dictionary> {
  // Return cached dictionary if available
  if (dictionaries[locale]) {
    return dictionaries[locale];
  }

  // Load dictionary files
  const [
    common,
    company,
    machinesChopping,
    machinesTaping,
    machinesWire,
    machinesDecoiler,
    machinesRotaryPunch,
    componentsHero,
    componentsProductCards,
    componentsQuoteDialog,
    componentsContactDialog,
    pagesHome,
    pagesWheelWeights,
    pagesFaq,
    pagesAbout,
    blogsAdhesiveWheelWeightsProduction,
    blogs
  ] = await Promise.all([
    import(`@/dictionaries/${locale}/common.json`).then((module) => module.default),
    import(`@/dictionaries/${locale}/company.json`).then((module) => module.default),
    import(`@/dictionaries/${locale}/machines/chopping.json`).then((module) => module.default),
    import(`@/dictionaries/${locale}/machines/taping.json`).then((module) => module.default),
    import(`@/dictionaries/${locale}/machines/wire.json`).then((module) => module.default),
    import(`@/dictionaries/${locale}/machines/decoiler.json`).then((module) => module.default),
    import(`@/dictionaries/${locale}/machines/rotaryPunch.json`).then((module) => module.default),
    import(`@/dictionaries/${locale}/components/hero.json`).then((module) => module.default),
    import(`@/dictionaries/${locale}/components/product-cards.json`).then((module) => module.default),
    import(`@/dictionaries/${locale}/components/quote-dialog.json`).then((module) => module.default),
    import(`@/dictionaries/${locale}/components/contact-dialog.json`).then((module) => module.default),
    import(`@/dictionaries/${locale}/pages/home.json`).then((module) => module.default),
    import(`@/dictionaries/${locale}/pages/wheelWeights.json`).then((module) => module.default),
    import(`@/dictionaries/${locale}/pages/faq.json`).then((module) => module.default),
    import(`@/dictionaries/${locale}/pages/about.json`).then((module) => module.default),
    import(`@/dictionaries/${locale}/blogs/adhesive-wheel-weights-production.json`).then((module) => module.default),
    import(`@/dictionaries/${locale}/blogs.json`).then((module) => module.default),
  ]);

  // Merge dictionaries
  const dictionary: Dictionary = {
    ...common,
    company: { ...company }, // Include the entire company namespace
    machines: {
      chopping: machinesChopping,
      taping: machinesTaping,
      wire: machinesWire,
      decoiler: machinesDecoiler,
      rotaryPunch: machinesRotaryPunch
    },
    components: {
      hero: componentsHero,
      productCards: componentsProductCards,
      quoteDialog: componentsQuoteDialog,
      contactDialog: componentsContactDialog
    },
    pages: {
      home: pagesHome,
      wheelWeights: pagesWheelWeights,
      faq: pagesFaq,
      about: pagesAbout
    },
    blogs: {
      'adhesive-wheel-weights-production': blogsAdhesiveWheelWeightsProduction,
      ...blogs
    }
  } as Dictionary;

  // Cache the dictionary for future use
  dictionaries[locale] = dictionary;

  return dictionary;
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  try {
    return await loadDictionary(locale);
  } catch (error) {
    console.error(`Failed to load dictionary for locale: ${locale}`, error);
    // Fallback to English if loading fails
    return locale === 'en' ? {} as Dictionary : await loadDictionary('en');
  }
}

import React from 'react';

// Client-side translation hook
export function createTranslator(dictionary: Dictionary) {
  return function translate(key: keyof Dictionary, options?: { [key: string]: (chunks: React.ReactNode) => React.ReactNode }): React.ReactNode {
    let value = getNestedValue(dictionary, key);
    if (value === key) {
      console.warn(`Translation missing for key: ${key}`);
    }

    if (typeof value === 'string' && options) {
      // Replace <bold> tags with bold formatting
      value = value.replace(/<bold>(.*?)<\/bold>/g, (_, text) => {
        return options?.bold ? String(options.bold(text)) : `<b>${text}</b>`; // Changed to return string
      });
      return value;
    }

    return value;
  };
}

// Helper to get nested object values using dot notation
function getNestedValue(obj: any, path: string): any { // Modified to return any
  return path.split('.').reduce((current, key) => {
    if (current === undefined) {
      console.warn(`Translation missing at ${key} in path: ${path}`);
      return undefined;
    }
    return current[key];
  }, obj);
}
