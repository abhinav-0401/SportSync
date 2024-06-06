import axios from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const matchId = searchParams.get("matchId");

  const options = {
    method: 'GET',
    url: `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}`,
    headers: {
      'X-RapidAPI-Key': '85607bb431msh3a654f96f43ef98p192874jsn41a23de3d242',
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return Response.json(response.data);
  } catch (error) {
    console.error(error);
    return Response.json(error);
  }
}