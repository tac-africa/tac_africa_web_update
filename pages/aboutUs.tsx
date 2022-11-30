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
                    <p>TAC NGO AFRICA was born out of an International Forum on Technologies, a high level meeting dedicated to “Technology for a Safer world. The first two editions were held in Lyon France, in April 2013 and April 2016 respectively under the patronage of the Ministry of Interior and INTERPOL.
                    </p>
                    <p>  
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
                            <div className='h-[4rem] bg-white rounded-md w-10/12 mx-auto absolute bottom-0 translate-y-1/2 translate-x-[10%]  '></div>
                    </div>
                    <div className="w-full rounded shadow-2xl relative ">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1657885301/my_folder/zdjeexh3kdlp9yb77srz.jpg"
                            alt="image"
                            className='h-full object-cover object-center'
                            />
                            <div className='h-[4rem] bg-white rounded-md w-10/12 mx-auto absolute bottom-0 translate-y-1/2 translate-x-[10%]  '></div>
                    </div>
                    <div className="w-full rounded shadow-2xl relative ">
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1667746391/uav_z9yprr.jpg"
                            alt="image"
                            className='h-full object-cover object-center'
                            />
                            <div className='h-[4rem] bg-white rounded-md w-10/12 mx-auto absolute bottom-0 translate-y-1/2 translate-x-[10%] '></div>
                    </div>
                </div>
                <div className='my-16 space-y-4'>
                    <div className='tracking-wide text-gray-700 space-y-4'>
                        <p className=''>Law enforcement officials today are facing a challenging and demanding operating environment. As society is increasingly connected and the world becoming borderless, technologies can help law enforcement to prevent, detect and investigate more efficiently, but at the same time, they also open up possibilities for criminals. Technology Against Crime believes that its vision of a safer continent is possible through a multi-stake holder approach to innovation in policing.
                        </p>
                        <p>
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
                                alt="image"/>
                        </div>
                        <div className='space-y-6'>
                            <p>
                            Dr. Jerry Akubo founded TAC Africa as a futurist oriented, Law Enforcement Centric NGO, borne out of an International Forum on Technologies – a high level meeting dedicated to Technologies for a Safer World, co-organized by INTERPOL and the Ministry of Interior in Lyon, France in 2013.
                            </p>
                            <Button text={'Visit Linkedin Profile'} textColor={'text-main_blue'} 
                            borderColor={'border-main_blue'} color={'bg-white'} border />
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
        <div className='mt-40 mb-20'>
            <div className='w-10/12 lg:w-8/12 mx-auto'>
                <h2 className='text-center my-10 flex justify-center '><hr className='hidden lg:block w-4/12 my-auto h-[2px] bg-gray-200 border-none mr-8' /> Scientific Committe <hr className='hidden lg:block w-4/12 my-auto h-[2px] bg-gray-200 border-none ml-8' /></h2>
            </div>
            <div className='w-10/12 lg:w-8/12 mx-auto'>
                <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-8 lg:grid lg:grid-cols-3">
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="image"/>
                            <div className='h-[5rem] bg-white text-center'>
                                <h3>name</h3>
                                <p>description</p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="image"/>
                            <div className='h-[5rem] bg-white text-center'>
                                <h3>name</h3>
                                <p>description</p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="image"/>
                            <div className='h-[5rem] bg-white text-center'>
                                <h3>name</h3>
                                <p>description</p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="image"/>
                            <div className='h-[5rem] bg-white text-center'>
                                <h3>name</h3>
                                <p>description</p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="image"/>
                            <div className='h-[5rem] bg-white text-center'>
                                <h3>name</h3>
                                <p>description</p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="image"/>
                            <div className='h-[5rem] bg-white text-center'>
                                <h3>name</h3>
                                <p>description</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='my-40'>
            <div className='w-10/12 lg:w-8/12 mx-auto'>
            <h2 className='text-center my-10 flex justify-center '><hr className='hidden lg:block w-4/12 my-auto h-[2px] bg-gray-200 border-none mr-8' /> Secretariat <hr className='hidden lg:block w-4/12 my-auto h-[2px] bg-gray-200 border-none ml-8' /></h2>
            </div>
            <div className='w-10/12 lg:w-8/12 mx-auto'>
                <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-8 lg:grid lg:grid-cols-3">
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="image"/>
                            <div className='h-[5rem] bg-white text-center'>
                                <h3>name</h3>
                                <p>description</p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="image"/>
                            <div className='h-[5rem] bg-white text-center'>
                                <h3>name</h3>
                                <p>description</p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="image"/>
                            <div className='h-[5rem] bg-white text-center'>
                                <h3>name</h3>
                                <p>description</p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="image"/>
                            <div className='h-[5rem] bg-white text-center'>
                                <h3>name</h3>
                                <p>description</p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="image"/>
                            <div className='h-[5rem] bg-white text-center'>
                                <h3>name</h3>
                                <p>description</p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="image"/>
                            <div className='h-[5rem] bg-white text-center'>
                                <h3>name</h3>
                                <p>description</p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="image"/>
                            <div className='h-[5rem] bg-white text-center'>
                                <h3>name</h3>
                                <p>description</p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="image"/>
                            <div className='h-[5rem] bg-white text-center'>
                                <h3>name</h3>
                                <p>description</p>
                            </div>
                    </div>
                    <div className="w-full rounded shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                            alt="image"/>
                            <div className='h-[5rem] bg-white text-center'>
                                <h3>name</h3>
                                <p>description</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
