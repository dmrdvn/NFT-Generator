import React from 'react'
import Slider from "react-slick";
import ImageBoxStyle1 from '../ImageBox/ImageBoxStyle1';
import Section from '../Section';

export default function ImageBoxSliderStyle1() {
  const data = [
    {
      src:'/images/product1.png',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product2.png',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product3.png',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product4.png',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product5.png',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product6.png',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product1.png',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product2.png',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product3.png',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product4.png',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product5.png',
      href:'/', 
      alt:'Product',
    },
    {
      src:'/images/product6.png',
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
          <ImageBoxStyle1 src={item.src} href={item.href} alt={item.alt}/>
        </Section>
      ))}
    </Slider>
  )
}
