import axios from "axios";

export async function GET(req: Request, { params }: { params: { id: string } }) {

  const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
    params: { id: params.id },
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_FOOTBALL_KEY as string,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    }
  };

  try {
    const response = await axios.request(options);
    return Response.json({ data: response.data });
  } catch (error) {
    // console.error(error);
    return Response.json({ message: "Failed to fetch data" },
      { status: 500 })
  }
}