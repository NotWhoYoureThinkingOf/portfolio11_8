import React from 'react'
import './OtherWork.css'

function OtherWork({ link, image, name, info }) {
  return (
    <a href={link} className="otherWork">
      <div className="otherWork__overlay">
        <div className="otherWork__info">
          <h3>{name}</h3>
          <p>{info}</p>
        </div>
      </div>
      <div className="otherWork__body">
        <img src={image} alt={name} />
      </div>
    </a>
  )
}

export default OtherWork
