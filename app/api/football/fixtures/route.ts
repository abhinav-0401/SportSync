import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const listType = searchParams.get("listType");

  let fixtureParams = {};
  if (listType === "live") {
    fixtureParams = {
      live: "all",
    };
  } else if (listType == "upcoming") {
    fixtureParams = {
      next: "50"
    };
  } else {
    fixtureParams = { last: "50" };
  }

  const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    params: fixtureParams,
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_FOOTBALL_KEY as string,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const data = response.data;
    console.log(data);
    return NextResponse.json(response.data);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Failed to fetch data", error: message },
      { status: 500 }
    );
  }
}