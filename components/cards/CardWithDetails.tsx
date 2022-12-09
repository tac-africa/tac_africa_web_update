import React from 'react'
import Link from 'next/link'
import { Text } from '../../pages/newsletters/[id]';


export const CardWithDetails = ( {post, path } : any ) => {

  return (
    <div key={ post.properties.Name.title } className="p-4 flex items-stretch h-[32rem] " style={{display: 'flex: 1 1 auto'}}> {/*md:w-6/12 lg:w-1/3*/}
        <div className=" rounded-lg w-full p-4 bg-white ">
            <img className="object-cover object-center w-full lg:h-48 md:h-36"
                src={ 
                    post.cover?.external?.url || 
                    'https://res.cloudinary.com/tacafrica/image/upload/v1657884296/my_folder/fq0rkbyibtd4heb2bjom.png' } 
                    alt="blog" 
                />
                <div className="pt-4 flex flex-col justify-between h-[16rem]">
                    <div className="h-full">
                        <span
                            className="inline-block p-2 mb-2 text-xs font-medium tracking-widest text-green-800 bg-green-200 rounded">{"category"}
                        </span>
                        <h1 className="mb-2 text-sm font-medium text-gray-900">
                            <Text text={post.properties.Name.title} />
                        </h1>
                        {/* <Text text={title} /> */}
                        <p className="mb-1 text-sm tracking-wide text-gray-700">
                            <Text text={post.properties.excerpt.rich_text} />
                        </p>
                    </div>
                    <div className="flex items-center mt-0">
                        <Link href={`/${path}/${post.properties.Slug.formula.string}`} className="inline-flex items-center text-indigo-500 cursor-pointer md:mb-2 lg:mb-0">Read
                            More

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
        </div>
    </div>
  )
}
