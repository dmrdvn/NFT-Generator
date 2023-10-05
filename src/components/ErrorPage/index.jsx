import React from 'react'
import { Link } from 'react-router-dom'
import Spacing from '../Spacing'

export default function ErrorPage() {
  return (
    <div className='cs-error text-center'>
      <Spacing lg='100' md='70'/>
      <div className="contaienr">
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link to='/' className='cs-btn cs-btn_filed cs-accent_btn'>Go To Homepage</Link>
      </div>
      <Spacing lg='100' md='70'/>
    </div>
  )
}
