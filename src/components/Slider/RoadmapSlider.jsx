import { Icon } from '@iconify/react';
import React from 'react'
import Slider from "react-slick";
import Section from '../Section';
import CardStype2 from '../Card/CardStype2'

export default function RoadmapSlider() {
  const data = [
    {
      phase:'Faz 0', 
      title:'Launch NFT Generator',
      subtitle:'NFT Generator ilk sürümü yayınlandı. İlk sürüm ile birlikte kullanıcılar NFT oluşturabilir ve NFT’lerini öğrencileriy paylaşabilir.',
    },{
      phase:'Faz 1', 
      title:'Update v1 NFT Generator',
      subtitle:'v1 güncellemesi ile birlikte NFT Generator uygulmasına ek özellikler eklenecek.',
    },{
      phase:'Faz 2', 
      title:'Update v2 NFT Generator',
      subtitle:'v2 ile birlikte NFT Generator, kullanıcıların eğitimlerdeki başarısına göre OAT kazanabilmelerine imkan verecek.',
    },{
      phase:'Faz 3', 
      title:'Update v3 NFT Generator',
      subtitle:'v3 versiyonu ile birlikte NFT Generator son versiyonuna ulaşmış olacak. Bu versiyon ile birlikte kurumlar kendi işletmelerini platforma ekleyebilecekler. ',
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
        breakpoint: 1285,
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
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings} className='cs-gap-24 cs-awwow_style_1 cs-type1'>
      {data.map((item, index)=> (
        <Section key={index}>
          <CardStype2 
            cardNumber={index+1}
            phase={item.phase}
            title={item.title}
            subtitle={item.subtitle}
          />
        </Section>
      ))}
    </Slider>
  )
}
