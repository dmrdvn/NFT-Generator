import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../Section'
import './team.scss'

export default function Team({src, name, designation, facebookHref, linkedinHref, whatsappHref, variant, bgUrl}) {
  return (
    <Section className={`cs-team cs-style1 ${variant?variant:''} text-center cs-light_bg`}>
      <Section className="cs-member_thumb cs-bg" style={{backgroundImage:`${bgUrl && `url(${bgUrl})`}`}}>
        <img src={src} alt="Member" />
      </Section>
      <Section className="cs-height_25 cs-height_lg_25" />
      <Section className="cs-member_info">
        <Section tag='h2' className="cs-font_24 cs-font_16_sm cs-m0">{name}</Section>
        <Section className="cs-height_5 cs-height_lg_5" />
        <Section tag='p' className="cs-m0">{designation}</Section>
        <Section className="cs-height_20 cs-height_lg_20" />
      </Section>
    </Section>
  )
}
