import React from 'react'
import './Footer.css'
import Socials from './Socials'
import {KeyboardArrowUp, FiberManualRecord} from '@material-ui/icons';

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer__up">
        <a href="#banner"><KeyboardArrowUp /></a>
      </div>
      <div className="footer__icons">
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
      <div className="footer__info">
        &copy; All credit goes to Tim Baker - copyright 2017 Tim Baker <span className="footer__infoDot"><FiberManualRecord /></span> Design by <span className="footer__infoDesign">Styleshout</span>
      </div>
    </div>
  )
}

export default Footer
