import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import Section from '../Section'

export default function ModeSwitch() {
  const [darkMode, setDarkMode] = useState(true)
  const activateMode = async () => {
    if(darkMode === false) {
      document.body.classList.add('cs-dark')
      document.body.classList.remove('cs-light')
      await localStorage.setItem('Theme', 'dark_mode')
    }
    if(darkMode === true) {
      document.body.classList.remove('cs-dark')
      document.body.classList.add('cs-light')
      await localStorage.setItem('Theme', 'light_mode')
    }
    setDarkMode(!darkMode)
  }
  useEffect(() => {
    if(localStorage.getItem('Theme')==='light_mode') {
      document.body.classList.remove('cs-dark')
      document.body.classList.add('cs-light')
    } else if (localStorage.getItem('Theme')==='dark_mode') {
      document.body.classList.add('cs-dark')
      document.body.classList.remove('cs-light')
    }
    if(!localStorage.getItem('Theme')){
      localStorage.setItem('Theme', 'dark_mode')
      setDarkMode(true)
    }
  }, [])

  return (
    <Section tag='span' className="cs-icon_btn cs-mode_btn" onClick={activateMode}>
      <Icon icon="ph:moon" className='cs-hide_dark'/>
      <Icon icon="ph:sun-bold" className='cs-hide_white' />
    </Section>
  )
}
