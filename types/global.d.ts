/// <reference types="next" />
/// <reference types="react" />

import type { Locale } from '@/i18n-config';

declare global {
  interface Window {
    __NEXT_DATA__: {
      props: {
        dictionary: any;
        locale: Locale;
      };
    };
  }
}

declare module '*.json' {
  const value: { [key: string]: any };
  export default value;
}

// Extend process.env with our environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production' | 'test';
      readonly NEXT_PUBLIC_API_URL: string;
    }
  }
}

export {};