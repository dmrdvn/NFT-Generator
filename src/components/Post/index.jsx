import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../Section'
import Spacing from '../Spacing'
import './post.scss'

export default function Post({src, title, subtitle, href, btn}) {
  return (
    <Section className="cs-blog cs-style1">
      <Link to={href} className="cs-blog_thumb cs-zoom_effect"><img src={src} alt="Thumb" className="w-100" /></Link>
      <Section className="cs-height_20 cs-height_lg_20" />
      <Section tag='h2' className="cs-blog_title cs-font_24 cs-font_18_sm cs-m0"><Link to={href}>{title}</Link></Section>
      <Spacing lg='5' md='5'/>
      <Section className="cs-blgo_subtitle">{subtitle}</Section>
      {btn && (
        <>
          <Spacing lg='10' md='10'/>
          <Link to={href} className="cs-blog_btn cs-primary_font cs-primary_color cs-accent_color_hover">
            Read More 
            <Icon icon="material-symbols:arrow-right-alt-rounded" style={{fontSize:'24px'}} />               
          </Link>
        </>
      )}
      
    </Section>
  )
}
