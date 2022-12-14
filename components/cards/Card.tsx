import React from 'react'
import Link from 'next/link'
import Button from '../button/Button';
import { Text } from '../../pages/newsletters/[id]';

type CardProps = {
    title : string;
    excerpt : string;
    image: string;
    link: string;
}



export const Card = ({ post, path }: any ) => {
  return (
    <Link href={`/${path}/${post.properties.Slug.formula.string}`} >
        <div key={''} className="p-4 flex items-stretch  " style={{display: 'flex: 1 1 auto'}}> {/*md:w-6/12 lg:w-1/3*/}
            <div className="border-2 border-gray-200 rounded-lg w-full  ">
                <img className="object-cover object-center w-full lg:h-48 md:h-36 px-4 pt-4"
                    src={ post.cover?.external?.url || 'https://res.cloudinary.com/tacafrica/image/upload/v1657884296/my_folder/fq0rkbyibtd4heb2bjom.png'} alt="blog" />
                <div className="p-4">
                    <h1 className="mb-2 text-lg text-center font-medium text-gray-900">
                        <Text text={ post.properties.Name.title} />
                    </h1>
                    <p className="mb-6 text-sm tracking-wide h-[160px] text-center overflow-hidden text-gray-700">
                        <Text text={post.properties.excerpt.rich_text} />
                    </p>
                    <div className='block text-center'>
                        <Button center text={'read more'} color={'bg-main_blue'} />
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}
