import {Client} from "@notionhq/client";
// import { NotionToMarkdown } from "notion-to-md";
// import { BlogPost } from "../@types/schema";


const notion = new Client({auth: process.env.NOTION_ACCESS_TOKEN});


export const getDatabase = async (databaseId , filterBySection  ) => {
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            'and': [
                {
                    property: "Published",
                    checkbox: {
                        equals: true
                    }
                }, 
                {
                    property: "Category",
                    select: {
                        equals: filterBySection
                    }
                }
            ]
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

export const getPage = async (pageId  ) => {
    const response = await notion.pages.retrieve({page_id: pageId});
    return response;
};

export const getBlocks = async (blockId  ) => {
    const blocks = [];
    let cursor;
    while (true) {
        const {results, next_cursor}  = await notion.blocks.children.list({start_cursor: cursor, block_id: blockId});
        blocks.push(...results);
        if (!next_cursor) {
            break;
        }
        // cursor = next_cursor;
    }
    return blocks;
};

// <<<>>>>
const getPageMetaData = (post) => {
    const getTags = (tags) => {
      const allTags = tags.map((tag) => {
        return tag.name;
      });
      return allTags;
    };
    return {
      id: post.id,
      title: post.properties.Name.title[0].plain_text,
    //   tags: getTags(post.properties.Tags.multi_select),
    //   description: post.properties.Description.rich_text[0].plain_text,
    //   date: getToday(post.properties.Date.last_edited_time),
    //   slug: post.properties.Slug.rich_text[0].plain_text,
    };
   }

   function getToday (datestring) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let date = new Date();
    if (datestring) {
      date = new Date(datestring);
    }
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    let today = `${month} ${day}, ${year}`;
    return today;
  };
  
  const { NotionToMarkdown } = require("notion-to-md");
  const n2m = new NotionToMarkdown({ notionClient: notion });

export const getSingleBlogPostBySlug = async (databaseId, slug ) => {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Slug",
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    });
    const page = response.results[0];
    const metadata = getPageMetaData(page);
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);
    return {
        metadata,
        markdown: mdString,
        response
    };
    // return response.results
  }
