import React from 'react'
import Link from 'next/link'

export default function OngoingProjects() {
  return (
    <>
      <div className="w-10/12 mx-auto">
        <div className="mx-auto w-10/12 text-center mb-12 lg:w-7/12">
          <h2 className="text-sweet_blue mx-auto pt-1.5 font-bold text-6xl text-center mb-12">
            Ongoing <span className="text-primary font-bold text-6xl"> Projects </span>{' '}
          </h2>
          <p className="text-sm lg:text-lg">
            TAC Africa through her collaborations and partnerships
            curate, develop projects to help organization and industries
            benefit from emerging technology
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full lg:mr-4 lg:w-6/12 rounded-sm overflow-hidden h-[35rem] bg-slate-500">
            <img src="https://res.cloudinary.com/tacafrica/image/upload/v1657884296/my_folder/fq0rkbyibtd4heb2bjom.png" alt="community hub"  />
            </div>
            <div className="lg:w-5/12 mx-auto lg:my-auto">
              <div id='irpas'>
                
                <h2  className="text-sweet_blue font-bold text-xl my-3">
                  Institute for Remote Piloted Aircraft Systems (IRPAS)
                </h2>
                <p className="text-xs  lg:text-base 2xl:text-xl">
                  Institute for Remotely Piloted Aircraft System was
                  conceived to address the growing demand for digital
                  transformation. Our goal is to be the first Remotely
                  Piloted Aircraft training and assessment organization
                  in Nigeria. Our mission is to ensure that the training
                  and licensing of professional RPAS Pilot In Nigeria is
                  conducted with the highest standard to meet global
                  standard practice.
                </p>
              </div>

              <div>
                <Link href={'/irpas'}>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Read More
                    </button>
                </Link>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <div id='tac_community_hub' className="flex flex-col-reverse lg:flex-row mt-10">
            <div className="flex flex-col lg:w-6/12 lg:flex-row md:mt-10">
              <div className="mr-4 lg:my-auto">
                <h2 className="text-sweet_blue font-bold text-xl my-3">
                The School of Hard Knocks
                </h2>
                <p className="text-xs lg:text-base 2xl:text-xl ">
                  <em className="text-lg lg:text-xl 2xl:text-2xl text-sweet_blue">
                    The School of Hard Knocks
                  </em>
                  {` is a cutting edge
                  Co-creation Hub for Sports, Research and Community
                  Development Activities for Kids of all age and adults
                  of all works of life. It is a subscription based
                  community and located within the suburb of the Federal
                  Capital Territory, Abuja – Nigeria.`}
                </p>
                <div>
                  <Link href={'/tac_community_hub'}>
                      <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Read More
                      </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:ml-4 lg:w-6/12 mx-auto">
              <div className="lg:aspect-w-16 lg:aspect-h-9 rounded-sm overflow-hidden h-[35rem] bg-slate-500">
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1657884296/my_folder/fq0rkbyibtd4heb2bjom.png" alt="community hub"   />
              </div>
            </div>
          </div>
          
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <div className="flex flex-col lg:flex-row ">
            <div className="w-full lg:mr-4 lg:w-6/12 rounded-sm overflow-hidden h-[35rem] bg-slate-500 ">
            <img src="https://res.cloudinary.com/tacafrica/image/upload/v1657884296/my_folder/fq0rkbyibtd4heb2bjom.png" alt="community hub"   />
            </div>
            <div className="lg:w-5/12 mx-auto lg:my-auto">
              <div id='irpas'>
                <h2  className="text-sweet_blue font-bold text-xl my-3">
                  Project 774
                </h2>
                <p className="text-xs  lg:text-base 2xl:text-xl">
                <em>Project</em> 774 is an ongoing initiative of the Technology Against 
                Crime Africa NGO. It is a project initiated to help
                curb the security challenges and drive the growth of the Digital Economy 
                in Africa through a community-based
                approach (Community-centered Digital Hub) to promote digital engagement
                </p>
              </div>

              <div>
                <Link href={'/project774'}>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Read More
                    </button>
                </Link>
              </div>
            </div>
          </div>


      </div>
      </div>
    </>
  )
}
