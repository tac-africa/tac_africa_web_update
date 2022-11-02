import React from 'react'
import Link from 'next/link'
import { Text } from '../../pages/news/[id]'

type CardProps = {
    title : string;
    excerpt : string;
    image: string;
    link: string;
}



export const Card = ({ post }: any ) => {
    console.log(post)
  return (
    <Link href={`/${post.id}`} >
        <div key={''} className="p-4 flex items-stretch h-[25rem] " style={{display: 'flex: 1 1 auto'}}> {/*md:w-6/12 lg:w-1/3*/}
            <div className="border-2 border-gray-200 rounded-lg w-full  ">
                <img className="object-cover object-center w-full lg:h-48 md:h-36"
                    src={ post.cover?.external.url } alt="blog" />
                <div className="p-6">
                    <Text text={post.properties.Name.title} />
                    <h1 className="mb-2 text-lg font-medium text-gray-900">
                        <Text text={ post.properties.Name.title} />
                    </h1>
                    <p className="mb-1 text-sm tracking-wide text-gray-700">
                        <Text text={post.properties.excerpt.rich_text} />
                    </p>
                </div>
            </div>
        </div>
    </Link>
  )
}
