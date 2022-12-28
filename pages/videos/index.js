import React from 'react'
// import Button from '../components/button/Button'
import YoutubeEmbed from '../../components/videoPlayer/youTubeEmbed'
import { data } from '../api/videos'

export default function aboutUs() {
  return (
      <div className='mx-auto'>
 
        <div className='mt-40 mb-20'>
            <div className='w-10/12 lg:w-8/12 mx-auto'>
                <h2 className='text-center my-10 flex justify-center '><hr className='hidden lg:block w-4/12 my-auto h-[2px] bg-gray-200 border-none mr-8' /> Videos <hr className='hidden lg:block w-4/12 my-auto h-[2px] bg-gray-200 border-none ml-8' /></h2>
            </div>
            <div className='w-10/12 lg:w-10/12 mx-auto'>
                  <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-16 lg:grid lg:grid-cols-3">
                      
                      {
                          data[0].youtube.map(({ title, description, link, videoSrc}) => (      
                            <div className="w-full rounded shadow-2xl">
                              <YoutubeEmbed embedId={link} videoSrc={ videoSrc } />
                                
                                    {/* className='object-cover w-full h-[400px]' */}
                                    <div className=' bg-white p-4'>
                                      <h3 className='mb-2 font-semibold text-main_blue '>{title}</h3>
                                      <p className='text-sm text-gray-700'>{description}</p>
                                    </div>
                            </div>
                          ))
                      }
             
                </div>
              </div>
        </div>

        {/* <div className='my-40'>
            <div className='w-10/12 lg:w-8/12 mx-auto'>
            <h2 className='text-center my-10 flex justify-center '><hr className='hidden lg:block w-4/12 my-auto h-[2px] bg-gray-200 border-none mr-8' /> Secretariat <hr className='hidden lg:block w-4/12 my-auto h-[2px] bg-gray-200 border-none ml-8' /></h2>
            </div>
            <div className='w-10/12 lg:w-10/12 mx-auto'>
                  <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-16 lg:grid lg:grid-cols-3">
                      
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1670457150/my_folder/TACteam/ibro_ardo1w.png"
                            alt="image"
                            className='object-cover w-full h-[400px]'
                        />
                            <div className=' bg-white p-4'>
                                <h3 className='mb-2 font-semibold text-main_blue '>IBRAHIM M. ALI</h3>
                                <p className='text-sm text-gray-700'>
                                Is an Expert in UAV/ Drone technology, he has been employed with Technology Against Crime Africa (TAC-AFRICA) for more than four years, He oversees and manages all technical operations and maintenance using his professional expertise in IT, drones, and other engineering services including networking and CCTV camera installation, etc. He obtains a Certification in Introduction to Drone, UAV/Drone Pilot 107, Drone Aerial Photogrammetry and Videography, Drone GIS, and 3D Mapping Techniques Using Drones.
                                </p>
                            </div>
                      </div>
                      
                </div>
            </div>
        </div> */}
    </div>
  )
}
