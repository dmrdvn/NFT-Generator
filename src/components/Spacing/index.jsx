import React from 'react'
import './spacing.scss'

export default function Spacing({lg, md}) {
  return (
    <div className={`cs-height_${lg} cs-height_lg_${md}`}></div>
  )
}