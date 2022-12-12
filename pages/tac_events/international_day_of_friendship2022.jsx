/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
// import Skeleton from 'react-loading-skeleton';
import {Plock} from 'react-plock';
import React, {useState, useEffect } from 'react';


const data = [
    {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619609/my_folder/friendshipday2022/1-2207300098_bjznzc.jpg'
    },
    {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619602/my_folder/friendshipday2022/1-2207300109_kuzno0.jpg'
    },
    {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619591/my_folder/friendshipday2022/1-2207300026_nidaid.jpg'
    },
    {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619447/my_folder/friendshipday2022/1-2207300063_ztbhvg.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619445/my_folder/friendshipday2022/1-2207300048_exvgxj.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619459/my_folder/friendshipday2022/1-2207300118_zzbbxe.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619466/my_folder/friendshipday2022/1-2207300124_uzcff3.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619468/my_folder/friendshipday2022/1-2207300062_wqfjei.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619471/my_folder/friendshipday2022/1-2207300020_mwstl1.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619479/my_folder/friendshipday2022/1-2207300116_qpex45.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619474/my_folder/friendshipday2022/1-2207300056_elzmqg.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619479/my_folder/friendshipday2022/1-2207300030_ogr2jl.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619486/my_folder/friendshipday2022/1-2207300060_pfmip5.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619490/my_folder/friendshipday2022/1-2207300105_byjbzr.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619491/my_folder/friendshipday2022/1-2207300042_dickbt.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619497/my_folder/friendshipday2022/1-2207300070_etljpt.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619497/my_folder/friendshipday2022/1-2207300021_gevphk.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619515/my_folder/friendshipday2022/1-2207300044_fvci9x.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619520/my_folder/friendshipday2022/1-2207300025_rcfhnt.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659619547/my_folder/friendshipday2022/1-2207300113_s63i9m.jpg'
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
            <h2 className="text-sweet_blue mx-auto pt-1.5 pl-6 my-6 font-bold text-3xl">International Day of Friendship 2022</h2>
                <Plock> {
                    data.map(({
                        href
                    }, i) => (
                        <> 
                        <img key={i} className={`${imageLoad ? '': 'hidden'}`} style={{ width: '100%' }} onLoad={handleImageLoaded} src={href} alt={'International Day of Friendship 2022'} />
                    {/* { !imageLoad && <Skeleton height={240} />} */}
                        </>
                            
                    ))
                } </Plock>
            </div>
        </div>
    )
}

