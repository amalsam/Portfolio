import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import './header.css'





const HeaderSocial = () => {
  return (
    <div className="header__social">
        <a href="https://www.linkedin.com/in/amal-sam-varghese/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/amalsam" target='blank'><FaGithub/></a>
        <a href="https://facebook.com" target='blank'><FiDribbble/></a>

    </div>
  )
}

export default HeaderSocial