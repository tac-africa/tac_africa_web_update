/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import VideoComp from './videoPlayer/video';
import Link from 'next/link';
import FormModal from './formModal';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import { ConditionalLinks } from './ConditionalLinks';
import { CardWithDetails } from './cards/CardWithDetails';
import { data } from '../pages/api/latestNewsData';
import CarouselCardWithDetails from './carousel/carouselCardWithDetails';

type PdfType = {
    children: React.ReactNode;
    pdfs: string;
}


export default function LatestNews( {posts} : any) { // fix any type


  const [modalShow, setModalShow] = useState(false);
  const [PDF, setPDF] = useState('');


  const PDFcomp = ({ children, pdfs } : PdfType ) => {
  
  
    return (
      <>
        <FormModal
          PDF={PDF}
          setPDF={setPDF}
          modalShow={modalShow}
          setModalShow={setModalShow}
        />
        <a
          className="inline-flex items-center cursor-pointer text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            setModalShow(!modalShow);
            setPDF(pdfs);
          }}
        >
          {children}
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </>
    );
  };


  const img = 'https://res.cloudinary.com/tacafrica/image/upload/v1657885404/3_owsjvl.jpg'

  return (
    <div className="w-full bg-grey_main">

      <FormModal
          PDF={PDF}
          setPDF={setPDF}
          modalShow={modalShow}
          setModalShow={setModalShow}
        />

      <div className={` pt-12 pb-20 mx-auto my-0 xl:px-12`}>
        <div className="flex justify-Center items-center  py-4 mx-auto capitalize">
          <h2 className="text-black mx-auto pt-1.5 font-bold text-4xl">
            {'Our Latest '}
            <span className="text-primary font-bold text-4xl ">
              {'News Updates'}
            </span>
          </h2>
        </div>
        <p className='text-center text-grey_light'>Browse through latest happenings and events.</p>
        <div className="pl-4 m-4 flex-wrap items-stretch grow">
          <CarouselCardWithDetails posts={posts} />
        </div>
      </div>
    </div>
  );
}