import type { NextApiRequest, NextApiResponse } from 'next';
import { Client } from "@notionhq/client";

const postHandler = async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const data = req.body


    /** Create your entry data using the required structure */
    const entry: any = {
      parent: {
        database_id: `${process.env.NOTION_CONTACT_DATABASE_ID}`,
      },
      properties: {
        Type: {
          title: [
            {
              text: {
                content: `New Subscription Entry`,
              },
            },
          ],
        },
        User: {
            rich_text: [
                {
                    text: {
                        content: `${data.user}`,
                    },
                },
            ],
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
      },
    };

    /** Authenticate your request */
    const notion = new Client({ auth: `${process.env.NOTION_CONTACT_KEY}` });
    const response = await notion.pages.create(entry);

    return res.status(200).json(response);
  } catch (error) {
    console.error('Error processing POST request:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default postHandler;