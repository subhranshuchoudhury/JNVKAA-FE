import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname;
    const isPublicPath =
        path === "/" || path === "/auth/register" || path === "/auth/login" || path === "/auth/forgot-password" || path === "/about" || path === "/contact";
    const token = request.cookies.get("token")?.value || null;


    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    if (path === "/auth/login" && token) {
        return NextResponse.redirect(new URL('/auth/logout', request.url))

    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/events', '/posts', '/profile', '/alumnus', '/auth/login'],
}