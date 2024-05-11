// pages/api/sportsmonk.ts

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;

  // Construct your Sportsmonk API URL here, you can modify it based on your needs.
  const url = `https://api.sportsmonk.com/v2.0/{endpoint}?api_token=${process.env.NEXT_APP_SPORTSMONK_API_KEY}`;

  if (method === "GET") {
    try {
      const sportsmonkResponse = await fetch(url, {
        headers: {
          // Optional: Any headers you need to include in requests to Sportsmonk
          "Content-Type": "application/json",
        },
      });

      if (!sportsmonkResponse.ok)
        throw new Error("Failed to fetch data from Sportsmonk");

      const data = await sportsmonkResponse.json();
      res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
