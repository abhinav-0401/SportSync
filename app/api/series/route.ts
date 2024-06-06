import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");

  const options = {
    method: "GET",
    url: "https://cricbuzz-cricket.p.rapidapi.com/schedule/v1/all",
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY as string,
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const data = response.data;

    if (type) {
      const filteredData = data.matchScheduleMap.filter((item: any) =>
        item.scheduleAdWrapper?.matchScheduleList.some(
          (schedule: any) =>
            schedule.seriesCategory.toLowerCase() === type.toLowerCase()
        )
      );

      return NextResponse.json(filteredData);
    } else {
      return NextResponse.json(data);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Failed to fetch data", error: message },
      { status: 500 }
    );
  }
}
