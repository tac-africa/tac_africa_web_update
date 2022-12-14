/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from 'next/link';

export default function LandingPage() {
  return (
    <section className="w-full">
      <div className="lg:h-screen">
        <div className="flex flex-col lg:flex-row-reverse  lg:h-90vh">
          <div className="flex-col  lg:w-7/12  bg-main_grey 
          "
          // xl:px-8
          >
            <div
              className='relative h-30vh w-full lg:h-90vh bg-main_grey flex items-end overflow-hidden object-cover img_landing-container'
            >
              <img alt="Technology Against Crime ideology"
                  src="/team/about_us.jpg"
                  className="object-cover"
                  style={{width: '100%', height: '100%'}} />
              <img alt="Technology Against Crime ideology"
                  src="/projects/cyber_security.jpeg"
                  className="object-cover"
                  style={{width: '100%', height: '100%'}} />
              <img alt="Technology Against Crime ideology"
                  src="/projects/drone.jpeg"
                  className="object-cover"
                  style={{width: '100%', height: '100%'}} />
              <img alt="Technology Against Crime ideology"
                  src="/team/our_team.jpg"
                  className="object-cover"
                  style={{width: '100%', height: '100%'}} />
             
            </div>
          </div>

          <div className="flex-col lg:w-5/12 xl:px-12">
            <div
              className={
                // styles.tac_header_detail,
                ' h-full flex items-center justify-center pt-8 pl-4 mr-8  2xl:mx-5'
              }
            >
              <div
                className={
                  // styles.tac_header_detail__items
                  ''
                }
              >
                <h1 className="text-4xl font-semibold leading-10 capitalize text-main_blue 2xl:text-6xl  ">
                Drone Value Chain Analytics 
                </h1>

                <h2 className="flex space-x-4 mt-4 2xl:mt-8 ">
                  <div
                    className={
                      // styles.bullet_heading
                      'font-semibold mt-0 mb-2 text-2xl 2xl:text-4xl text-main_blue border-b-4 border-main_yellow'
                    }
                    // style={{margin: '0em 0.5em 0em 0em'}}
                  >
                    Training
                  </div>
                  <div
                    className={
                      // styles.bullet_heading
                      'font-semibold mt-0 mb-2  text-2xl  2xl:text-4xl text-main_blue border-b-4 border-main_yellow'
                    }
                    // style={{margin: '0em 0.5em 0em 0em'}}
                  >
                    Systems
                  </div>
                  <div
                    className={
                      // styles.bullet_heading
                      'font-semibold mt-0 mb-2 text-2xl  2xl:text-4xl text-main_blue border-b-4 border-main_yellow'
                    }
                    // style={{margin: '0em 0.5em 0em 0em'}}
                  >
                    Platforms
                  </div>
                </h2>

                <p className=" mt-4 2xl:mt-8  text-main_blue xl:text-base 2xl:text-3xl 2xl:leading-11 xl:mb-12  ">
                Unmanned Aerial Vehicles (UAVs), more commonly referred to as Drones are becoming increasingly popular due to the perilous times we live in. Law enforcement agencies are constantly on the look out for emerging technologies in order to achieve their mission more effectively.
                {/* These unmanned and autonomous systems present a myriad of opportunities to address challenges faced by law enforcement and ultimately plays an important role in policing smart cities in Africa and the world at large.                 
                Welcome to TAC Africa where we leverage on Drones and Counter Drones technology in a bid to combat crime; we remain on the leading edge of the technological curve as we delve into thorough research on how they can successfully be  integrated into the system */}
                </p>

                <Link href={'/aboutUs'}>
                    <button
                      type="button"
                      className="text-blue-700 hover:text-white hover:bg-blue-700 border focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Learn More
                    </button>
                </Link>
                <Link href={'/newsletters'}>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Discover
                    </button>
                </Link>
              </div>
            </div>
          </div>

          {/* <Col  xs={{order: 'first'}} lg={{span: 7, order: 'last'}} className={styles.header_icon__container} >
                <Col md={10} className={styles.header_icon} >
                <span style={{boxSizing:'border-box',display:'block',overflow:'hidden',width:'initial',height:'initial',background:'none',opacity:'1',border:'0',margin:'0',padding:'0',position:'absolute',top:'0',left:'0',bottom:'0',right:'0'}}><img alt="Technology Against Crime ideology" src="/tac-icon.svg" decoding="async" data-nimg="fill" className="image" style={{position:'absolute',top:'0',left:'0',bottom:'0',right:'0',boxSizing:'border-box',padding:'0',border:'none',margin:'auto',display:'block',width:'0',height:'0',minWidth:'100%',maxWidth:'100%',minHeight:'100%',maxHeight:'100%'}} sizes="100vw" srcSet="/tac-icon.svg 640w, /tac-icon.svg 750w, /tac-icon.svg 828w, /tac-icon.svg 1080w, /tac-icon.svg 1200w, /tac-icon.svg 1920w, /tac-icon.svg 2048w, /tac-icon.svg 3840w" /><noscript><img alt="Technology Against Crime ideology" sizes="100vw" srcSet="/tac-icon.svg 640w, /tac-icon.svg 750w, /tac-icon.svg 828w, /tac-icon.svg 1080w, /tac-icon.svg 1200w, /tac-icon.svg 1920w, /tac-icon.svg 2048w, /tac-icon.svg 3840w" src="/tac-icon.svg" decoding="async" data-nimg="fill" style={{position:'absolute',top:'0',left:'0',bottom:'0',right:'0',boxSizing:'border-box',padding:'0',border:'none',margin:'auto',display:'block',width:'0',height:'0',minWidth:'100%',maxWidth:'100%',minHeight:'100%',maxHeight:'100%',}} className="image" loading="lazy"/></noscript></span>
                        
                </Col>
            </Col> */}
        </div>
      </div>
    </section>
  );
}