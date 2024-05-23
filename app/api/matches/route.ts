import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const listType = searchParams.get("listType");

  console.log("type", type);

  const options = {
    method: "GET",
    url: `https://cricbuzz-cricket.p.rapidapi.com/matches/v1/${listType}`,
    headers: {
      "X-RapidAPI-Key": "02fbfcbb53mshe164c7d46e999d6p142177jsn4ed1f614fe73",
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const data = response.data;
    // console.log(data);
    const typeMatches = data.typeMatches.filter((item: any) => {
      if (type) {
        return item.matchType.toLowerCase() === type.toLowerCase()
      } else {
        return true;
      }
    });
    console.log("typeMatches: ", typeMatches);
    let matchesArr: any[] = [];
    typeMatches.forEach((item: any) => {
      item.seriesMatches.forEach((seriesMatch: any) => {
        if (seriesMatch?.seriesAdWrapper) {
          matchesArr.push(...seriesMatch?.seriesAdWrapper?.matches);  
        }
      });
    });
    // console.log(matchesArr);
    return NextResponse.json(matchesArr);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Failed to fetch data", error: message },
      { status: 500 }
    );
  }
}