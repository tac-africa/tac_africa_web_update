/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import {Plock} from 'react-plock';

const data = [
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660171151/my_folder/tennis%20championship/1-2208070020_cvnapj.jpg'}, 
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660171150/my_folder/tennis%20championship/1-2208070002_rkfu7m.jpg'}, 
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660171149/my_folder/tennis%20championship/1-2208070004_b8moqb.jpg'}, 
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660171138/my_folder/tennis%20championship/1-2208070081_bpuazw.jpg'}, 
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660171132/my_folder/tennis%20championship/1-2208070069_ol9pxc.jpg'}, 
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660171117/my_folder/tennis%20championship/1-2208070010_ok38d6.jpg'}, 
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660171102/my_folder/tennis%20championship/1-2208070011_urpfaf.jpg'}, 
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660171040/my_folder/tennis%20championship/1-2208070057_at22cq.jpg'}, 
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660171034/my_folder/tennis%20championship/1-2208070008_h50r3x.jpg'}, 
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660171034/my_folder/tennis%20championship/1-2208070007_bmmlhd.jpg'}, 
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660171016/my_folder/tennis%20championship/1-2208070067_v9ettg.jpg'}, 
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660170989/my_folder/tennis%20championship/1-2208070022_pz62c8.jpg'}, 
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660171004/my_folder/tennis%20championship/1-2208070070_h1nltq.jpg'},

]


export default function Gallery() {

    return (
        <div className='mx-auto px-4'>
            <div className='mb-12'>
                <h2 className="text-sweet_blue mx-auto pt-1.5 pl-6 my-6 font-bold text-3xl">Tennis championship 2022</h2>
                <Plock> {
                    data.map(({
                        href
                    }, i) => (
                        <>
                        <img key={i}
                            style={
                                {width: '100%'}
                            }
                            src={href}
                            alt={'Youth skill day'}/>
                            </>
                    ))
                } </Plock>
            </div>
        </div>
    )
}
