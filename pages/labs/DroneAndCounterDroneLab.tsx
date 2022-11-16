import React from 'react'
import Link from 'next/link'

export default function DroneAndCounterDroneLab() {
  return (
    <div>

      <div className='w-10/12 mx-auto'>
          <div className='h-[28rem] bg-slate-600 rounded-md relative mt-8 mb-28'>
            <img src={ 'https://res.cloudinary.com/tacafrica/image/upload/v1667746391/uav_z9yprr.jpg'} alt="project" 
                className=' h-full w-full object-cover  rounded-lg'
                />
            <div className='h-[12rem] bg-white rounded-md w-8/12 mx-auto absolute bottom-0 translate-y-1/2 translate-x-1/4 '></div>
          </div>
          <div className=''>
            <h2 className='font-semibold text-lg mb-6'>Entering into the virtual lab</h2>
            <p className='pb-4'>
              The TAC AFRICA virtual Drone and Counter Drone lab creates a platform to assemble global subject matter experts from a multidisciplinary background that include academia, law enforcement agencies to synergies through a dedicated online knowledge platform that will raise critical issues which will promote the institutionalization of drone best practices 
            </p>
            <p className='pb-4'>
              in Africa. The key outputs of this virtual lab, will include the production of a global compendium of drone-related thematic areas that will be published in the public domain for regional and international drone and robotics communities.
            </p>
          </div>
      </div>
      {/* <div></div> */}
          <div className="flex flex-col h-[40rem] mx-auto  bg-[#f6f6f6]" >
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
  {/*  */}
                <div className=" mx-auto" >
                  <div className=' lg:h-[70%] mt-6 lg:my-auto mx-auto'>
                    <div className='lg:my-8 '>
                      <h2 className='text-2xl font-semibold mb-4'>Our work in this space</h2>
                    </div>
                    <div className='flex flex-col space-y-6 mt-6 md:mt-0'>
                    <ul className='space-y-4 text-grayText'>
                        <div className='m-0 p-0 inline' >
                            <img className='inline w-2  mr-1' src="/projects/e.jpg" alt="" /><li className='inline-block'> Create awareness of issues of Cyber security and personal data protection.</li>
                        </div>
                        <div className='m-0 p-0'>
                            <img className='inline w-2  mr-1' src="/projects/e.jpg" alt="" /><li className='inline-block'>Create employment opportunities for digital jobs across the country.</li>
                        </div>
                        <div className='m-0 p-0'>
                            <img className='inline w-2  mr-1' src="/projects/e.jpg" alt="" /><li className='inline-block'> Develop more community Tech Hubs & expand to the six LGAs.</li>
                        </div>
                        <div className='m-0 p-0'>
                            <img className='inline w-2  mr-1' src="/projects/e.jpg" alt="" /><li className='inline-block'> Provide an enabling environment for productivity and connectivity.</li>
                        </div>
                    </ul>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>

    </div>
  )
}
