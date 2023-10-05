import { Icon } from '@iconify/react';
import React from 'react'
import Slider from "react-slick";
import Post from '../Post';
import Section from '../Section';

export default function BlogSlider({sliderItemBg, sliderItemVariant}) {
  const data = [
    {
      href:'/blog/blog-details',
      src:'/images/blog1.jpeg',
      title:'How to mint an NFT?', 
      subtitle:'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat.',
    },
    {
      href:'/blog/blog-details',
      src:'/images/blog2.jpeg',
      title:'What is NFTs minting?', 
      subtitle:'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat.',
    },
    {
      href:'/blog/blog-details',
      src:'/images/blog3.jpeg',
      title:'How can I obtain NFTs?', 
      subtitle:'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat.',
    },
    {
      href:'/blog/blog-details',
      src:'/images/blog4.jpeg',
      title:'Benefit of Minting an NFT', 
      subtitle:'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat.',
    },
    {
      href:'/blog/blog-details',
      src:'/images/blog1.jpeg',
      title:'How to mint an NFT?', 
      subtitle:'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat.',
    },
    {
      href:'/blog/blog-details',
      src:'/images/blog2.jpeg',
      title:'What is NFTs minting?', 
      subtitle:'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat.',
    },
    {
      href:'/blog/blog-details',
      src:'/images/blog3.jpeg',
      title:'How can I obtain NFTs?', 
      subtitle:'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat.',
    },
    {
      href:'/blog/blog-details',
      src:'/images/blog4.jpeg',
      title:'Benefit of Minting an NFT', 
      subtitle:'There are many variations of pass ges of Lorem Ipsum available, but the majority have suffered alterat.',
    },
  ]
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="material-symbols:chevron-left-rounded" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="material-symbols:chevron-right-rounded" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings} className='cs-gap-24 cs-awwow_style_1'>
      {data.map((item, index)=> (
        <Section key={index}>
          <Post 
            href={item.href} 
            src={item.src} 
            title={item.title} 
            subtitle={item.subtitle}
          />
        </Section>
      ))}
    </Slider>
  )
}
