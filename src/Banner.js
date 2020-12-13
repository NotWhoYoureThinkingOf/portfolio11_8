import React from 'react'
import './Banner.css'
import Socials from './Socials'
import {KeyboardArrowDown, Menu} from '@material-ui/icons';

function Banner() {

  const menuScreenOut = () => {
    const banner = document.querySelector('.banner__menuScreen')

    banner.classList.add('banner__menuScreenOut')
  }

  const menuScreenReturn = () => {
    const banner = document.querySelector('.banner__menuScreen')

    banner.classList.remove('banner__menuScreenOut')
  }

  return (
    <div className="banner" id="banner">
      <div className="banner__menu" onClick={menuScreenOut}>
        <Menu />
      </div>
      <div className="banner__menuScreen">
        <a href="#banner" onClick={menuScreenReturn}>Home</a>
        <a href="#projects" onClick={menuScreenReturn}>Projects</a>
        <a href="#aboutMe" onClick={menuScreenReturn}>About</a>
        <a href="#contactForm" onClick={menuScreenReturn}>Contact</a>
      </div>
      <div className="banner__container">
        <img src="https://images.unsplash.com/photo-1572295727871-7638149ea3d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/>
        <div className="banner__info">
          <h1 className="banner__name">Hi, I'm <span>Adam Curtis</span></h1>
          <h3>This website was made with <span>ReactJS</span></h3>
          <div className="banner__socials">
            <Socials
              link="https://www.facebook.com/adam.curtis.564"
              fontawesome="fa fa-facebook" 
            />
            <Socials
              link="https://www.linkedin.com/in/acurtis1286/"
              fontawesome="fa fa-linkedin" 
            />
            <Socials
              link="https://www.instagram.com/acurtis1286/"
              fontawesome="fa fa-instagram" 
            />
            <Socials
              link="https://github.com/NotWhoYoureThinkingOf"
              fontawesome="fa fa-github" 
            />
          </div>
        </div>
      </div>
      <div className="banner__down">
        <a href="#projects"><KeyboardArrowDown /></a>
      </div>
      <div className="banner__fade"></div>
    </div>
  )
}

export default Banner
