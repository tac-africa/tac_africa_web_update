import React, { useEffect, useState} from 'react'
import Link from 'next/link';
import CarouselCard  from '../components/carousel/carouselCard'
import { getDatabase } from '../lib/notion';
import { PageObjectResponse, PartialPageObjectResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

import {Client} from "@notionhq/client";
// import { NotionToMarkdown } from "notion-to-md";
// import { BlogPost } from "../@types/schema";


// const notion = new Client({auth: process.env.NOTION_ACCESS_TOKEN});



// const databaseId: string = process.env.NOTION_BLOG_DATABASE_ID || ""


export default function Labs({ posts } : any ) {

  let labPosts = posts[0].properties.Category.select.name;

  let labs: any[] = []

  posts.forEach((post: any) => {
    if(labPosts == 'labs') {
      labs.push(post)
    }
  })

 
  return (
    <div className=''>
            <div className="flex flex-col lg:h-[40rem] w-10/12 mx-auto" >
             <div  className="flex flex-col lg:flex-row w-full m-auto "  >
             <div className="grid grid-cols-2 gap-2 grid-rows-5 w-full lg:mr-4 lg:w-4/12 rounded-xl overflow-hidden h-[35rem] px-4 py-12 m-auto ">
            <div className=" row-span-2 rounded-lg">
              <img src={ 'https://res.cloudinary.com/tacafrica/image/upload/v1659626896/my_folder/internationaldayagainsttourture2022/IMG_7705_pvrsrr.jpg'} alt="project" 
              className=' h-full w-full object-cover  rounded-lg'
              />
            </div>
            <div className=" bg-blue-700 row-span-2 mt-4 rounded-lg">
                <img src= 'https://res.cloudinary.com/tacafrica/image/upload/v1657886040/my_folder/team/IMG_5480_zcgigo.jpg'
                className=' h-full w-full object-cover ' 
                />
             
            </div>
            <div className=" bg-blue-700 row-span-3 mb-4 rounded-lg">
            <img src={ 'https://res.cloudinary.com/tacafrica/image/upload/v1670579951/my_folder/drone/Kids_drone_presentation_2_pvrhry.jpg'} alt="project" 
              className=' h-full w-full object-cover ' 
              />
            </div>
            <div className="row-span-3 rounded-lg">
            <img src={ 'https://res.cloudinary.com/tacafrica/image/upload/v1657883873/my_folder/projects/ageqfoxdysye0qngyp2h.jpg'} alt="project" 
              className=' h-full w-full object-cover rounded-lg'
              />
            </div>
        </div>
              <div className="lg:w-6/12 mx-auto ">
                <div id='irpas'>
                  <h2  className="text-sweet_blue font-bold text-xl my-3">
                  Who we are
                  </h2>
                  <p className="text-xs mb-10 lg:text-base 2xl:text-xl tracking-wide text-gray-700">
                  Drone data management, flight Analysis and Actionable Flight Intelligence advisors. We support
                  agencies and organization in building, setting up and integrating drone data management
                  infrastructure into their existing system.
                  We offer a detailed outline of technological, legal and operational aspects of drone applications
                  and training.
                  Making Drone technology more enabled, we offer this advisory through Policy Advocacy
                  Research, Training and Capacity Building and Volunteering.
                  </p>

                  <h2  className="text-sweet_blue font-bold text-xl my-3">
                  what we hope to accomplish
                  </h2>
                  <p className="text-xs  lg:text-base 2xl:text-xl tracking-wide text-gray-700">
                  {`To be the first RPAS Training institute for Africa, thereby helping organizations and industries
                  achieve the benefits of drone technology through;
                  Drone training – UAS Basics, Introduction and Fundamental Industry, Communities and
                  Everyone.
                  Drone Analytics – First Responders, Law Enforcement, Aviation Regulatory, Industry and
                  Innovation
                  Drone management – UAS Licensing, Expert Community, Partnership with Tertiary/Higher
                  Education`}
                  </p>
                  
                </div>

                <div className='mt-4'>
                  <Link href={'/irpas'}>
                      <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Learn More
                      </button>
                  </Link>
                </div>
              </div>
             </div>
          </div>

    <div className='bg-[#F5F7FA] '>
      <div className="flex justify-Center items-center  py-4 mx-auto capitalize ">
      <h2 className="text-black mx-auto text-center pt-1.5 font-bold text-4xl mt-12">
          {'Drone Value Chain '}
          <span className="text-main_blue font-bold text-4xl ">
            {'Analytics'}
          </span>
        </h2>
      </div>
      <p className='text-center tracking-wide text-gray-700 p-4'>Browse through our digitalized specialized labs.</p>
        <CarouselCard posts={labs} path={'labs'} />
    </div>
    </div>
  )
}
