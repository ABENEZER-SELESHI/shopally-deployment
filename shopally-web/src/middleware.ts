// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    console.log("middleware called on:", req.nextUrl.pathname);

    // ✅ Redirect direct access to API signin → custom-signin page
    if (req.nextUrl.pathname === "/api/auth/signin") {
      return NextResponse.redirect(new URL("/custom-signin", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico|images|WebsiteLogo).*)",
  ],
};
