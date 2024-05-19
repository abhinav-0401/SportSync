// app/api/getImageUrl/route.ts

import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const imageId = searchParams.get("imageId");
  console.log(req.url);
    console.log(imageId);

  const options = {
    method: "GET",
    url: `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${imageId}/i.jpg`,
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return NextResponse.json({ url: response.config.url });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch image URL" },
      { status: 500 }
    );
  }
}
