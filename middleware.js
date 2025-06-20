import { updateSession } from "@/lib/supabase/middleware";
import { NextResponse } from "next/server";

export async function middleware(request) {
  // First, update the user's auth session
  const response = await updateSession(request);

  // Check if the user is trying to access a protected route
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    // "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    "/dashboard/:path*",
    "/document-processing/:path*",
    "/documents/:path*",
    "/history/:path*",
    "/profile/:path*",
  ],
};
