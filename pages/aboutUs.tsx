import React from 'react'
import Button from '../components/button/Button'

export default function aboutUs() {
  return (
        <div className='mx-auto'>
        {/* <div className='space-y-4 mb-16 '> */}
        <div className='h-[35rem]  bg-[#F8FAFC] flex flex-col justify-center items-center mb-20'>
            <div className='w-10/12 lg:w-8/12 '>
                <h2 className='font-bold mb-6'>Who We Are?</h2>
                <div className='tracking-wide text-gray-700 space-y-4'>
                    <p className='text-sm text-gray-700'>TAC NGO AFRICA was born out of an International Forum on Technologies, a high level meeting dedicated to “Technology for a Safer world. The first two editions were held in Lyon France, in April 2013 and April 2016 respectively under the patronage of the Ministry of Interior and INTERPOL.
                    </p>
                    <p className='text-sm text-gray-700'>  
                    Essentially, we are a non-governmental, bipartisan organisation, connecting law enforcement, subject matter experts, civil society to solve issues that affect our society. We work on the transformation of our law enforcement and judiciary. We make them more technologically enabled. Besides this, we solve problems through policy advocacy, research, training and capacity building and volunteering.</p>
                </div>
            </div>
            <div className='w-10/12 lg:w-8/12 mx-auto'>
                <h2 className='text-center text-2xl my-10 flex justify-center text-gray-700'><hr className='hidden lg:block w-4/12 my-auto h-[2px] bg-gray-200 border-none mr-8' /> Our Industry Partners <hr className='hidden lg:block w-4/12 my-auto h-[2px] bg-gray-200 border-none ml-8' /></h2>
            </div>
        </div>
            <div className='w-10/12 lg:w-8/12 mx-auto' >
                <div className='max-w-[30rem] mx-auto text-center  mb-12'>
                    <h2 className='text-main_blue font-bold text-2xl mb-3 tracking-wide'>An insight into what we do</h2>
                    <p className='tracking-wide text-gray-700 '>TAC NGO AFRICA was born out of an International Forum on Technologies, a high level meeting</p>
                </div>
                <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-8 lg:grid lg:grid-cols-3">
                    <div className="w-full rounded shadow-2xl relative">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1657884296/my_folder/fq0rkbyibtd4heb2bjom.png"
                            alt="image"
                            className='h-full object-cover object-center'
                            />
                            <div className='h-[4rem] flex justify-center align-center  bg-white rounded-md w-10/12 mx-auto absolute bottom-0 translate-y-1/2 translate-x-[10%]  '>
                                <p className='font-semibold text-main_blue my-auto '>
                                Investigate
                                </p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl relative ">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1657885301/my_folder/zdjeexh3kdlp9yb77srz.jpg"
                            alt="image"
                            className='h-full object-cover object-center'
                            />
                            <div className='h-[4rem] flex justify-center align-center  bg-white rounded-md w-10/12 mx-auto absolute bottom-0 translate-y-1/2 translate-x-[10%]  '>
                            <p className='font-semibold text-main_blue my-auto '>
                                Detect
                            </p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl relative ">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1667746391/uav_z9yprr.jpg"
                            alt="image"
                            className='h-full object-cover object-center'
                            />
                            <div className='h-[4rem] flex justify-center align-center  bg-white rounded-md w-10/12 mx-auto absolute bottom-0 translate-y-1/2 translate-x-[10%] '>
                            <p className='font-semibold text-main_blue my-auto '>
                                Prevent
                            </p>
                            </div>
                    </div>
                </div>
                <div className='my-16 space-y-4'>
                    <div className='tracking-wide text-gray-700 space-y-4'>
                        <p className=''>Law enforcement officials today are facing a challenging and demanding operating environment. As society is increasingly connected and the world becoming borderless, technologies can help law enforcement to prevent, detect and investigate more efficiently, but at the same time, they also open up possibilities for criminals. Technology Against Crime believes that its vision of a safer continent is possible through a multi-stake holder approach to innovation in policing.
                        </p>
                        <p className=' text-gray-700'>
                        Autonomous cars, Artificial Intelligence, robotics, drones and crypto-currencies in the dark web; these are becoming part of today’s reality, which intensifies the challenges of securing our cities, major events, borders and cyberspace.</p>
                    </div>
                </div>
            {/* </div> */}
        </div>
        {/* founder */}
        <div className='bg-[#F8FAFC]' >
            <div className='w-10/12 lg:w-8/12 mx-auto'>
            <div className='h-[30rem] flex items-center'>
                <div>
                    <div className='mb-8 '>
                        <h2 className='text-main_blue font-bold text-2xl'>Our Team</h2>
                        <p className=' font-semibold text-gray-700 '>Meet the Founder</p>
                        <hr className='hidden lg:block w-4/12 my-8 h-[2px] bg-gray-200 border-none ' />
                    </div>
                    <div className='flex flex-col lg:flex-row lg:space-x-8 '>
                        <div className="max-w-[20rem] rounded shadow-2xl ">
                            <img src="https://res.cloudinary.com/tacafrica/image/upload/v1669022868/my_folder/secretariat_images/Mask_groupdr_d0f0tn.png"
                                alt="image"
                                className='object-cover w-full shadow-custom '
                            />
                        </div>
                        <div className='space-y-6'>
                            <p className='text-sm text-gray-700'>
                            Dr. Jerry Akubo founded TAC Africa as a futurist oriented, Law Enforcement Centric NGO, borne out of an International Forum on Technologies – a high level meeting dedicated to Technologies for a Safer World, co-organized by INTERPOL and the Ministry of Interior in Lyon, France in 2013.
                            </p>
                            <a href="https://www.linkedin.com/in/ajerry/" target='_blank'>
                                <Button text={'Visit Linkedin Profile'} textColor={'text-main_blue'} 
                                borderColor={'border-main_blue'} color={'bg-white'} border />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
        <div className='mt-40 mb-20'>
            <div className='w-10/12 lg:w-8/12 mx-auto'>
                <h2 className='text-center my-10 flex justify-center '><hr className='hidden lg:block w-4/12 my-auto h-[2px] bg-gray-200 border-none mr-8' /> Scientific Committee <hr className='hidden lg:block w-4/12 my-auto h-[2px] bg-gray-200 border-none ml-8' /></h2>
            </div>
            <div className='w-10/12 lg:w-10/12 mx-auto'>
                <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-16 lg:grid lg:grid-cols-3">
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1670457150/my_folder/TACteam/brooke-tapsall_clvgmt.png"
                            alt="image"
                            className='object-cover w-full h-[400px]'
                        />
                            <div className=' bg-white p-4'>
                                <h3 className='mb-2 font-semibold text-main_blue'>Ms. Brooke Taspall</h3>
                                <p className='text-sm text-gray-700'>CEO/Founder, Drone Alert</p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1670457151/my_folder/TACteam/orville_mccalla_nub3nv.png"
                            alt="image"
                            className='object-cover w-full h-[400px]'
                        />
                            <div className=' bg-white p-4'>
                                <h3 className='mb-2 font-semibold text-main_blue'>Orville McCalla</h3>
                                <p className='text-sm text-gray-700'>CEO/President AeroStream Consulting Inc.</p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1670457151/my_folder/TACteam/Sanjana_Rathi_ojkcng.png"
                            alt="image"
                            className='object-cover w-full h-[400px]'
                        />
                            <div className=' bg-white p-4'>
                                <h3 className='mb-2 font-semibold text-main_blue'>Sanjana Rathi</h3>
                                <p className='text-sm text-gray-700'>Vice President, TAC Africa</p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1670457151/my_folder/TACteam/philip_j_ingram_nhx8sl.png"
                            alt="image"
                            className='object-cover w-full h-[400px]'
                        />
                            <div className=' bg-white p-4'>
                                <h3 className='mb-2 font-semibold text-main_blue'>philip j ingram</h3>
                                {/* <p className='text-sm text-gray-700'>description</p> */}
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1670457151/my_folder/TACteam/Professor_B.K._Alese_n8lbrd.png"
                            alt="image"
                            className='object-cover w-full h-[400px]'
                        />
                            <div className=' bg-white p-4'>
                                <h3 className='mb-2 font-semibold text-main_blue'>Professor B.K. Alese</h3>
                                {/* <p className='text-sm text-gray-700'>description</p> */}
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1670457151/my_folder/TACteam/Mr._Kelvin_Lungu_zk6vue.jpg"
                            alt="image"
                            className='object-cover w-full h-[400px]'
                        />
                            <div className=' bg-white p-4'>
                                <h3 className='mb-2 font-semibold text-main_blue'>Mr. Kelvin Lungu</h3>
                                <p className='text-sm text-gray-700'>Lecturer - University of Zambia</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='my-40'>
            <div className='w-10/12 lg:w-8/12 mx-auto'>
            <h2 className='text-center my-10 flex justify-center '><hr className='hidden lg:block w-4/12 my-auto h-[2px] bg-gray-200 border-none mr-8' /> Secretariat <hr className='hidden lg:block w-4/12 my-auto h-[2px] bg-gray-200 border-none ml-8' /></h2>
            </div>
            <div className='w-10/12 lg:w-10/12 mx-auto'>
                <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-16 lg:grid lg:grid-cols-3">
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1670457150/my_folder/TACteam/ibro_ardo1w.png"
                            alt="image"
                            className='object-cover w-full h-[400px]'
                        />
                            <div className=' bg-white p-4'>
                                <h3 className='mb-2 font-semibold text-main_blue'>IBRAHIM M. ALI</h3>
                                <p className='text-sm text-gray-700'>
                                Is an Expert in UAV/ Drone technology, he has been employed with Technology Against Crime Africa (TAC-AFRICA) for more than four years, He oversees and manages all technical operations and maintenance using his professional expertise in IT, drones, and other engineering services including networking and CCTV camera installation, etc. He obtains a Certification in Introduction to Drone, UAV/Drone Pilot 107, Drone Aerial Photogrammetry and Videography, Drone GIS, and 3D Mapping Techniques Using Drones.
                                </p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1670849838/my_folder/TACteam/54ca6959-fd82-406f-a7f0-f8ec4ab5c906_o0vbws.jpg"
                            alt="image"
                            className='object-cover w-full h-[400px]'
                        />
                            <div className=' bg-white p-4'>
                                <h3 className='mb-2 font-semibold text-main_blue'>Salau Umar-Mukhtar</h3>
                                <p className='text-sm text-gray-700'>
                                Is a graphics designer and also a front-end web developer in practice. He is proficient with multiple visual programs and familiar with layouts and graphic fundamentals. Umar’s responsibility is to assist in completing all types of work that are related to graphic design and website content. And also managing the company’s social media
                                </p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1670457151/my_folder/TACteam/WhatsApp_Image_2022-07-07_at_12.37.30_PM_chsmbq.jpg"
                            alt="image"
                            className='object-cover w-full h-[400px]'
                        />
                            <div className=' bg-white p-4'>
                                <h3 className='mb-2 font-semibold text-main_blue'>EKAJI ONAH</h3>
                                <p className='text-sm text-gray-700'>
                                is an experienced web/software developer with knowledge of various programming
                                and version control systems. He is responsible for developing and maintaining the TAC Africa
                                website and other in-house software.
                                </p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1670847761/my_folder/TACteam/Snapchat-1195055322_a2n4hg.jpg"
                            alt="image"
                            className='object-cover w-full h-[400px]'
                        />
                            <div className=' bg-white p-4'>
                                <h3 className='mb-2 font-semibold text-main_blue'>JAHSWILL EMMANUEL OMASIO</h3>
                                <p className='text-sm text-gray-700'>
                                Is Enterprising 3d Visual Manager in tune with current
                                trends especially in executive ideations. Adept at working well under pressure to ensure that
                                engaging displays are designed and fully completed within often tight time frames. Skilled at
                                delegating and ensuring efficient project turnaround.
                                </p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1670585496/my_folder/TACteam/IMG20221207155902_iv3you.jpg"
                            alt="image"
                            className='object-cover w-full h-[400px]'
                        />
                            <div className=' bg-white p-4'>
                                <h3 className='mb-2 font-semibold text-main_blue'>ENGR. INNOCENT OCHIGBO</h3>
                                <p className='text-sm text-gray-700'>
                                A Researcher and a Drone Flight Pilot, Technology Against
                                Crime for Africa (TAC Africa), with a Higher National Diploma in Electronics and
                                Telecommunication, Kaduna polytechnic. Own certifications on Introduction to Drone, Airdata
                                Certification, 3D mapping Techniques using Drones and GIS On drone. A drone enthusiast,
                                extremely motivated and organized, With a firsthand experience on drones, a team player and loves
                                challenge, time management, creative, fast learner, highly motivated, and a problem solve
                                </p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1670585492/my_folder/TACteam/IMG20221207160436_osmdxe.jpg"
                            alt="image"
                            className='object-cover w-full h-[400px]'
                            />
                            <div className=' bg-white p-4'>
                                <h3 className='mb-2 font-semibold text-main_blue'>ANDOR EMMANUEL IKPATEM</h3>
                                <p className='text-sm text-gray-700'>
                                A critical and analytic researcher on Africa Drone & Data
                                Academy (ADDA) & UNICEF collaborations, TAC Africa Drone Schema for IRPAS, Drone &
                                Counter-Drone Measures, UAVs, UAS, C-UAS, Drone Alliance & Drone Corridors in Africa and the
                                world at large. Works with the TAC Africa Drone and Counter-Drone Team under IRPAS in
                                Calibrating and Navigating the Drones in the Lab. Admin manager at the TAC-AFRICA Community
                                Hub. Administrative Data Processor, ICT and Info-Media Consultant, Web Developer, Content
                                Creator and Creative Director.
                                </p>
                            </div>
                    </div>
                    {/* <div className="w-full rounded shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="image"
                            className='object-cover w-full h-[400px]'
                        />
                            <div className=' bg-white p-4'>
                                <h3 className='mb-2 font-semibold text-main_blue'>name</h3>
                                <p className='text-sm text-gray-700'>description</p>
                            </div>
                    </div> */}
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1670589531/my_folder/TACteam/IMG_20221209_131706_fv5bif.jpg"
                            alt="image"
                            className='object-cover w-full h-[400px]'
                        />
                            <div className=' bg-white p-4'>
                                <h3 className='mb-2 font-semibold text-main_blue'>OIZA GOODNESS EMMANUEL</h3>
                                <p className='text-sm text-gray-700'>
                                is a content writer and social media manager. With a degree in
                                International relations and Diplomacy, she is keen, passionate and reliable with remarkable
                                organization and communication skills. She reads over drafts, generates content and determines
                                which ones make the final cut for publication. She also cross references citations in content to ensure
                                accuracy and formats the final product in a way consistent with the rest of the content on our blog
                                and pages.
                                </p>
                            </div>
                    </div>
                    {/* <div className="w-full rounded shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="image"
                            className='object-cover w-full h-[400px]'
                        />
                            <div className=' bg-white p-4'>
                                <h3 className='mb-2 font-semibold text-main_blue'>name</h3>
                                <p className='text-sm text-gray-700'>description</p>
                            </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}
