import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from './lib/session';

export const middleware = async (request: NextRequest) => {
  if (request.nextUrl.pathname.startsWith('/anime')) {
    const user = await getSession();
    if (!user) {
      const loginUrl = new URL('/', request.url);
      loginUrl.searchParams.set(
        'from',
        request.nextUrl.pathname + request.nextUrl.search
      );
      return NextResponse.redirect(loginUrl);
    }
  }
  return NextResponse.next();
};

export const config = {
  matcher: '/anime/:path*',
};
