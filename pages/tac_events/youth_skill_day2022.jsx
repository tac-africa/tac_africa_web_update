/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import {Plock} from 'react-plock';

const data = [
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660216605/my_folder/youth%20skill%20day/IMG-20220718-WA0022_olw7xn.jpg'},
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660216602/my_folder/youth%20skill%20day/IMG-20220718-WA0007_awfj4m.jpg'},
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660216600/my_folder/youth%20skill%20day/IMG-20220718-WA0006_1_ne90jo.jpg'},
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1660216598/my_folder/youth%20skill%20day/IMG-20220718-WA0036_qssfwr.jpg'},
]


export default function Gallery() {

    return (
        <div className='mx-auto px-4'>
            <div className='mb-12'>
                <h2 className="text-sweet_blue mx-auto pt-1.5 pl-6 my-6 font-bold text-3xl">Youth skill day</h2>
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
