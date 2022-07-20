import React from 'react'
import './contact.css'
import {GoMailRead} from 'react-icons/go'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bsimllm', 'template_4jxalc2', form.current, 'R63c5VBsnNWq7vNKS')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <GoMailRead className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>vaghasiyadm65@gmail.com</h5>
              <a href="mailto:vaghasiyadm65@gmail.com" target="_blank"> Send a Message</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messanger</h4>
              <h5>Drashti Maganbhai Vaghasiya</h5>
              <a href="https://m.me/drashtimaganbhai.vaghasiya" target="_blank"> Send a Message</a>
            </article>
            <article className="contact__option">
              <RiWhatsappLine className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>(+91)9265692405</h5>
              <a href="https://api.whatsapp.com/send?phone+919265692405" target="_blank"> Send a Message</a>
            </article>
        </div>
        {/* END OF OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='Name' placeholder='Your Full Name' required />
          <input type="text" name='Email' Placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type="Submit" className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact