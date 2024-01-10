import React from 'react'
import "./contacts.css"
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contacts = () => {

  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t9hknnx', 'template_tzy1xgg', form.current, 'FUEwL8RLZzcHLnUBB')
    e.target.reset()
      
  };
  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>amalsamvarghese@gmail.com</h5>
            <a href="mailto:amalsamvarghese@gmail.com" target='blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
    
            <a href="https://wa.me/qr/UNJ66TA6EJTMO1" target='blank'>Send a Message</a>
         </article>
         
         
         </div>
          < form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>


          </form>

        
      </div>

    </section >
  )
}

export default Contacts