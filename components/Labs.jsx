import React, {useEffect, useState} from 'react'
import Link from 'next/link';
import CarouselCard from './carousel/carouselCard'
import {getDatabase} from '../lib/notion';
import {PageObjectResponse, PartialPageObjectResponse, QueryDatabaseResponse} from '@notionhq/client/build/src/api-endpoints';

import {Client} from "@notionhq/client";
// import { NotionToMarkdown } from "notion-to-md";
// import { BlogPost } from "../@types/schema";


// const notion = new Client({auth: process.env.NOTION_ACCESS_TOKEN});


// const databaseId: string = process.env.NOTION_BLOG_DATABASE_ID || ""


export default function Labs({posts} ) {

    let labPosts = posts[0].properties.Category.select.name;

    let labs = []

    posts.forEach((post) => {
        if (labPosts == 'labs') {
            labs.push(post)
        }
    })


    return (
        <div className=''>
            <div className="flex flex-col lg:h-[40rem] w-10/12 mx-auto">
                <div className="flex flex-col lg:flex-row w-full m-auto ">
                    <div className="grid grid-cols-2 gap-2 grid-rows-5 w-full lg:mr-4 lg:w-4/12 rounded-xl overflow-hidden h-[35rem] px-4 py-12 m-auto ">
                        <div className="relative row-span-2 rounded-lg overflow-hidden">
                            <img src={'https://res.cloudinary.com/tacafrica/image/upload/v1671013112/my_folder/Website%20pics/Drone%20as%20a%20threat/Drone_smuggling_drugs_hbvb1n.jpg'}
                                alt="project"
                                className=' h-full w-full object-cover  rounded-lg' />
                            <span className='absolute min-h-[40px] w-full bg-overlay bottom-0'>
                                <p className='text-white ml-4 mt-3'>{ 'DRONE AS A THREAT' }</p>
                            </span>
                        </div>
                        <div className="relative bg-blue-700 row-span-2 mt-4 rounded-lg overflow-hidden">
                            <img src='https://res.cloudinary.com/tacafrica/image/upload/v1671013116/my_folder/Website%20pics/Drone%20as%20a%20Evidence/Crash_Circuit_Drone_mmagxx.jpg' className=' h-full w-full object-cover '/>
                            <span className='absolute min-h-[40px] w-full bg-overlay bottom-0'>
                                <p className='text-white ml-4 mt-3'>{ 'DRONE AS EVIDENCE' }</p>
                            </span>
                        </div>
                        <div className="relative bg-blue-700 row-span-3 mb-4 rounded-lg overflow-hidden">
                            <img src={'https://res.cloudinary.com/tacafrica/image/upload/v1671013114/my_folder/Website%20pics/drone%20as%20a%20tool/Weed_control_Drone_gakgyf.jpg'}
                                alt="project"
                                className=' h-full w-full object-cover ' />
                            <span className='absolute min-h-[40px] w-full bg-overlay bottom-0'>
                                <p className='text-white ml-4 mt-3'>{ 'DRONE AS A TOOL' }</p>
                            </span>
                        </div>
                        <div className="relative row-span-3 rounded-lg overflow-hidden">
                            <img src={'https://res.cloudinary.com/tacafrica/image/upload/v1671013115/my_folder/Website%20pics/drone%20education/Introducing_Kids_drone_education_w0qicg.jpg'}
                                alt="project"
                                className=' h-full w-full object-cover rounded-lg' />
                            <span className='absolute min-h-[40px] w-full bg-overlay bottom-0'>
                                <p className='text-white ml-4 mt-3'>{ 'DRONE EDUCATION' }</p>
                            </span>
                        </div>
                    </div>
                    <div className="lg:w-6/12 mx-auto ">
                        <div id='irpas'>
                            <h2 className="text-sweet_blue font-bold text-xl my-3">
                                Who we are
                            </h2>
                            <p className="text-xs mb-10 lg:text-base 2xl:text-xl tracking-wide text-gray-700">
                                TAC Africa is a non governmental, bipartisan organization committed to Drone Data Management, Flight Analytics and actionable Flight Intelligence advisory. We help Law enforcement agencies and organizations take full advantage of Drones and counter Drone technologies for surveillance, mapping, deliveries and monitoring. We set global standards for drone detection and verification and  integrate drone data management infrastructure into their existing framework. TAC Africa has rolled out an ongoing online presence on Drone Awareness, training and capability enhancement course for application and adoption by relevant institutions, organizations and agencies within Nigeria and Africa at large.
                            </p>

                            <h2 className="text-sweet_blue font-bold text-xl my-3">
                                what we hope to accomplish
                            </h2>
                            <p className="text-xs  lg:text-base 2xl:text-xl tracking-wide text-gray-700">
                                {`We want to be the first Institute of Remote Piloted Aircraft System (IRPAS) Institute in Africa, helping organizations and industries to achieve their full potential with the aid of Drone Technologies. The future of Aviation is gradually being powered by unmanned Aerial Vehicles and it is in line with this that TAC Africa is pioneering this movement. We want to help tackle complex issues and ultimately help to combat crime.`} </p>

                        </div>

                        <div className='mt-4'>
                            <Link href={'/aboutUs'}>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#F5F7FA] '>
                <div className="flex justify-Center items-center  py-4 mx-auto capitalize ">
                    <h2 className="text-main_blue  mx-auto text-center pt-1.5 font-bold text-4xl mt-12">
                        {'Drone Value Chain '}
                        <span className="font-bold text-4xl ">
                            {'Analytics'} </span>
                    </h2>
                </div>
                <p className='text-center tracking-wide text-gray-700 p-4'>Browse through our digitalized specialized labs.</p>
                <CarouselCard posts={labs}
                    path={'labs'}/>
            </div>
        </div>
    )
}
