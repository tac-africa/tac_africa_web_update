import React from 'react'
import Link from 'next/link'
import { Text } from '../../pages/newsletters/[id]';

export default function OngoingProjects({ posts } ) {

  let projectsPosts = posts[0].properties.Category.select.name;

  let projects = []

  posts.forEach((post) => {
    if( projectsPosts == 'projects') {
      projects.push(post)
    }
  })


  return (
    <>
      <div className="w-10/12 mx-auto mt-12 ">
        <div className="mx-auto w-10/12 text-center mb-12 lg:w-7/12">
          <h2 className=" mx-auto pt-1.5 font-bold text-4xl text-center mb-6">
            Explore Our <span className="text-main_blue font-bold ">Recent Projects </span>{' '}
          </h2>
          <p className="tracking-wide text-gray-700">
            TAC Africa through her collaborations and partnerships
            curate, develop projects to help organization and industries
            benefit from emerging technology
          </p>
        </div>

        <div className="flex flex-col mb-20">
          {
            projects.map((project) => (
            <div className="flex flex-col lg:flex-row py-4">
            <div className="w-full lg:mr-4 lg:w-4/12 rounded-xl overflow-hidden h-[20rem] m-auto bg-slate-500">
            <img src={ project.cover?.external?.url || 'https://res.cloudinary.com/tacafrica/image/upload/v1657884296/my_folder/fq0rkbyibtd4heb2bjom.png'} alt="project" 
                  className=' h-full w-full object-cover '
                  />
            </div>
            <div className="lg:w-5/12 mx-auto lg:my-auto">
              <div>
                <h2  className=" font-bold text-xl my-3 text-main_blue">
                <Text text={project.properties.Name.title} />
                </h2>
                <p className="text-xs  lg:text-base 2xl:text-xl tracking-wide text-gray-700">
                <Text text={project.properties.excerpt.rich_text} />
                </p>
              </div>

              <div className='mt-4'>
                {/* href={`/projects/${project.properties.Slug.formula.string}`} */}
                    <Link
                      href={project.properties.externalURL.url} >
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      See full project
                    </button>
                </Link>
              </div>
            </div>
          </div>
            ))
          }

      </div>
      </div>
    </>
  )
}