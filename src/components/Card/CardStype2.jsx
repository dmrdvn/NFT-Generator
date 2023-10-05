import { Icon } from '@iconify/react'
import React from 'react'
import Section from '../Section'
import './card.scss'

export default function Card2({title, subtitle, phase, cardNumber}) {
  return (
    <Section className="cs-card cs-style2">
      <Section className="cs-card_number cs-accent_bg cs-white_color cs-center cs-primary_font cs-font_22 cs-bold">
        {cardNumber}
        <Section className="cs-card_tick">
          <Icon icon="material-symbols:check-circle-rounded" />                                                  
        </Section>
      </Section>
      <Section className="cs-height_30 cs-height_lg_15" />
      <Section className="cs-card_in cs-light_bg">
        <Section tag='h3' className="cs-gradient_color cs-font_18 cs-font_16_sm cs-m0">{phase}</Section>
        <Section className="cs-height_5 cs-height_lg_5" />
        <Section tag='h2' className="cs-font_24 cs-font_16_sm cs-m0">{title}</Section>
        <Section className="cs-height_10 cs-height_lg_10" />
        <Section tag='p' className="cs-m0">{subtitle}</Section>
      </Section>
    </Section>
  )
}
