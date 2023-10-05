import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../Section'

export default function Button({btnLink, btnText, variant, children}) {
  return (
    <Link to={btnLink} className={`cs-btn ${variant?variant:''}`}>
      {children}
      <Section tag='span'>{btnText}</Section>
    </Link>
  )
}
