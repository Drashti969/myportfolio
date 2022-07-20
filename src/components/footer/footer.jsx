import React from 'react'
import './footer.css'
import {ImFacebook2} from 'react-icons/im'
import {RiInstagramFill} from 'react-icons/ri'
import {SiTwitter} from 'react-icons/si'

const footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>DRASHTI</a>
        <ul className='permalinks'>
           <li><a href='#'>Home</a></li> 
           <li><a href='#about'>About</a></li> 
           <li><a href='#experience'>Experience</a></li> 
           <li><a href='#services'>Services</a></li>
           <li><a href='#portfolio'>Portfolio</a></li> 
           <li><a href='#testimonials'>Testimonials</a></li> 
           <li><a href='#contact'>Contact</a></li> 
        </ul>

        <div className="footer__socials">
            <a href="https://facebook.com"><ImFacebook2/></a>
            <a href="https://instagram.com"><RiInstagramFill/></a>
            <a href="https://twitter.com"><SiTwitter/></a>
         </div> 

         <div className="footer__copyright">
            <small>&copy; DRASHTI VAGHASIYA. All rights reserved</small>
         </div>
    </footer>
  )
}

export default footer