import React from 'react'
import { Link } from 'react-router-dom'
import './imagebox.scss'

export default function ImageBox({src, href, alt}) {
  return (
    <Link to={href} className="cs-image_box cs-style1">
      <img src={src} alt={alt} />
    </Link>
  )
}
