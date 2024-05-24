import axios from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const matchId = searchParams.get("matchId");

  const options = {
    method: 'GET',
    url: `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}/leanback`,
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