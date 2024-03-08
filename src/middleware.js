import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname;
    const isPublicPath =
        path === "/" || path === "/auth/register" || path === "/auth/login" || path === "/auth/forgot-password" || path === "/about" || path === "/contact";
    const token = request.cookies.get("token")?.value || null;
    const isProfileCompleted = request.cookies.get("isProfileCompleted")?.value || null;
    const userType = request.cookies.get("userType")?.value || null;
    const destURL = userType === "TEACHER" ? "/profile/teacher/update-profile" : "/profile/update-profile";


    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    if (path === "/alumnus" && isProfileCompleted === "false") {
        return NextResponse.redirect(new URL(destURL, request.url))

    }

    if (path === "/posts/alumni/create-post" && isProfileCompleted === "false") {
        return NextResponse.redirect(new URL(destURL, request.url))

    }

    if (path === "/auth/login" && token) {
        return NextResponse.redirect(new URL('/auth/logout', request.url))

    }

    if (path === "/auth/register" && token) {
        return NextResponse.redirect(new URL('/auth/logout', request.url))

    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/events', '/posts/alumni/:path*', '/profile', '/alumnus', '/auth/login', '/auth/register', '/profile/:path*', '/membership/:path*'],
}