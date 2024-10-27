import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const withXFramePathname = async (request: NextRequest) => {
  const headers = new Headers({ "x-frame-pathname": request.nextUrl.pathname });

  const next = NextResponse.next({
    headers,
  });

  return next;
};
