/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
// import Skeleton from 'react-loading-skeleton';
import {Plock} from 'react-plock';
import React, {useState, useEffect } from 'react';

const data = [
    {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796873/my_folder/mandella_and_chess_day/1-2207230020_suec9w.jpg'
    },
    {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796866/my_folder/mandella_and_chess_day/1-2207230046_vz6ilk.jpg'
    },
    {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796846/my_folder/mandella_and_chess_day/1-2207230108_esktep.jpg'
    },
    {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796838/my_folder/mandella_and_chess_day/1-2207230009_fxzr5q.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796788/my_folder/mandella_and_chess_day/1-2207230133_ehhhfi.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796764/my_folder/mandella_and_chess_day/1-2207230135_gcbts4.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796675/my_folder/mandella_and_chess_day/1-2207230094_colhgg.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796663/my_folder/mandella_and_chess_day/1-2207230105_q07ljr.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796617/my_folder/mandella_and_chess_day/1-2207230120_eqitsp.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796561/my_folder/mandella_and_chess_day/1-2207230126_w9eeof.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796477/my_folder/mandella_and_chess_day/1-2207230095_ahqnnv.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796246/my_folder/mandella_and_chess_day/1-2207230071_plwhgh.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796130/my_folder/mandella_and_chess_day/1-2207230052_ffmnzo.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796085/my_folder/mandella_and_chess_day/1-2207230014_gzdzaq.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796061/my_folder/mandella_and_chess_day/1-2207230021_bherew.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796154/my_folder/mandella_and_chess_day/1-2207230059_oea5bk.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796201/my_folder/mandella_and_chess_day/1-2207230093_ru7oma.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1658796214/my_folder/mandella_and_chess_day/1-2207230002_gzempl.jpg'
    },
]


export default function Gallery() {


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
                <h2 className="text-sweet_blue mx-auto pt-1.5 pl-6 my-6 font-bold text-3xl">Nelson Mandella and International chess day</h2>
                <Plock> {
                    data.map(({
                        href
                    }, i) => (
                        <>
                    <img key={i} className={`${imageLoad ? '': 'hidden'}`} style={{ width: '100%' }} onLoad={handleImageLoaded} src={href} alt={'International Youth Day 2022'} />
                    {/* { !imageLoad && <Skeleton height={240} />} */}
                        </>
                            // alt={'Nelson Mandella and International chess day'}
                    ))
                } </Plock>
            </div>
        </div>
    )
}
