import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {TiSocialInstagram} from 'react-icons/ti'
import {FaFacebookSquare} from 'react-icons/fa'

const headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com"  target="_blank"><BsLinkedin/></a>
        <a href="https://Instagram.com"  target="_blank"><TiSocialInstagram/></a>
        <a href="https://Facebook.com"  target="_blank"><FaFacebookSquare/></a>
    </div>
  )
}

export default headersocials