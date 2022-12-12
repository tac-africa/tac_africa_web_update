/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
// import Skeleton from 'react-loading-skeleton';
import React, {useState, useEffect } from 'react';
import {Plock} from 'react-plock';

const data = [
    {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567583/my_folder/int%20youth%20day/1-2208130076_evduai.jpg'
    },
    {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567319/my_folder/int%20youth%20day/1-2208130108_zcyga1.jpg'
    },
    {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567320/my_folder/int%20youth%20day/1-2208130139_h5slq9.jpg'
    },
    {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567320/my_folder/int%20youth%20day/1-2208130136_rhpdaf.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567320/my_folder/int%20youth%20day/1-2208130135_jp96y2.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567315/my_folder/int%20youth%20day/1-2208130091_qxt6pc.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567313/my_folder/int%20youth%20day/1-2208130100_llasyk.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567314/my_folder/int%20youth%20day/1-2208130101_h5gtbn.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567309/my_folder/int%20youth%20day/1-2208130090_l7rsdp.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567310/my_folder/int%20youth%20day/1-2208130074_irf5qg.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567306/my_folder/int%20youth%20day/1-2208130066_al2eha.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567305/my_folder/int%20youth%20day/1-2208130081_jlcrpz.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567305/my_folder/int%20youth%20day/1-2208130081_jlcrpz.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567305/my_folder/int%20youth%20day/1-2208130077_nllpwh.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567304/my_folder/int%20youth%20day/1-2208130079_m9avd8.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567299/my_folder/int%20youth%20day/1-2208130073_h1svok.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567298/my_folder/int%20youth%20day/1-2208130065_wwhsgk.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567294/my_folder/int%20youth%20day/1-2208130132_nbnole.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567202/my_folder/int%20youth%20day/1-2208130054_rfth9t.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567184/my_folder/int%20youth%20day/1-2208130038_i3rttl.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567167/my_folder/int%20youth%20day/1-2208130017_vqgeqq.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567137/my_folder/int%20youth%20day/1-2208130005_fd3nx4.jpg'
    }, {
        href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660567126/my_folder/int%20youth%20day/1-2208130004_priz0g.jpg'
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
                <h2 className="text-sweet_blue mx-auto pt-1.5 pl-6 my-6 font-bold text-3xl"> International Youth Day 2022</h2>
                <Plock> {
                    data.map(({
                        href
                    }, i) => (
                    <>
                    <img key={i} className={`${imageLoad ? '': 'hidden'}`} style={{ width: '100%' }} onLoad={handleImageLoaded} src={href} alt={'International Youth Day 2022'} />
                    {/* { !imageLoad && <Skeleton height={240} />} */}
                    </> 
                     
                    ))
                } </Plock>
            </div>
        </div>
    )
}

