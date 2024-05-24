import axios from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const matchId = searchParams.get("matchId");
  console.log("matchId: ", matchId);

  const options = {
    method: 'GET',
    url: `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}/scard`,
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY as string,
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