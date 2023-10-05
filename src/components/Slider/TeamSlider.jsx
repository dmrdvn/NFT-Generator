import { Icon } from '@iconify/react';
import React from 'react'
import Slider from "react-slick";
import Section from '../Section';
import Team from '../Team';

export default function TeamSlider({sliderItemBg, sliderItemVariant}) {
  const data = [
    {
      src:'/images/member1.png',
      name:'Jeffrey Robin', 
      designation:'UI Designer',
      facebookHref:'/',
      linkedinHref:'/',
      whatsappHref:'/'
    },
    {
      src:'/images/member2.png',
      name:'Pamela Newborn', 
      designation:'UI Designer',
      facebookHref:'/',
      linkedinHref:'/',
      whatsappHref:'/'
    },
    {
      src:'/images/member3.png',
      name:'Jeffrey Bassett', 
      designation:'UI Designer',
      facebookHref:'/',
      linkedinHref:'/',
      whatsappHref:'/'
    },
    {
      src:'/images/member4.png',
      name:'Steven S. Cook', 
      designation:'UI Designer',
      facebookHref:'/',
      linkedinHref:'/',
      whatsappHref:'/'
    },
    {
      src:'/images/member1.svg',
      name:'Diane B. Lyons', 
      designation:'Digital Marketing',
      facebookHref:'/',
      linkedinHref:'/',
      whatsappHref:'/'
    },
    {
      src:'/images/member2.svg',
      name:'Nancy Riddell', 
      designation:'UI Designer',
      facebookHref:'/',
      linkedinHref:'/',
      whatsappHref:'/'
    },
    {
      src:'/images/member3.svg',
      name:'Helen Herman', 
      designation:'Product Designer',
      facebookHref:'/',
      linkedinHref:'/',
      whatsappHref:'/'
    },
    {
      src:'/images/member4.svg',
      name:'Lindsay Baker', 
      designation:'UI Designer',
      facebookHref:'/',
      linkedinHref:'/',
      whatsappHref:'/'
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
          <Team 
            variant={sliderItemVariant}
            bgUrl={sliderItemBg}
            src={item.src}
            name={item.name}
            designation={item.designation}
            facebookHref={item.facebookHref}
            linkedinHref={item.linkedinHref}
            whatsappHref={item.whatsappHref}
          />
        </Section>
      ))}
    </Slider>
  )
}
