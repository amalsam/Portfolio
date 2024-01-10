import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Contacts from './components/contacts/Contacts'
import Experience from './components/experience/Experience'
import About from './components/about/About'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <Header></Header>
    <About></About>
    <Nav></Nav>
    <Experience></Experience>
    <Portfolio></Portfolio>
    <Contacts></Contacts>
    <Footer></Footer>
    
    </>
  )
}

export default App
