import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'
import ModeSwitch from '../ModeSwitch';
import Section from '../Section';
import './header.scss'

export default function Header() {
  const [mobileToggle, setMobileToggle] = useState(false)
  return (
    <>
      <Section tag='header' className="cs-site_header cs-style1 cs-sticky-header cs-primary_color">
        <Section className="cs-main_header">
          <Section className="container">
            <Section className="cs-main_header_in">
              <Section className="cs-main_header_left">
                <Link to='/' className="cs-site_branding cs-accent_color">
                  <img src="/images/logo.svg" alt="Logo" className="cs-hide_dark" />
                  <img src="/images/logo_white.svg" alt="Logo" className="cs-hide_white" />
                </Link>
              </Section>
              <Section className="cs-main_header_center">
                <Section className="cs-nav">
                  <ul className="cs-nav_list" style={{display:`${mobileToggle?'block':'none'}`}}>
                    <li><ScrollLink to="hero" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>setMobileToggle(false)}>Anasayfa</ScrollLink></li>
                    
                    <li><ScrollLink to="about" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>setMobileToggle(false)}>Uygulama Hakkında</ScrollLink></li>
                    <li><ScrollLink to="roadmap" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>setMobileToggle(false)}>Geliştirme</ScrollLink></li>
                    
                    <li><ScrollLink to="faq" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>setMobileToggle(false)}>Nasıl Kullanılır ?</ScrollLink></li>
                    <li><ScrollLink to="contact" spy={true} smooth={true} offset={-80} duration={500} onClick={()=>setMobileToggle(false)}>İletişim</ScrollLink></li>
                  </ul>
                  <span className={mobileToggle?"cs-munu_toggle cs-toggle_active":"cs-munu_toggle"} onClick={()=>setMobileToggle(!mobileToggle)}><span></span></span>
                </Section>
              </Section>
              <Section className="cs-main_header_right">
                <Section className="cs-toolbox">
               
                  <ModeSwitch />
                  {/* <Modal modalType='connect' btnText='Connect' btnIcon /> */}
                  <Link to="/app">Uygulamaya Git</Link>
                  
                  
                  
                  
                </Section>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </>
  )
}
