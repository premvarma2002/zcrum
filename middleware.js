import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/onboarding(.*)",
  "/organization(.*)",
  "/project(.*)",
  "/issue(.*)",
]);

export default clerkMiddleware((auth, req) => {
  const { userId, orgId } = auth();
  const pathname = req.nextUrl.pathname;

  // 🔒 Not signed in → redirect to sign-in
  if (!userId && isProtectedRoute(req)) {
    const signInUrl = new URL("/sign-in", req.url);
    signInUrl.searchParams.set("redirect_url", req.url);
    return NextResponse.redirect(signInUrl);
  }

  // 🚧 Signed in but no org → force onboarding
  if (
    userId &&
    !orgId &&
    pathname !== "/onboarding" &&
    pathname !== "/"
  ) {
    return NextResponse.redirect(new URL("/onboarding", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals & static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|png|webp|gif|svg|ico|ttf|woff2?|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for APIs
    "/(api|trpc)(.*)",
  ],
};
