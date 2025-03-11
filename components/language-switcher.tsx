'use client';

import Image from 'next/image';
import { useTranslation } from '@/contexts/translation-context';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@/i18n-config';

type Locale = typeof i18n.locales[number];

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: Locale) => {
    // First update the locale in the context
    setLocale(newLocale);
    
    // Then update the URL
    if (pathname) {
      const segments = pathname.split('/');
      // Replace the locale segment (first segment after empty string)
      segments[1] = newLocale;
      // Reconstruct the path with the new locale
      const newPath = segments.join('/');
      // Navigate to the new path
      router.push(newPath);
    }
  };

  const toggleLocale: Locale = locale === 'en' ? 'tr' : 'en';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none cursor-pointer">
        <Image
          src={`/images/flags/${locale === 'en' ? 'uk' : 'tr'}.svg`}
          alt={locale === 'en' ? 'English' : 'Türkçe'}
          width={20}
          height={16}
          className="w-5 h-4 object-cover rounded"
        />
        <span className="capitalize">{locale === 'en' ? 'English' : 'Türkçe'}</span>
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem 
          onClick={() => handleLanguageChange(toggleLocale)} 
          className="cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <Image
              src={`/images/flags/${locale === 'en' ? 'tr' : 'uk'}.svg`}
              alt={locale === 'en' ? 'Türkçe' : 'English'}
              width={20}
              height={16}
              className="w-5 h-4 object-cover rounded"
            />
            <span className="capitalize">{locale === 'en' ? 'Türkçe' : 'English'}</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
