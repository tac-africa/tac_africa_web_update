import { Client } from "@notionhq/client";
// import { NotionToMarkdown } from "notion-to-md";
// import { BlogPost } from "../@types/schema";


const notion = new Client({
    auth: process.env.NOTION_ACCESS_TOKEN
});


export const getDatabase = async (databaseId : string) => {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Published",
        checkbox: {
            equals: true
        }
        },
        sorts: [
            {
                property: 'Created',
                direction: 'descending'
            }
        ]
    });
    return response.results;
  };
  
  export const getPage = async (pageId: string) => {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
  };
  
  export const getBlocks = async (blockId : string) => {
    const blocks = [];
    let cursor;
    while (true) {
      const { results, next_cursor } :any = await notion.blocks.children.list({
        start_cursor: cursor,
        block_id: blockId,
      });
      blocks.push(...results);
      if (!next_cursor) {
        break;
      }
      cursor = next_cursor;
    }
    return blocks;
  };
  

  
