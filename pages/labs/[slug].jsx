import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { getDatabase, getSingleBlogPostBySlug } from "../../lib/notion";
import Slider from "react-slick";
import Button from '../../components/button/Button';
import { ResearchWorks } from '../api/researchWork';
import Link from 'next/link';



const databaseId = process.env.NOTION_BLOG_DATABASE_ID || ""

const CodeBlock = ({ language, codestring }) => {
return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag="div">
        {codestring}
    </SyntaxHighlighter>
)
}

const Post = ({ post }) => {

  const newList = []

  ResearchWorks.filter(item => {
    if(item.id === post.metadata.id) {
      newList.push(item)
    }
  })

  if(!post) return <h1>No posts</h1>
  return (
    <div>

<div>

<div className='w-10/12 mx-auto'>
    <div className='h-[28rem] bg-slate-600 rounded-md relative mt-8 mb-28'>
      <img src={ post.response.results[0].cover.external.url || 'https://res.cloudinary.com/tacafrica/image/upload/v1667746391/uav_z9yprr.jpg'} alt="project" 
          className=' h-full w-full object-cover  rounded-lg'
          />
      <div className='h-[12rem] bg-white rounded-md w-8/12 mx-auto absolute bottom-0 translate-y-1/2 translate-x-1/4 shadow-custom '>
        <div className='flex justify-center items-center  h-full'>
          <h2 className='font-semibold text-3xl mb-6 text-center text-blue-700 '>{post.metadata.title}</h2>
        </div>
      </div>
    </div>
    <div className=''>
      <h2 className='font-semibold text-blue-700 uppercase text-2xl mb-6'>{'Introduction'}</h2>


      <section className='reactMarkdown' > 
          {/* <h2>{post.metadata.title}</h2> */}
        <ReactMarkdown
        components={{
            code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <CodeBlock
                codestring={String(children).replace(/\n$/, '')}
                language={match[1]}
                />
            ) : (
                <code className={className} {...props}>
                {children}
                </code>
            )
            }
        }}>{post.markdown}</ReactMarkdown>
      </section>
    </div>
</div>
{/* <div></div> */}
    <div className="flex flex-col mx-auto py-8 bg-[#f6f6f6]" >
        <div  className="flex flex-col lg:flex-row w-full m-auto "  >
          <div className="grid grid-cols-2 gap-2 grid-rows-5 w-full lg:mr-4 lg:w-5/12 rounded-xl overflow-hidden h-[35rem] px-4 py-12 m-auto ">
            
            <div className="relative overflow-hidden row-span-2 rounded-lg">
              <img src={ newList[0].images[0].link } alt="project" 
              className=' h-full w-full object-cover  rounded-lg'
              />
              <span className='absolute min-h-[40px] w-full bg-overlay bottom-0'>
                <p className='text-white ml-4 mt-3'>{ newList[0].images[0].caption }</p>
              </span>
            </div>

            <div className="relative overflow-hidden row-span-2 mt-4 rounded-lg">
                <img src={ newList[0].images[1].link }
                className=' h-full w-full object-cover ' 
                />
                <span className='absolute min-h-[40px] w-full bg-overlay bottom-0'>
                    <p className='text-white ml-4 mt-3'>{ newList[0].images[1].caption }</p>
                </span>
            </div>

            <div className="relative overflow-hidden row-span-3 mb-4 rounded-lg">
            <img src={ newList[0].images[2].link } alt="project" 
              className=' h-full w-full object-cover ' 
              />
              <span className='absolute min-h-[40px] w-full bg-overlay bottom-0'>
                <p className='text-white ml-4 mt-3'>{ newList[0].images[2].caption }</p>
              </span>
            </div>

            <div className="relative overflow-hidden row-span-3 rounded-lg">
            <img src={ newList[0].images[3].link } alt="project" 
              className=' h-full w-full object-cover rounded-lg'
              />
              <span className='absolute min-h-[40px] w-full bg-overlay bottom-0'>
                <p className='text-white ml-4 mt-3'>{ newList[0].images[3].caption }</p>
              </span>
            </div>
        </div>
{/*  */}
          <div className=" m-auto p-4 lg:w-5/12 " >
            <div className=' lg:min-h-[700px] mt-6 lg:my-auto mx-auto'>
              <div className='lg:my-8 '>
                <h2 className='text-2xl font-semibold mb-4 text-blue-700'>{ newList[0].title || `Our work in this space`}</h2>
              </div>
              <div className='flex flex-col space-y-6 mt-6 md:mt-0'>
                <ul className='space-y-4 text-grayText'>
                  {
                    newList[0].ourWork.map((ourWork) => (
                        <div className='m-0 p-0' >
                            <img className='inline w-2  mr-1' src="/projects/e.jpg" alt="" />
                            <li className='inline'>{ourWork}</li>
                        </div>
                      ))
                  }
                </ul>
              </div>
              <Link href={newList[0].externalLink}>
                <Button backgroundColor={'bg-blue-700'} color={'text-white'} text={'read more'} />
              </Link>
            </div>
          
          </div>
        </div>
          <section className='flex flex-col'>
              <div className=''>
                <CarouselCard newList={newList} />
              </div>
          </section>
      </div>

</div>   
    </div>
  );
};





export const CarouselCard = ({ newList }) =>{

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1536,
          settings: {
            slidesToShow: 3,
            // slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            // slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            // slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div className="w-full bg-white">
        <div className='lg:w-4/12 mx-auto text-center py-20'>
          <h2 className='font-semibold text-xl w-72 mx-auto mb-3'>Understanding Drone Use And Applications</h2>
          <p className='text-slate-600'>You may submit a new submission or resubmission here. Your submission must be carefully formatted.</p>
        </div>
      <div className="lg:pt-12  mx-auto my-0 xl:px-12  overflow-hidden bg-fixed bg-center bg-cover bg-drone_swam">
        <div className="mx:pl-4 pl-4 m-4 pb-8 " >
          <Slider {...settings} className='flex ' >
              {newList[0].items.map(({ title, except , link, iconLink }) => (
                  <div key={''} className="p-4 flex items-stretch" style={{display: 'flex: 1 1 auto'}}> 
                  <div className="border-2 border-gray-200 rounded-lg w-full p-8 bg-white ">
                      <img className="object-cover object-center h-8 w-8 mb-2"
                          src={iconLink} alt="blog" />
                      <div className="p-">
                          <h1 className="mb-2 text-lg font-semibold h-[60px] overflow-hidden text-gray-900">
                            {title}
                          </h1>
                          <p className="mb-6 text-sm tracking-wide text-gray-700 h-[100px] overflow-hidden">
                              { except }
                          </p>
                          <div className='block '>
                            <a href={link} target='_blank' >
                              <Button text={'Explore More'} color={'bg-black'} />
                            </a>
                          </div>
                      </div>
                  </div>
                  </div>
              ) )}
            </Slider>
        </div>
      </div>
    </div>
  );
};



export const getStaticProps = async ({ params }) => {


  const post = await getSingleBlogPostBySlug(databaseId, params.slug)
  return {
    props: {
      post,
    },
    revalidate: 60
  };
};

export const getStaticPaths = async () => {
  const posts = await getDatabase(databaseId, 'labs')
  const paths = posts.map((post) => ({ params: {slug:`${post.properties.Slug.formula.string}`} }));
  return {
    paths,
    fallback: "blocking",
  };
};

export default Post;