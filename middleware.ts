import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n, isValidLocale, getPreferredLocale } from './i18n-config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip if requesting non-page resources
  if (
    pathname.includes('.') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/')
  ) {
    return;
  }

  // Check if the pathname starts with a locale
  const pathnameLocale = pathname.split('/')[1];

  // Get preferred locale from cookie, accept-language header, or default
  let preferredLocale = request.cookies.get('NEXT_LOCALE')?.value;
  
  if (!preferredLocale || !isValidLocale(preferredLocale)) {
    preferredLocale = getPreferredLocale(request.headers.get('accept-language'));
  }

  // If URL has no locale or invalid locale, handle root path specially
  if (!pathnameLocale || !isValidLocale(pathnameLocale)) {
    // Allow root path to be indexed
    if (pathname === '/') {
      return NextResponse.rewrite(
        new URL(`/${preferredLocale}`, request.url)
      );
    }
    // Redirect other paths to add locale
    return NextResponse.redirect(
      new URL(
        `/${preferredLocale}${pathname}`,
        request.url
      )
    );
  }

  // Add language information to request headers
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-current-locale', pathnameLocale);

  // Create response with updated headers
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Update cookie with current locale
  response.cookies.set('NEXT_LOCALE', pathnameLocale, {
    path: '/',
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  // Match all routes except static files and api routes
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
