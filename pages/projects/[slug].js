import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { getDatabase, getSingleBlogPostBySlug } from "../../lib/notion";
import Slider from "react-slick";
import Button from '../../components/button/Button';


const droneItems = [
  {
    iconLink: '/icons/1.png',
    title: 'Drone Education & Research',
    preview: 'Are you a drone pilot/instructor, are you open to expansion and strategic collaboration in essentially...',
    link: ''
  },
  {
    iconLink: '/icons/2.png',
    title: 'Drone Education & Research',
    preview: 'Are you a drone pilot/instructor, are you open to expansion and strategic collaboration in essentially...',
    link: ''
  },
  {
    iconLink: '/icons/3.png',
    title: 'Drone Education & Research',
    preview: 'Are you a drone pilot/instructor, are you open to expansion and strategic collaboration in essentially...',
    link: ''
  },
  {
    iconLink: '/icons/1.png',
    title: 'Drone Education & Research',
    preview: 'Are you a drone pilot/instructor, are you open to expansion and strategic collaboration in essentially...',
    link: ''
  },
]



const databaseId = process.env.NOTION_BLOG_DATABASE_ID || ""

const CodeBlock = ({ language, codestring }) => {
return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag="div">
        {codestring}
    </SyntaxHighlighter>
)
}
const Post = ({ post }) => {
  if(!post) return <h1>No posts</h1>
  return (
    <div>

<div>

<div className='w-10/12 mx-auto'>
    <div className='h-[28rem] bg-slate-600 rounded-md relative mt-8 mb-28'>
      <img src={ 'https://res.cloudinary.com/tacafrica/image/upload/v1667746391/uav_z9yprr.jpg'} alt="project" 
          className=' h-full w-full object-cover  rounded-lg'
          />
      <div className='h-[12rem] bg-white rounded-md w-8/12 mx-auto absolute bottom-0 translate-y-1/2 translate-x-1/4 '>
        <div className='flex justify-center items-center  h-full'>
          <h2 className='font-semibold text-lg mb-6 text-center text-blue-700 '>{post.metadata.title}</h2>
        </div>
      </div>
    </div>
    <div className=''>
      <h2 className='font-semibold text-lg mb-6'>{post.metadata.title}</h2>


      <section className=''> 
          <h2>{post.metadata.title}</h2>
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

      {/* <p className='pb-4'>
        The TAC AFRICA virtual Drone and Counter Drone lab creates a platform to assemble global subject matter experts from a multidisciplinary background that include academia, law enforcement agencies to synergies through a dedicated online knowledge platform that will raise critical issues which will promote the institutionalization of drone best practices 
      </p>
      <p className='pb-4'>
        in Africa. The key outputs of this virtual lab, will include the production of a global compendium of drone-related thematic areas that will be published in the public domain for regional and international drone and robotics communities.
      </p> */}
    </div>
</div>
{/* <div></div> */}
    <div className="flex flex-col mx-auto  bg-[#f6f6f6]" >
        <div  className="flex flex-col lg:flex-row w-full m-auto "  >
          <div className="grid grid-cols-2 gap-2 grid-rows-5 w-full lg:mr-4 lg:w-4/12 rounded-xl overflow-hidden h-[25rem] m-auto ">
            <div className=" row-span-2 rounded-lg">
              <img src={ 'https://res.cloudinary.com/tacafrica/image/upload/v1659626896/my_folder/internationaldayagainsttourture2022/IMG_7705_pvrsrr.jpg'} alt="project" 
              className=' h-full w-full object-cover  rounded-lg'
              />
            </div>
            <div className=" bg-blue-700 row-span-2 mt-4 rounded-lg">
            
            </div>
            <div className=" bg-blue-700 row-span-3 mb-4 rounded-lg">
            {/* <img src={ 'https://res.cloudinary.com/tacafrica/image/upload/v1660216602/my_folder/youth%20skill%20day/IMG-20220718-WA0017_axnea4.jpg'} alt="project" 
              className=' h-full w-full object-cover ' */}
              {/* /> */}
            </div>
            <div className="row-span-3 rounded-lg">
            <img src={ 'https://res.cloudinary.com/tacafrica/image/upload/v1657883873/my_folder/projects/ageqfoxdysye0qngyp2h.jpg'} alt="project" 
              className=' h-full w-full object-cover rounded-lg'
              />
            </div>
          </div>
{/*  */}
          <div className=" mx-auto" >
            <div className=' lg:h-[70%] mt-6 lg:my-auto mx-auto'>
              <div className='lg:my-8 '>
                <h2 className='text-2xl font-semibold mb-4'>Our work in this space</h2>
              </div>
              <div className='flex flex-col space-y-6 mt-6 md:mt-0'>
              <ul className='space-y-4 text-grayText'>
                  <div className='m-0 p-0 inline' >
                      <img className='inline w-2  mr-1' src="/projects/e.jpg" alt="" /><li className='inline-block'> Create awareness of issues of Cyber security and personal data protection.</li>
                  </div>
                  <div className='m-0 p-0'>
                      <img className='inline w-2  mr-1' src="/projects/e.jpg" alt="" /><li className='inline-block'>Create employment opportunities for digital jobs across the country.</li>
                  </div>
                  <div className='m-0 p-0'>
                      <img className='inline w-2  mr-1' src="/projects/e.jpg" alt="" /><li className='inline-block'> Develop more community Tech Hubs & expand to the six LGAs.</li>
                  </div>
                  <div className='m-0 p-0'>
                      <img className='inline w-2  mr-1' src="/projects/e.jpg" alt="" /><li className='inline-block'> Provide an enabling environment for productivity and connectivity.</li>
                  </div>
              </ul>
              </div>
            </div>
          
          </div>
        </div>
          <section className='flex flex-col'>
              <div className=''>
                <CarouselCard />
              </div>
          </section>
      </div>

</div>   
    </div>
  );
};





export const CarouselCard = ({ posts , path }) =>{

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
              {droneItems.map(({iconLink, title, preview, link}) => (
                  <div key={''} className="p-4 flex items-stretch" style={{display: 'flex: 1 1 auto'}}> 
                  <div className="border-2 border-gray-200 rounded-lg w-full p-8 bg-white ">
                      <img className="object-cover object-center h-8 w-8 mb-2"
                          src={ iconLink || 'https://res.cloudinary.com/tacafrica/image/upload/v1657884296/my_folder/fq0rkbyibtd4heb2bjom.png'} alt="blog" />
                      <div className="p-">
                          <h1 className="mb-2 text-lg font-semibold w-40 text-gray-900">
                            {title}
                          </h1>
                          <p className="mb-6 text-sm tracking-wide text-gray-700">
                              {preview}
                          </p>
                          <div className='block t'>
                              <Button text={'Explore More'} color={'bg-black'} />
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
  const posts = await getDatabase(databaseId, 'projects')
  const paths = posts.map((post) => ({ params: {slug:`${post.properties.Slug.formula.string}`} }));
  return {
    paths,
    fallback: "blocking",
  };
};

export default Post;