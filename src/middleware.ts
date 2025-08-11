import { NextResponse } from "next/server";

export default async function middleware() {
  const response = NextResponse.next();

  return response;
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
