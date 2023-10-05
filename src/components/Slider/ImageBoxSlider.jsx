import React from 'react'
import Slider from "react-slick";
import ImageBox from '../ImageBox';
import Section from '../Section';

export default function ImageBoxSlider() {
  const data = [
    {
      src:'/images/product1.svg',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product2.svg',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product3.svg',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product4.svg',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product5.svg',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product6.svg',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product1.svg',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product2.svg',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product3.svg',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product4.svg',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product5.svg',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product6.svg',
      href:'/', 
      alt:'Product',
    }
  ]
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "7%",
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <Slider {...settings} className='cs-gap-24'>
      {data.map((item, index)=> (
        <Section key={index}>
          <ImageBox src={item.src} href={item.href} alt={item.alt}/>
        </Section>
      ))}
    </Slider>
  )
}
