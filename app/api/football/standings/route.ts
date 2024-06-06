import axios from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const leagueId = searchParams.get("leagueId");
  const season = searchParams.get("season");

  const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
    params: {
      season,
      league: leagueId,
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_FOOTBALL_KEY as string,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    
    if (response.data.response?.length > 0) {
      return Response.json({ data: response.data.response[0].league });
    } else {
      return Response.json({ data: response.data.response })
    }
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Failed to fetch data" },
      { status: 500 });
  }
}