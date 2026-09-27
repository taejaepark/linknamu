import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  const { linkId } = await request.json();

  if (!linkId || typeof linkId !== "string") {
    return NextResponse.json({ error: "linkId is required" }, { status: 400 });
  }

  const db = await getDb();
  if (!db) {
    // MONGODB_URI가 설정되지 않은 로컬 환경 등에서는 집계를 건너뜁니다.
    return NextResponse.json({ ok: true, recorded: false });
  }

  await db
    .collection("clicks")
    .updateOne({ linkId }, { $inc: { count: 1 } }, { upsert: true });

  return NextResponse.json({ ok: true, recorded: true });
}
