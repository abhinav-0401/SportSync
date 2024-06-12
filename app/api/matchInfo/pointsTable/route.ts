import axios from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const seriesId = searchParams.get("seriesId");

  const options = {
    method: 'GET',
    url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/series/${seriesId}/points-table`,
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY as string,
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return Response.json(response.data);
  } catch (error) {
    return Response.json(error);
  }
}