import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const response = NextResponse.next();

  if (token) return response;
  else return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/"],
};
