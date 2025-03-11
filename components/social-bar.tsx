'use client';

import { Facebook, Instagram, Youtube } from 'lucide-react';

export function SocialBar() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[100]">
      <div className="flex flex-col gap-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg py-3 px-2 hover:bg-white transition-colors duration-300">
        <a
          href="https://www.facebook.com/wheelweightsmachine"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-gray-600 hover:text-[#0065A1] transition-colors"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href="https://x.com/wheelweightsmac"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="text-gray-600 hover:text-[#0065A1] transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="w-4 h-4"
            fill="currentColor"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/wheelweightsmachine/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-600 hover:text-[#0065A1] transition-colors"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a
          href="https://www.youtube.com/@yldzendustriyel7549"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Youtube"
          className="text-gray-600 hover:text-[#0065A1] transition-colors"
        >
          <Youtube className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
