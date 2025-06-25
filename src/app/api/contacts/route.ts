import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const apiBase = process.env.BOTERY_API_BASE_URL;

    if (!apiBase) {
      return NextResponse.json(
        { error: "BOTERY_API_BASE_URL env var missing" },
        { status: 500 }
      );
    }

    console.log("API Base URL:", apiBase);

    const apiRes = await fetch(`${apiBase}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!apiRes.ok) {
      const errText = await apiRes.text();
      return NextResponse.json({ error: errText }, { status: apiRes.status });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
