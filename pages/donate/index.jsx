import React, { useState } from 'react'

// const [value, setValue] = useState('') 

// const handleValueChange = (e: any) => {
//   e.preventDefault
//   setValue(e.target.value)
// }

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
                <h2 className='text-white text-3xl font-semibold w-80 text-center mb-4' >Please Enter Amount</h2>
                <div className='inline-grid items-center justify-items-start'>
                    {/* <input type="text"
                            name="name"
                            placeholder='0.00'
                            className='rounded-lg bg-blue-600 text-4xl mx-auto outline-none border-blue-600 flex flex-shrink w-[100px] placeholder-white mr-2 my-2' 
                            /> */}
                                <div
      className="auto-grow-input"
      style={{
        display: 'inline-grid',
        alignItems: 'center',
        justifyItems: 'start',
        padding: 8,
        border: '1px solid #ccc',
        borderRadius: 4,
      }}
    >
      <input
        // value={value}
        // onChange={(e) => handleValueChange(e)}
        style={{
          // gridArea: '1 / 1 / 2 / 2',
          width: '100%',
          padding: 0,
          border: 'none',
        }}
      />
      <span
        style={{
          gridArea: '1 / 1 / 2 / 2',
          // border: '1px solid red' ,
          height: '0px',
          visibility: 'hidden',
        }}
      >
        {/* {value} */}
      </span>
    </div>
                </div>

            </div>
      </div>
    </main>
  )
}
