import 'react';

declare module 'react' {
  // Extend the JSX namespace
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }

  // Add support for CSS custom properties
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }

  // Add support for custom attributes
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    [key: string]: any;
  }

  // Add support for portals
  interface PortalProps {
    children: ReactNode;
    container: Element | null;
  }
}

// Declare global window type
declare global {
  interface Window {
    __NEXT_DATA__: any;
    __NEXT_LOADED_PAGES__: string[];
  }
}