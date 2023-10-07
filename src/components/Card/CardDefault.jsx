import React from 'react'
import Section from '../Section'

export default function CardDefault() {
  return (
    <Section className="cs-card cs-style3 text-center cs-light_bg">
      <Section className="cs-card_in">
        <Section className="cs-card_number cs-font_30 cs-font_24_sm cs-primary_font cs-body_line_height cs-center"></Section>
        <Section tag='h3' className="cs-card_title cs-font_30 cs-font_24_sm cs-m0 cs-primary_color"></Section>
      </Section>
    </Section>
  )
}
