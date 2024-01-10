import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/me4.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Amal Sam Varghese</h1>
        <div className="text-light">Software,Web Developer</div>
      <CTA/>
      <HeaderSocial/>
      <div className="me">
        <img src={ME} alt="" />
      </div>
      <a href="#contacts" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header