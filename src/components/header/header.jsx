import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assets/222.png'
import Headersocial from './headersocials'

const Header = () => {
  return (
   <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Drashti Vaghasiya</h1>
      <h5 className='text-light'>Full-Stack Developer</h5>
      <CTA/>
      <Headersocial />

      <div className='me'>
        <img src={ME} alt="me"/>
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header