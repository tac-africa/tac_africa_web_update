import React from 'react'

export default function Donation() {
  return (
    <main>
      <div className='max-w-[800px] mx-auto'>
          <div className='mt-8'>
              <h2 className='text-2xl font-medium text-gray-900 mb-6 '>We sincerly appreciate your generous spirit! It’d go a long way</h2>
              <div className='space-y-8'>
                  <p>
                  TAC NGO AFRICA was born out of an International Forum on Technologies, a high level meeting dedicated to “Technology for a Safer world. The first two editions were held in Lyon France, in April 2013 and April 2016 respectively under the patronage of the Ministry of Interior and INTERPOL. </p>
                  
                  <p> Essentially, we are a non-governmental, bipartisan organisation, connecting law enforcement, subject matter experts, civil society to solve issues that affect our society. We work on the transformation of our law enforcement and judiciary. We make them more technologically enabled. Besides this, we solve problems through policy advocacy, research, training and capacity building and volunteering.
                  </p>
              </div>
          </div>
      </div>
      <div className='max-w-[800px] mx-auto'>
      <div className="bg-blue-600 rounded-lg h-[10rem] min-h-[14rem] mb-10 flex flex-col justify-center items-center">
                <h2 className='text-white text-3xl font-semibold w-80 text-center mb-4' >Subscribe to our newsletter</h2>
                <span className='flex flex-col justify-center lg:flex-row'>
                    <input type="text"
                            name="name"
                            placeholder='Enter your name'
                            className='rounded-lg bg-blue-600 mx-auto outline-none border-white placeholder-white mr-2 my-2' 
                            />

                    <input type="email"
                            name="Email"
                            placeholder='Enter your Email'
                            className='rounded-lg bg-blue-600 mx-auto outline-none border-white placeholder-white mr-2 my-2'
                            />
                </span>

            </div>
      </div>
    </main>
  )
}
