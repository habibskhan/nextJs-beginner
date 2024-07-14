import { NextResponse } from "next/server";

// TO add Middleware for all pages of website
const Middleware = (request) => {
    // if (request.nextUrl.pathname != "/login") {
    //     return NextResponse.redirect(new URL("/login", request.url));
    // }
}

export default Middleware;

// TO add Middleware for specific pages of website
// const Middleware = (request) => {
//     return NextResponse.redirect(new URL("/login", request.url));
// }

// export default Middleware;

// export const config = {
//     matcher: [
//         "/about/:path*",
//         // "/segment-routing/:path*",
//     ]
// }