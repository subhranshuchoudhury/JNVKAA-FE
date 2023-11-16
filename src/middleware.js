import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname;
    const isPublicPath =
        path === "/" || path === "/register" || path === "/forgot-password" || path === "/login" || path === "/about" || path === "/contact";
    const token = request.cookies.get("token")?.value || null;


    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/events', '/posts', '/profile', '/alumnus'],
}