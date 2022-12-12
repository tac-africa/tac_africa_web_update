/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
// import Skeleton from 'react-loading-skeleton';
import React, {useState, useEffect } from 'react';
import {Plock} from 'react-plock';

export default function International_Day_of_remembrance_and_tribute_to_the_victims_of_Terrorism() {

  const data = [
   {
    href: "https://res.cloudinary.com/tacafrica/image/upload/v1661164210/my_folder/humanitarian%20day%20and%20victims%20of%20violence/To_Print_-_21_August-07--_qc1wgd.png",
   },
   {
    href: "https://res.cloudinary.com/tacafrica/image/upload/v1661164321/my_folder/humanitarian%20day%20and%20victims%20of%20violence/To_Print_-_21_August-07_oqopt1.png",
   },
   {
    href: "https://res.cloudinary.com/tacafrica/image/upload/v1661164208/my_folder/humanitarian%20day%20and%20victims%20of%20violence/To_Print_-August_21_dcw6hd.png",
   }
]

  const [imageLoad, setImageLoad] = useState(false)


  const handleImageLoaded = () => {
      console.log(imageLoad)
      return setImageLoad(true)
  }

  useEffect(() => {
      handleImageLoaded()
  },[imageLoad] )

  return (
        <div>
            <div className='mx-auto px-4'>
            <div className='mb-12'>
                <h2 className="text-sweet_blue mx-auto pt-1.5 pl-6 my-6 font-bold text-3xl">International Day of remembrance and tribute to the victims of Terrorism 2022</h2>
                <Plock> {
                    data.map(({
                        href
                    }, i) => (
                    <>
                    <img key={i} className={`${imageLoad ? '': 'hidden'}`} style={{ width: '100%' }} onLoad={handleImageLoaded} src={href} alt={'World HumanitarianDay 2022'} />
                    {/* { !imageLoad && <Skeleton height={240} />} */}
                    </> 
                     
                    ))
                } </Plock>
            </div>
        </div>
    </div>
  )
}
