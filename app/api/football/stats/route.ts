import axios from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const matchId = searchParams.get("matchId");

  const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics',
    params: {
      fixture: matchId,
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_FOOTBALL_KEY as string,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return Response.json({ data: response.data.response });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Failed to fetch data" },
      { status: 500 });
  }
}