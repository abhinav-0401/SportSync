import axios from "axios";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;

  const options = {
    method: 'GET',
    url: `https://cricbuzz-cricket.p.rapidapi.com/news/v1/detail/${id}`,
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY as string,
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return Response.json({ article: response.data });
  } catch (error) {
    return Response.json({ message: "Failed to fetch article details", error });
  }
}