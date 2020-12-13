import React from 'react'
import './Socials.css'

function Socials({ link, fontawesome }) {
  return (
    <div className="socials">
      <a href={link}><i className={fontawesome}></i></a>
    </div>
  )
}

export default Socials
