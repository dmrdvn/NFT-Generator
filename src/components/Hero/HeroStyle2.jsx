import React from 'react'
import parse from 'html-react-parser';
import Button from '../Button';
import './hero.scss'
import Section from '../Section';
import { Parallax } from 'react-parallax';

export default function HeroStyle2({title, mintNumber, mintMax, mintPrice, mintDeathLine, bgUrl, heroImageUrl, animatedUrl, variant, overlay, bubble}) {
  return (
    <Section tag='section' className={`cs-hero cs-style1 ${variant?variant:''} cs-bg`} id="hero" style={{backgroundImage: `url(${bgUrl})`}}>
      {overlay && <Section className="cs-dark_overlay" style={{opacity:overlay}} />}
      <Section className="cs-hero_bg">
          <Parallax bgImage={bgUrl} bgImageAlt="Hero" strength={120}></Parallax>
        </Section>
      <Section className="container">
        <Section className="cs-hero_img">
          <img src={heroImageUrl} alt="Hero" />
          <Section className="cs-hero_img_sm">
            <img src={animatedUrl} alt="Hero" />
          </Section>
        </Section>
        <Section className="cs-hero_text">
        <Section tag='h2' className="cs-hero_secondary_title cs-font_22 cs-font_18_sm">{mintNumber} / {mintMax} Minted</Section>
          <Section tag='h1' className="cs-hero_title cs-font_60 cs-font_36_sm cs-bold">{parse(title)}</Section>
          <Section tag='h3' className="cs-hero_subtitle cs-font_20 cs-font_16_sm cs-body_line_height">Max 3 NFTs Per Wallet. Price <Section tag='span' className="cs-accent_color">{mintPrice}</Section> ETH <br />
            Mint is Live Until <Section tag='span' className="cs-accent_color">{mintDeathLine}</Section></Section>
          <Section className="cs-btn_group">
            <Button 
              btnLink='/' 
              btnText='Mint Now' 
              variant='cs-btn_filed cs-accent_btn'
            />
            <Button 
              btnLink='/' 
              btnText='Join the Waitlist' 
              variant='cs-color1'
            />
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