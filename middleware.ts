import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from './lib/auth';

export const middleware = async (request: NextRequest) => {
  console.log('[middleware]');
  if (request.nextUrl.pathname.startsWith('/anime')) {
    const user = await getSession();
    console.log({ user });
    if (!user) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('from', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }
  return NextResponse.next();
};

export const config = {
  matcher: '/anime/:path*',
};
