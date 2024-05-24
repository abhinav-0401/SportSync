import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  console.log("Request received");
  const { searchParams } = new URL(req.url);
  const imageId = searchParams.get("imageId");
  console.log("Image ID:", imageId);

  if (!imageId) {
    return NextResponse.json(
      { error: "Missing imageId query parameter" },
      { status: 400 }
    );
  }

  const options = {
    method: "GET",
    url: `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${imageId}/i.jpg`,
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY as string,
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log("Response received:", response.config.url);
    console.log(response.data);
    return NextResponse.json({ url: response.config.url, data: response.data });
  } catch (error) {
    console.error("Error fetching image URL:", error);
    return NextResponse.json(
      { error: "Failed to fetch image URL" },
      { status: 500 }
    );
  }
}
