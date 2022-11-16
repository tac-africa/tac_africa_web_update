/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { CardWithDetails } from "../cards/CardWithDetails";
import Slider from "react-slick";

export const databaseId: string = process.env.NOTION_BLOG_DATABASE_ID || ""

const CarouselCardWithDetails = ({ posts, path } : any) => {

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
    <div className="w-full ">
      <div className=" md:pt-12 pb-20 mx-auto my-0 xl:px-12 ">
        <div className="mx:pl-4 pb-8 ">
        <Slider {...settings} className='flex '>
            {posts.map( (post : any) => (
                <CardWithDetails post={post} path={path} />
            ) )}
        </Slider>
        </div>
      </div>
    </div>
  );
};



export default CarouselCardWithDetails;