import axios from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const matchId = searchParams.get("matchId");

  const options = {
    method: 'GET',
    url: `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}/leanback`,
    headers: {
      'X-RapidAPI-Key': '02fbfcbb53mshe164c7d46e999d6p142177jsn4ed1f614fe73',
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