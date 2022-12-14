import Head from 'next/head'
import Link from 'next/link';
import { getDatabase } from '../../lib/notion';
export default function Home({posts}) {
  if(!posts) return <h1>No posts</h1>
  return (
    <div>
    {/* <Head>
      <title>{posts[0].properties.Name.title[0].plain_text}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head> */}
    <div style={{paddingTop: '5vh'}} >
      <h1 className="text-3xl text-center font-semibold tracking-wide mt-6 mb-2 capitalize ">Welcome to our Blog</h1>
     <section>
            <div className="m-4 flex flex-wrap items-stretch gro w w-10/12 mx-auto">
        {posts.map((post, i) => (
          
          <div key={i} className="p-4 md:w-6/12 lg:w-1/3 flex ">
            <div className="border-2 border-gray-200 rounded-lg">
                <img className="object-cover object-center px-4 pt-4 w-full lg:h-48 md:h-36"
                    src={
                      post.cover?.external?.url || 
                      'https://res.cloudinary.com/tacafrica/image/upload/v1657884296/my_folder/fq0rkbyibtd4heb2bjom.png' } 
                      alt="blog" />
                <div className="p-4">
                    <span
                        className="inline-block p-2 mb-2 text-xs font-medium tracking-widest text-green-800 bg-green-200 rounded">
                            {/* {post.category} */}
                    </span>
                    <h1 className="mb-2 text-sm font-medium text-gray-900">
                      {post.properties.Name.title[0].plain_text}
                    </h1>
                    <p className="mb-1 text-sm tracking-wide text-gray-700">
                        {post.properties.excerpt.rich_text[0].plain_text}
                    </p>
                    <div className="flex items-center ">
                        <Link href={`/blog/${post.properties.Slug.formula.string}`} className="inline-flex items-center text-indigo-500 cursor-pointer md:mb-2 lg:mb-0">
                          Read More
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
        ))}
      </div>
        </section>
    </div>
</div>
  )
}

const databaseId = process.env.NOTION_BLOG_DATABASE_ID || ""

export const getStaticProps = async () => {
  const data = await getDatabase(databaseId, 'blog')
  return {
    props: {
      posts: data,
    },
    revalidate: 60
  };
};