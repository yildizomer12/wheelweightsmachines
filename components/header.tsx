'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, ChevronDown, X } from 'lucide-react';
import { LanguageSwitcher } from '@/components/language-switcher';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { QuoteDialog } from '@/components/quote-dialog';
import { useTranslations } from '@/hooks/use-translations';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { locale, t } = useTranslations();
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  }, [pathname]);

  // Close menus on window resize
  useEffect(() => {
    const handleResize = () => setIsMenuOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
            <Image
              src="/yilsa-logo.svg"
              alt="YILSA Logo"
              width={40}
              height={40}
              className="h-10 w-auto mr-2"
            />
            <span className="text-2xl font-bold text-[#0065A1]">YILSA</span>
          </div>

          {/* Navigation - Center */}
          <div className="hidden md:flex md:items-center md:space-x-8 flex-1 justify-center">
            <DropdownMenu open={isProductsOpen} onOpenChange={setIsProductsOpen}>
              <DropdownMenuTrigger className="text-gray-700 hover:text-gray-900 transition-colors focus:outline-none inline-flex items-center gap-1">
                {t('menu.products')}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/chopping-and-marking-machine">{t('menu.choppingAndMarkingMachine')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/taping-and-packaging-machine">{t('menu.tapingAndPackagingMachine')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/wire-flattening-machine">{t('menu.wireFlatteningMachine')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/decoiler-machine">{t('menu.decoilerMachine')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/wheel-weights">{t('menu.wheelWeights')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/rotary-punch"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t('menu.technology')}
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t('menu.questions')}
            </Link>
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t('menu.about')}
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t('menu.contact')}
            </Link>

            <Link
              href="/blogs"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t('menu.blog')}
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-gray-900 transition-colors focus:outline-none inline-flex items-center gap-1">
                {t('menu.websites')}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer">
                  {locale === 'tr' ? (
                    <Link href="https://rotarypunch.com.tr/" target="_blank" rel="noopener noreferrer">{t('menu.rotaryPunchTechnology')}</Link>
                  ) : (
                    <Link href="https://rotarypunch.tech/" target="_blank" rel="noopener noreferrer">{t('menu.rotaryPunchTechnology')}</Link>
                  )}
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="https://www.cableladdertrays.com/" target="_blank" rel="noopener noreferrer">{t('menu.cableSupportSystems')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="https://www.yilsa.com.tr/" target="_blank" rel="noopener noreferrer">{t('menu.corporateWebsite')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <QuoteDialog />
          </div>

          {/* Language and Mobile Menu - Right */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            <button
              className="md:hidden relative z-10 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } fixed inset-0 bg-white z-0 transition-transform duration-300 md:hidden`}
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              <Link
                href="/about-us"
                className="text-xl text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('menu.about')}
              </Link>
              <Link
                href="#contact"
                className="text-xl text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('menu.contact')}
              </Link>
              <Link
                href="/blog"
                className="text-xl text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('menu.blog')}
              </Link>
              <Link
                href="#"
                className="text-xl text-gray-600 hover:text-gray-900"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.getElementById('faq')?.scrollIntoView({ behavior: 'auto' });
                }}
              >
                {t('menu.questions')}
              </Link>
              <Link
                href="#contact"
                className="text-xl text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('menu.contact')}
              </Link>
              <LanguageSwitcher />
              <QuoteDialog />
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
