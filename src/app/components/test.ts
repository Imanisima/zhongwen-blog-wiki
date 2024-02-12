import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from "@notionhq/client";

export const dynamic = 'force-dynamic'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  /** Check the request's method before processing */
  if (req.method === "POST") {
    /** Parse the request body to access your data */
    const data = JSON.parse(req.body);
    /** Create your entry data using the required structure */
    const entry: any = {
      parent: {
        database_id: `${process.env.NOTION_CONTACT_DATABASE_ID}`,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: `New Subscription Entry`,
              },
            },
          ],
        },
        // User: {
        //     rich_text: [
        //         {
        //             text: {
        //                 content: `${data.user}`,
        //             },
        //         },
        //     ],
      },
      Email: {
        email: `${data.email}`,
      },
      // Likes: {
      //   rich_text: [
      //     {
      //       text: {
      //         content: `${data.likes}`,
      //       },
      //     },
      //   ],
      // },
      /** I'm using Tags to change entries state in Notion */
      Tags: {
        type: "select",
        select: {
          name: "New",
          color: "yellow",
        },
      },
      /** Optional if you want to assign the entry to a user */
      // Assigned: {
      //     type: "people",
      //     people: [
      //         {
      //             object: "user",
      //             id: `${process.env.NOTION_ADMIN_ID}`,
      //         },
      //     ],
      // },
    };
    //   }
    /** Authenticate your request */
    const notion = new Client({ auth: `${process.env.NOTION_KEY}` });
        const response = await notion.pages.create(entry);
        res.status(200).json(response);
    } else {
        res.status(200).json(
            "Hello! This API is set for POST method only. No content is available at GET."
        );
  }
}