import React from 'react'
import { useState } from 'react'
import Section from '../Section'

export default function Accordion({variant, data, openPosition, questionNumberStarter}) {
  const [selected, setSelected] = useState(openPosition)
  const handelToggle = (index) => {
    if(selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  
  return (
    <Section className={`cs-accordians ${variant ? variant : 'cs-style1'}`}>
      {data.map((item, index)=>(
        <Section className={`cs-accordian cs-light_bg ${selected===index?'active':''}`} key={index}>
          <Section className="cs-accordian_head" onClick={()=>handelToggle(index)}>
            <Section tag='h2' className="cs-accordian_title cs-m0 cs-font_24 cs-font_18_sm"><Section tag='span'>S{index+questionNumberStarter}</Section> {item.question}</Section>
            <Section tag='span' className="cs-accordian_toggle"></Section>
          </Section>
          <Section className='cs-accordian_body'>
            <Section className="cs-accordian_body_in">{item.answer}</Section>
          </Section>
        </Section>
      ))}
    </Section>
  )
}
