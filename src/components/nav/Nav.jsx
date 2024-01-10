import React from 'react'
import "./nav.css"
import { IoHomeOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { RiServiceLine } from "react-icons/ri";
import { MdContacts } from "react-icons/md";
import { useState } from 'react';

const Nav = () => {
  const[activeNav,setActiveNav]= useState('#')
  return (
    <nav>
  <a href="#header" onClick={()=> setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><IoHomeOutline /></a>
  <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser /></a>
  <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaLaptopCode /></a>
  <a href="#portfolio" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
  <a href="#contacts" onClick={()=> setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><MdContacts /></a>
  
    </nav>
  )
}

export default Nav