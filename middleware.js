import { NextResponse } from 'next/server';

export function middleware(request) {
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'on';

  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/assets') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/_next') || // next.js static dosyaları
    pathname.startsWith('/robots') ||
    pathname.startsWith('/sitemap')
  ) {
    return NextResponse.next();
  }

  if (
    maintenanceMode &&
    !pathname.startsWith('/maintenance')
  ) {
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
