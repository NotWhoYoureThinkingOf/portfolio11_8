import React from 'react'
import LifeSkill from './LifeSkill'
import './LifeSkills.css'

function LifeSkills() {
  return (
    <div className="lifeSkills">
      <LifeSkill 
        topic="Education"
        location="New England Institute of Technology"
        title="Some Coursework Completed Towards Associate's Degree"
        date="July 2018 - March 2019"
        description="12 Courses Completed"
      />

      <hr/>


    </div>
  )
}

export default LifeSkills
