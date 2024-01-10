import React from 'react'
import "./about.css"
import ME from '../../assets/me-about1.jpg'
import { BsAward } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon'></BsAward>
              <h5>Experience</h5>
              <small> less than 1 year</small>

            </article>
            <article className='about__card'>
              <IoSchool className='about__icon'></IoSchool>
              <h5>Education</h5>
              <small> MCA,BCA</small>

            </article>
            <article className='about__card'>
            <FaLaptopCode  className='about__icon'/>
              <h5>Projects</h5>
              <small> less than 10</small>

            </article>
          </div>
          <p>
          I'm Amal Sam Varghese, a entry level web developer based in Kottayam. Armed with a Master's in Computer Application and a Bachelor's in Computer Applications, I specialize in translating innovative ideas into functional and efficient web solutions. My proficiency spans various programming languages and frameworks, enabling me to create user-friendly applications that align with industry trends. 
          </p>
          <a href="#contacts " className='btn btn-primary'>Lets Talk</a>
        </div>

      </div>


      
    </section>
  )
}

export default About