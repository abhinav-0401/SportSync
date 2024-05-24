import axios from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const seriesId = searchParams.get("seriesId");

  const options = {
    method: 'GET',
    url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/series/${seriesId}/points-table`,
    headers: {
      'X-RapidAPI-Key': '1de355f466msh1bfa3dfa1c06b74p1ced11jsn982e34977c06',
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return Response.json(response.data);
  } catch (error) {
    console.error(error);
    return Response.json(error);
  }
}