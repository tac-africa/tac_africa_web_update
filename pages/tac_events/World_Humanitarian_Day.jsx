/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

// import Skeleton from 'react-loading-skeleton';
import React, {useState, useEffect } from 'react';
import {Plock} from 'react-plock';

export default function World_Humanitarian_Day() {


    const data = [
        {
            href:'https://res.cloudinary.com/tacafrica/image/upload/v1661164645/my_folder/humanitarian%20day%20and%20victims%20of%20violence/WhatsApp_Image_2022-08-21_at_11.29.03_AM_xomoqg.jpg'
        },
        {
            href:'https://res.cloudinary.com/tacafrica/image/upload/v1661164644/my_folder/humanitarian%20day%20and%20victims%20of%20violence/WhatsApp_Image_2022-08-21_at_11.29.04_AM_1_lukcjv.jpg'
        },
        {
            href:'https://res.cloudinary.com/tacafrica/image/upload/v1661164643/my_folder/humanitarian%20day%20and%20victims%20of%20violence/WhatsApp_Image_2022-08-21_at_11.29.03_AM_1_ivjeam.jpg'
        },
        {
            href:'https://res.cloudinary.com/tacafrica/image/upload/v1661164643/my_folder/humanitarian%20day%20and%20victims%20of%20violence/WhatsApp_Image_2022-08-21_at_11.29.04_AM_sksg4w.jpg'
        },
        {
            href:'https://res.cloudinary.com/tacafrica/image/upload/v1661164643/my_folder/humanitarian%20day%20and%20victims%20of%20violence/WhatsApp_Image_2022-08-21_at_11.29.05_AM_1_ab2gtq.jpg'
        },
        {
            href:'https://res.cloudinary.com/tacafrica/image/upload/v1661164643/my_folder/humanitarian%20day%20and%20victims%20of%20violence/WhatsApp_Image_2022-08-21_at_11.29.05_AM_s6lpgg.jpg'
        },
    
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
        <div className='mx-auto px-4'>
            <div className='mb-12'>
                <h2 className="text-sweet_blue mx-auto pt-1.5 pl-6 my-6 font-bold text-3xl"> World HumanitarianDay 2022</h2>
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
  )
}
