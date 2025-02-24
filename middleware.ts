import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the path
  const path = request.nextUrl.pathname;

  // Define public paths that don't need authentication
  const isPublicPath = path === "/login" || path === "/signup" || path === "/";

  // Get the token from cookies
  const token = request.cookies.get("token")?.value || "";

  // Redirect logic
  if (!isPublicPath && !token) {
    // Redirect to login if trying to access protected route without token
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isPublicPath && token) {
    // Redirect to dashboard if user is already logged in
    return NextResponse.redirect(new URL("/Dashboard", request.url));
  }

  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/dashboard/:path*",
    "/profile/:path*",
    // Add other protected routes here
  ],
};
