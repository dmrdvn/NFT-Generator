import React from 'react'
import Section from '../Section'
import Spacing from '../Spacing'

export default function FunFact({number, title}) {
  return (
    <Section className="cs-funfact cs-style1">
      <Section className="cs-font_64 cs-font_36_sm cs-m0 cs-primary_font cs-primary_color cs-heading_line_height cs-bold">{number}</Section>
      <Spacing lg='5' md='5'/>
      <Section tag='p' className="cs-m0 cs-font_24 cs-heading_line_height cs-font_22_sm">{title}</Section>
    </Section>
  )
}
