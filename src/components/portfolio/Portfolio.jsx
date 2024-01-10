import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio10.png'
import IMG2 from '../../assets/portfolio11.png'
import IMG3 from '../../assets/portfolio12.png'
import IMG4 from '../../assets/portfolio13.png'
import IMG5 from '../../assets/portfolio14.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
            <h3>SpaceShooter 2d Game Using Python</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/amalsam/SpaceShooter" className='btn' target='blank'>Github</a>
            <a href="https://github.com/amalsam/SpaceShooter" className='btn btn-primary' target='blank'>Demo</a>
            </div>
          </div>

        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
            <h3>Personal Portfolio Using React Js</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/amalsam/" className='btn' target='blank'>Github</a>
            <a href="#header" className='btn btn-primary'>Demo</a>
            </div>
          </div>

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
            <h3>A Simple calculator with HTML,CSS,JavaScript</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/amalsam/Calculator" className='btn' target='blank'>Github</a>
            <a href="https://amalsam.github.io/Calculator/" className='btn btn-primary' target='blank'>Demo</a>
            </div>
          </div>

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
            <h3>Weather App with Javascript</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/amalsam/" className='btn' target='blank'>Github</a>
            <a href="https://github.com/amalsam/" className='btn btn-primary' target='blank'>Demo</a>
            </div>
          </div>

        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
            <h3>Todo-App Using React</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/amalsam/todo-app" className='btn' target='blank'>Github</a>
            <a href="https://amalsam.github.io/todo-app/" className='btn btn-primary' target='blank'>Demo</a>
            </div>
          </div>

        </article>

      </div>
    </section>
  )
}

export default Portfolio