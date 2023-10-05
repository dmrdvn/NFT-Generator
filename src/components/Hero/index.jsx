import React from 'react'
import { Parallax } from 'react-parallax';
import parse from 'html-react-parser';
import Button from '../Button';
import './hero.scss'
import Section from '../Section';
import Spacing from '../Spacing'

export default function Hero({title, bgUrl, heroImageUrl, animatedUrl, variant, bubble, overlay, bgOpacity}) {
  return (
    
      <Section tag='section' className={`cs-hero cs-style1 ${variant?variant:''}`} id="hero" >
        {overlay && <Section className="cs-dark_overlay" style={{opacity:overlay}} />}
        <Section className="cs-hero_bg" style={{opacity:bgOpacity}}>
          <Parallax bgImage={bgUrl} bgImageAlt="Hero" strength={120}></Parallax>
        </Section>
        <Section className="container">
          <Section className="cs-hero_text">
          
            <Section tag='h1' className="cs-hero_title cs-font_64 cs-font_36_sm cs-bold">{parse(title)}</Section>
            <Section tag='h2' className="cs-hero_secondary_title cs-font_20 cs-font_14_sm">Kurs veya eğitim sonunda öğrencilere<br/> sertifika yerine NFT veriyoruz!</Section>
            <Spacing lg='30' md='20'/>
            <Section className="cs-btn_group">
            

              <Button 
                btnLink='/' 
                btnText='Uygulamaya Git' 
                variant='cs-btn_filed cs-accent_btn'
              />
              <Button 
                btnLink='/' 
                btnText='Güncellemeler için Waitlist e kaydol' 
                variant='cs-color1'
              />
            </Section>
            
          </Section>
          <Section className="cs-hero_img">
            <img src={heroImageUrl} alt="Hero" />
            <Section className="cs-hero_img_sm">
              <img src={animatedUrl} alt="Hero" />
            </Section>
          </Section>
        </Section>
        {bubble && (
          <Section id="background-wrap">
            <Section className="bubble x1"></Section>
            <Section className="bubble x2"></Section>
            <Section className="bubble x3"></Section>
            <Section className="bubble x4"></Section>
            <Section className="bubble x5"></Section>
            <Section className="bubble x6"></Section>
            <Section className="bubble x7"></Section>
            <Section className="bubble x8"></Section>
            <Section className="bubble x9"></Section>
            <Section className="bubble x10"></Section>
          </Section>
        )}
      </Section>
  )
}
