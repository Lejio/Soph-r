import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const response = await fetch("http:/10.191.94.216:2000/fapi/process_image", {
    method: "POST",
    body: JSON.stringify(body),
  });

  return NextResponse.json({
    status: 200,
    data: {
      mp3: "fjdajfldjlsakjfldjsakljfldsajlfjdsla",
      form: "fdajfdosaofjdoisajfidsajofdisaijo",
    },
  });
}
