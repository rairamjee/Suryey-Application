import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
const BASE_STRING = 'http://localhost:3000/api'

// This function can be marked `async` if using `await` inside
export  function middleware(request: NextRequest) {
    // const user = localStorage.getItem('user');
    // console.log(user)
    return null;
    // return new URL('/login', BASE_STRING)
    // if (user && request.nextUrl.pathname === '/login') {
    //     return new URL('/dashboard/sidebar', BASE_STRING)
    // }
    // return null;
}

// See "Matching Paths" below to learn more
// export const config = {
//     matcher: '/about/:path*',
// }