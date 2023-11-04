import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get("tag");
  if (!tag) throw new Error("태그가 필요합니다");
  revalidateTag(tag);
  return NextResponse.json({ message: "재검증에 성공했습니다", tag });
}
