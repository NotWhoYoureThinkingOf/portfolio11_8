import React from 'react'
import './LifeSkill.css'
import LifeSkills from './LifeSkills'

function LifeSkill({ topic, location, title, date, description }) {
  return (
    <div className="lifeSkill">
      <div className="lifeSkill__container">
        <div className="lifeSkill__topic">
          <h2>{topic}</h2>
        </div>
        <div className="lifeSkill__info">
          <h2>{location}</h2>
          <div className="lifeSkill__title">
            <h3>{title}</h3>&nbsp;/&nbsp;<span>{date}</span>
          </div>
          <p>{description}</p>       
        </div>
      </div>
    </div>
  )
}

export default LifeSkill
