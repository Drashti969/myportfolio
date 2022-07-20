import React from 'react'
import './about.css'
import ME from '../../Assets/1.jpg'
import {FaAward} from 'react-icons/fa'
import {TbUsers} from 'react-icons/tb'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image"/>
            </div>

          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/> 
                <h5>Experience</h5>
                <small>3+ years Working</small>
              </article>

              <article className='about__card'>
                <TbUsers className='about__icon'/> 
                <h5>Clients</h5>
                <small>200+ WorldWide</small>
              </article>
               
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/> 
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quam amet, dicta quibusdam consectetur possimus praesentium alias quasi architecto, blanditiis, dolor accusamus eum? 
              Facere non quaerat temporibus quasi impedit ex corporis.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>


    </section>
  )
}

export default About