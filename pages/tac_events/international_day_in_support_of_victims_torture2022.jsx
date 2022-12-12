/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import {Plock} from 'react-plock';

const data = [
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659626899/my_folder/internationaldayagainsttourture2022/IMG_7691_rnbgxj.jpg'},
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659626896/my_folder/internationaldayagainsttourture2022/IMG_7705_pvrsrr.jpg'},
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659626891/my_folder/internationaldayagainsttourture2022/IMG_7721_em2fnc.jpg'},
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659626886/my_folder/internationaldayagainsttourture2022/IMG_7744_igt0as.jpg'},
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659626885/my_folder/internationaldayagainsttourture2022/IMG_7684_ll4aar.jpg'},
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659626884/my_folder/internationaldayagainsttourture2022/IMG_7723_elq4g4.jpg'},
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659626878/my_folder/internationaldayagainsttourture2022/IMG-20220628-WA0065_d6ohz6.jpg'},
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659626882/my_folder/internationaldayagainsttourture2022/IMG_7760_tk5zki.jpg'},
    {href: 'https://res.cloudinary.com/tacafrica/image/upload/v1659626897/my_folder/internationaldayagainsttourture2022/IMG_7646_hubrwq.jpg'},
]


export default function Gallery() {

    return (
        <div className='mx-auto px-4'>
            <div className='mb-12'>
                <h2 className="text-sweet_blue mx-auto pt-1.5 pl-6 my-6 font-bold text-3xl">International Day in Support of Victims of Torture</h2>
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
                            alt={'International Day in Support of Victims of Torture'}/>
                            </>
                    ))
                } </Plock>
            </div>
        </div>
    )
}
