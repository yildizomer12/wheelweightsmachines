'use client';

import { type ReactNode } from 'react';
import { type Locale } from '@/i18n-config';
import { type Dictionary } from '@/types/i18n';
import { TranslationProvider } from '@/contexts/translation-context';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/contexts/language-context';
import { LocationProvider } from '@/contexts/location-context';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SocialBar } from '@/components/social-bar';

interface ClientLayoutProps {
  children: ReactNode;
  dictionary: Dictionary;
  locale: Locale;
}

export function ClientLayout({ children, dictionary, locale }: ClientLayoutProps) {
  return (
    <TranslationProvider initialDictionary={dictionary} initialLocale={locale}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <LanguageProvider>
          <LocationProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <SocialBar />
          </LocationProvider>
        </LanguageProvider>
      </ThemeProvider>
    </TranslationProvider>
  );
}
