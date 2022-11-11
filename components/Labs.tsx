import React, { useEffect, useState} from 'react'
import Link from 'next/link';
import CarouselCard  from '../components/carousel/carouselCard'

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
            <div className="flex flex-col h-[40rem] w-10/12 mx-auto" >
             <div  className="flex flex-col lg:flex-row w-full m-auto "  >
              <div className="grid grid-cols-2 gap-2 grid-rows-5 w-full lg:mr-4 lg:w-4/12 rounded-xl overflow-hidden h-[25rem] m-auto ">
                <div className=" row-span-2 rounded-lg">
                  <img src={ 'https://res.cloudinary.com/tacafrica/image/upload/v1659626896/my_folder/internationaldayagainsttourture2022/IMG_7705_pvrsrr.jpg'} alt="project" 
                  className=' h-full w-full object-cover  rounded-lg'
                  />
                </div>
                <div className=" bg-blue-700 row-span-2 mt-4 rounded-lg">
                
                </div>
                <div className=" bg-blue-700 row-span-3 mb-4 rounded-lg">
                {/* <img src={ 'https://res.cloudinary.com/tacafrica/image/upload/v1660216602/my_folder/youth%20skill%20day/IMG-20220718-WA0017_axnea4.jpg'} alt="project" 
                  className=' h-full w-full object-cover ' */}
                  {/* /> */}
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
                  Who we are and what we hope to accomplish
                  </h2>
                  <p className="text-xs  lg:text-base 2xl:text-xl">
                  <em>Project</em> 774 is an ongoing initiative of the Technology Against 
                  Crime Africa NGO. It is a project initiated to help
                  curb the security challenges and drive the growth of the Digital Economy 
                  in Africa through a community-based
                  approach (Community-centered Digital Hub) to promote digital engagement
                  </p>

                  <h2  className="text-sweet_blue font-bold text-xl my-3">
                  Who we are and what we hope to accomplish
                  </h2>
                  <p className="text-xs  lg:text-base 2xl:text-xl">
                  <em>Project</em> 774 is an ongoing initiative of the Technology Against 
                  Crime Africa NGO. It is a project initiated to help
                  curb the security challenges and drive the growth of the Digital Economy 
                  in Africa through a community-based
                  approach (Community-centered Digital Hub) to promote digital engagement
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
        <h2 className="text-black mx-auto pt-1.5 font-bold text-4xl mt-12">
          {'Our Digitalized '}
          <span className="text-main_blue font-bold text-4xl ">
            {'Specialized Labs'}
          </span>
        </h2>
      </div>
      <p className='text-center text-black'>Browse through our digitalized specialized labs.</p>
        <CarouselCard posts={labs} path={'labs'} />
    </div>
    </div>
  )
}
