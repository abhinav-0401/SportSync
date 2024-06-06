import axios from "axios";

export async function GET(req: Request) {
  const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
    params: {
      season: '2024',
      type: 'league',
      current: 'true'
    },
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_FOOTBALL_KEY as string,
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return Response.json(response.data.response);
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Failed to fetch data" },
      { status: 500 });
  }
}