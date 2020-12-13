import React, {useState} from 'react'
import './ContactForm.css'
import emailjs from 'emailjs-com'
import {MailOutline, Check} from '@material-ui/icons';

function ContactForm() {
  const [inputName, setInputName] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputMessage, setInputMessage] = useState("")


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'contact_form', e.target, 'user_te7dBudEMIBrir5T4OCbm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    setInputName("")
    setInputEmail("")
    setInputMessage("")

    
    const emailSent = document.querySelector('.email-sent')
    
    emailSent.style.display="grid"
  }

  return (
    <div className="contactForm" id="contactForm">
      <div className="contactForm__container">
        <div className="contactForm__left">
          <div className="contactForm__top">
            <MailOutline />
            <h3>Contact me for a copy of my resume<br />or with any questions</h3>
          </div>
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input 
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              type="text" 
              name="user_name" 
              required
            />
            <label>Email</label>
            <input
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              type="email" 
              name="user_email" 
              required/>
            <label>Message</label>
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              name="message" 
              rows="10" 
              cols="50" 
              required
            />
            <input type="submit" value="Send" id="contact-form-button" />
            <div className="email-sent">
              <Check />
            </div>
          </form>
        </div>
        <div className="contactForm__right">
          <h3>Contact me for a copy of my resume<br />or with any questions</h3>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
