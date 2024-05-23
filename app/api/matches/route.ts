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
      "X-RapidAPI-Key": "1de355f466msh1bfa3dfa1c06b74p1ced11jsn982e34977c06",
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