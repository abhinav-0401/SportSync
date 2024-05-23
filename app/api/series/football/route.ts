import axios, { AxiosRequestConfig } from "axios";

export async function GET(req: Request) {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
    params: {
      live: "all",
    },
    headers: {
      "X-RapidAPI-Key": "c10cacd3f3msh6e9d4279ec531c3p13cc59jsn325696968493",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  try {
    const res = await axios.request(options);
    console.log(res.data);
    return Response.json(res.data);
  } catch (error) {
    console.log(error);
    return Response.json({
      message: "Failed to fetch football series",
    });
  }
}