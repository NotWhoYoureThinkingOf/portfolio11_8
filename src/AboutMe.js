import React from 'react'
import './AboutMe.css'
import profilePic from './IMG_3150.jpg'

function AboutMe() {
  return (
    <div className="aboutMe" id="aboutMe">
      <div className="aboutMe__container">
        <div className="aboutMe__pic">
          <img src={profilePic} alt=""/>
        </div>
        <div className="aboutMe__info">
          <div className="aboutMe__infoTop">
            <h3>About Me</h3>
            <p>My name is Adam. I'm a front end ReactJS focused developer. Currently I'm making my entrance into the tech industry while continuing to learn how to code.</p>
          </div>
          <div className="aboutMe__infoBottom">
            <h3>Contact Me</h3>
            <a href="#contactForm">Click here to go to my contact form</a>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default AboutMe
