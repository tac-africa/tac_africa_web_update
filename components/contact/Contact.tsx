/* eslint-disable react/jsx-key */
import React from 'react'
import Button from '../button/Button'
import Map from '../map/map'
import { BsTelephone } from 'react-icons/bs';
import { CiLocationOn, CiMail } from 'react-icons/ci';
// CiLocationOn


export default function Contact() {
   const myENV = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY
  return (
    <>

<div className="bg-[#F8FAFC]">
    <section id='contact' className=" w-10/12 lg:w-10/12 mx-auto py-20 lg:py-[120px] overflow-hidden relative z-10">

    <div className="mx-auto w-10/12 text-center mb-12 lg:w-7/12">
          <h2 className=" mx-auto pt-1.5 font-bold text-6xl text-center">
            <span className="text-primary font-bold text-3xl "> Contact Us</span>{' '}
          </h2>
          <p className="text-sm lg:text-lg tracking-wide text-gray-700">
            If you have any questions please do not hesitate to reach out
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-4 mb-10'>
            <div className='h-[10rem] border rounded-xl bg-white flex flex-col justify-center items-center '>
                <BsTelephone />
                <p className='text-sm px-6 mt-4 text-center tracking-wide text-gray-700'>phone: +234 706 224 7581</p>
            </div>
            <div className='h-[10rem] border rounded-xl bg-white flex flex-col justify-center items-center'>
                <CiLocationOn />
                <p className='text-sm px-6 mt-4 text-center tracking-wide text-gray-700'>TAC HQ: Plot 239 P.O.W Mafemi Crescent, Besides Daily Trust Newspapers, Utako District, Abuja, Nigeria. 900112</p>
            </div>
            <div className='h-[10rem] border rounded-xl bg-white flex flex-col justify-center items-center'>
                <CiMail />
                <p className='text-sm px-6 mt-4 text-center tracking-wide text-gray-700'>email: secretariat@tacafrica.org</p>
            </div>
        </div>

    <div className="container">
        <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 xl:w-6/12 ">
                <div className="max-w-[570px]  mb-12 lg:mb-0">
                    <Map />
                </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-6/12  ">
                <div className="bg-white relative p-8 sm:p-12 shadow-lg h-[30rem] rounded-r-lg mr- 12 -z-10 ">
                <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value={myENV} />
                <div className="grid grid-cols-2 gap-4">
        <div className="form-group mb-6">
            <input type="text" className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-grey_mid bg-clip-padding
            border border-solid border-gray-300
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
            aria-describedby="emailHelp123" placeholder="First name" />
        </div>
        <div className="form-group mb-6">
            <input type="text" className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-grey_mid bg-clip-padding
            border border-solid border-gray-300
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
            aria-describedby="emailHelp124" placeholder="Last name" />
        </div>
        </div>
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="
                            w-full
                            py-3
                            px-[14px]
                            bg-grey_mid
                            text-body-color text-base
                            border border-[f0f0f0]
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            "
                            />
                    </div>
                    <div className="mb-6">
                        <textarea
                            rows={6}
                            placeholder="Your Message"
                            className="
                            w-full
                            py-3
                            px-[14px]
                            text-body-color text-base
                            border border-[#f0f0f0]
                            bg-grey_mid
                            resize-none
                            outline-none
                            focus-visible:shadow-none
                            focus:border-primary
                            "
                            ></textarea>
                    </div>
                    <input type="hidden" name="redirect" value="/aboutus"></input>
                    <div className='flex' >
                        <Button color='bg-blue-700' type="submit" text={'Send Message'} />
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
    </section>
</div>
    </>
  )
}