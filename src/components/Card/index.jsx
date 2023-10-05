import React from 'react'
import Section from '../Section'
import './card.scss'

export default function Card({title, emoji}) {
  return (
    <Section className="cs-card cs-style1">
      <Section className="cs-card_in">
        <Section tag='h3' className="cs-card_title cs-font_30 cs-font_24_sm cs-m0">{title}</Section>
        <Section className="cs-card_arrow">{emoji}</Section>
      </Section>
    </Section>
  )
}
