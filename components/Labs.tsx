import React from 'react'
import Carousel from 'react-multi-carousel'
import Slider from 'react-slick'
import CarouselCard  from '../components/carousel/carouselCard'

export default function Labs({posts} : any ) {
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
    <div>
      <div className="flex justify-Center items-center  py-4 mx-auto capitalize">
        <h2 className="text-black mx-auto pt-1.5 font-bold text-4xl">
          {'Our Digitalized '}
          <span className="text-primary font-bold text-4xl ">
            {'Specialized Labs'}
          </span>
        </h2>
      </div>
      <p className='text-center text-grey_light'>Browse through our digitalized specialized labs.</p>
        <CarouselCard posts={posts}  />
    </div>
  )
}
