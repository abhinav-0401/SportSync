import axios from "axios";

export async function GET(req: Request) {
  const options = {
    method: 'GET',
    url: 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY as string,
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const filteredData = response.data?.storyList?.filter((story: any) => {
      return story?.hasOwnProperty("story");
    });
    return Response.json({ list: filteredData });
  } catch (error) {
    return Response.json({ message: "Failed to get news articles", error });
  }
}