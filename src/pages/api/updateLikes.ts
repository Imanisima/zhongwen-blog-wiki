import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: `${process.env.NOTION_LIKES_KEY}` });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PATCH") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {

    const data = req.body;
    const { likes } = data;

    const response:any = await notion.pages.update({
      page_id: `${process.env.NOTION_LIKES_PAGE_ID}`,
      properties: {
        Name: {
          title: [
            {
              text: {
                content: `Pre-Kickoff`,
              },
            },
          ],
        },
        Tags: {
          type: "select",
          select: {
            name: "Blog Pre-release",
            color: "yellow",
          },
        },
        Likes: {
          number: likes,
        },
      },
    });

    return res.status(200).json({ likes: response.properties.Likes.number });
  } catch (error) {
    console.error("Error updating likes:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}