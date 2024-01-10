import React from 'react'
import "./Experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experinece__deteil'>
              <BsPatchCheckFill className='experience__deteils-icon'/>
              <div><h4>HTML</h4></div>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experinece__deteil'>
              <BsPatchCheckFill className='experience__deteils-icon'/> 
              <div><h4>JavaScrip</h4></div>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experinece__deteil'>
              <BsPatchCheckFill className='experience__deteils-icon'/>
              <div><h4>CSS</h4></div>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experinece__deteil'>
              <BsPatchCheckFill className='experience__deteils-icon'/>
              <div><h4>Bootstrap</h4></div>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experinece__deteil'>
              <BsPatchCheckFill className='experience__deteils-icon'/>
              <div><h4>React</h4></div>
              <small className='text-light'>Basic</small>
            </article>
          </div>
        </div>
        <div className="experince__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experinece__deteil'>
              <BsPatchCheckFill className='experience__deteils-icon'/>
              <div><h4>Python</h4></div>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experinece__deteil'>
              <BsPatchCheckFill className='experience__deteils-icon'/>
              <div><h4>PHP</h4></div>
              <small className='text-light'>Basics</small>
            </article>
            <article className='experinece__deteil'>
              <BsPatchCheckFill className='experience__deteils-icon'/>
              <div><h4>NODE JS</h4></div>
              <small className='text-light'>Basics</small>
            </article>
            <article className='experinece__deteil'>
              <BsPatchCheckFill className='experience__deteils-icon'/>
              <div><h4>MySQL</h4></div>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experinece__deteil'>
              <BsPatchCheckFill className='experience__deteils-icon'/>
              <div><h4>MongoDB</h4> </div>
              <small className='text-light'>Basic</small>
            </article>
          </div>
        </div>
      
      </div>
    </section>
  )
}

export default Experience