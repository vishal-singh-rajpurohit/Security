import React from 'react'
import home from "./contact.css"

const Contact = () => {
  return (
    <div className="contact" id="contact">
        <div className="contactSub">
          <span className="aboutText">Contact Us</span>
          <form className="contactForm">
            <div className="contactDiv">
              <label htmlFor="name" className="conLeb">Enter Your Name</label>
              <input type="text" name="name" id="name" placeholder="enter your name..." className="formText" />
            </div>
            <div className="contactDiv">
              <label htmlFor="mail" className="conLe">Enter Mobile Number or Email</label>
              <input type="text" name="mail" id="mail" placeholder="enter your mobile number or email..." className="formText" />
            </div>
            <div className="contactDiv">
              <label htmlFor="message" className="conLeb">Enter Mobile Number or Email</label>
              <textarea type="text" name="message" id="message" placeholder="enter your query or message..." className="formTextArea" />
            </div>
            <div className="contactDi" style={{alignItems: "center"}}>
              <input type="submit" className="formSubmit" />
            </div>
          </form>
        </div>
      </div>
  )
}

export default Contact