import React from 'react'
import './OtherWorks.css'
import OtherWork from './OtherWork'
import shopify from './shopify-theme.PNG'
import gravity from './gravity.PNG'
import transport from './food-transport.png'

function OtherWorks() {
  return (
    <div className="otherWorks" id="otherWorks">
      <div className="otherWorks__container">
        <div className="otherWorks__left">
          <h2>Other Works I've Done</h2>
        </div>
        <div className="otherWorks__right">
          <div className="otherWorks__rightContainer">
            <OtherWork
              link="https://acdev-store.myshopify.com/"
              image={shopify} 
              name="Shopify Theme"
              info="E-commerce theme built with liquid on the Shopify platform"
            />
            <div className="otherWorks__mobileInfo">
                <p>E-commerce theme built with liquid on the Shopify platform</p>
              </div>
            <OtherWork 
              link="https://foodtransport.netlify.app/"
              image={transport} 
              name="Food Transportation Mockup"
              info="Demo built for a food transportation company using React"
            />
            <div className="otherWorks__mobileInfo">
                <p>Demo built for a food transportation company using React</p>
            </div>
            <OtherWork
              link="https://gravityclothing.netlify.app/" 
              image={gravity} 
              name="PSD to HTML Website"
              info="Responsive website built from a PSD template"
            />
            <div className="otherWorks__mobileInfo">
              <p>Responsive website built from a PSD template</p>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default OtherWorks
