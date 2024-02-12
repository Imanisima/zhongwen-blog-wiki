// Import necessary dependencies
import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";

// Initialize Notion client and database ID
const notion = new Client({ auth: `${process.env.NOTION_LIKES_KEY}` });
const databaseId = `${process.env.NOTION_LIKES_DATABASE_ID}`;

// Define the API handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  // Ensure that the request method is GET
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    // Fetch the current likes count and date from the Notion database
    const response: any = await notion.databases.query({
      database_id: databaseId,
    });


    // console.log("get likes - response: ", response.results[0])
    // Extract and return the likes count from the response

    const likes: number = response.results[0].properties.Likes?.number || 0;

    return res.status(200).json({ likes });
  } catch (error) {
    console.error("Error fetching likes:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
