import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { BlogPost } from "../@types/schema";


const notion = new Client({
    auth: process.env.NOTION_ACCESS_TOKEN
});
// const databaseID = process.env.NOTION_BLOG_DATABASE_ID
// const n2m = new NotionToMarkdown({ notionClient: notion });

export const getPublishedPosts = async ( ) => {
    try{
        const response = await notion.databases.query({
            database_id: `${process.env.NOTION_BLOG_DATABASE_ID}`,
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
        })

        // const posts :any = []
        // response.results.forEach(result => {
        //     posts.push({
        //         result
        //     })  
        // });

        // console.log(posts.results)

        // return {
        //     props: {
        //         items: posts
        //     }
        // }
        return response
    }
    catch(error : unknown) {
        let message = 'Unknown Error'
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log(message);
    }
}
 