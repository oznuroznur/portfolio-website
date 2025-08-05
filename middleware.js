import { NextResponse } from 'next/server';

export function middleware(request) {
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'on';

  if (
    maintenanceMode &&
    !request.nextUrl.pathname.startsWith('/maintenance')
  ) {
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
