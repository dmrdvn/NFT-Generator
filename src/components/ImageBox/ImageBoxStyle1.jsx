import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../Section'

export default function ImageBoxStyle1({src, href, alt}) {
  return (
    <Link to={href} className="cs-image_box cs-style2">
      <Section className="cs-image_box_in">
        <Section className="cs-image_box_img"><img src={src} alt={alt} /></Section>
      </Section>
    </Link>
  )
}
