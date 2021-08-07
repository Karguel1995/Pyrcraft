import React, { useState } from "react";

import './Contact.scss'

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    if (e.target.id === 'name') {
      setName(e.target.value)
    }
    else if (e.target.id === 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.id === 'subject') {
      setSubject(e.target.value)
    }
    else if (e.target.id === 'message') {
      setMessage(e.target.value)
    }
  }

  const handleSubmitButton = (e) => {
    e.preventDefault()
  }

  return (
    <div id="contact" className="contact-page">
      <h2>Kontakt</h2>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-details">
            <h3><i className="fas fa-map-marker-alt"></i> Adres:</h3>
            <p>Polska 05-088 Brochów,</p>
            <p>Woj. Mazowieckie</p>
          </div>

          <div className="contact-details">
            <h3><i className="fas fa-phone-alt"></i> Numer telefonu:</h3>
            <p>+48 600 004 736</p>
          </div>

          <div className="contact-details">
            <h3><i className="far fa-envelope"></i> Email:</h3>
            <p>pyrcrafts@gmail.com</p>
          </div>
        </div>
        <div className="contact-right">

          <form id="contactform" action="https://formsubmit.io/send/pyrcrafts@gmail.com" method="POST">
            <label htmlFor="name">Twoje imie:</label>
            <input name="name" type="text" id="name" onChange={handleInputChange} placeholder="Wpisz imie" value={name} />

            <label htmlFor="email">Twój email:</label>
            <input name="email" type="email" id="email" onChange={handleInputChange} placeholder="Wpisz email" value={email} />

            <label htmlFor="subject">Temat:</label>
            <input type="text" id="subject" onChange={handleInputChange} placeholder="Temat wiadomości" value={subject} />

            <label htmlFor="message">Wiadomość:</label>
            <textarea name="comment" id="message" onChange={handleInputChange} placeholder="Wpisz wiadomość" value={message} />

            <input name="_formsubmit_id" type="text" style={{ display: "none" }} />
            <input name="_redirect" type="hidden" id="name" value="https://karguel1995.github.io/Pyrcraft/thanks-page" />

            <button className="submit-button" type="submit" onClick={handleSubmitButton} >Wyślij <i className="fas fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;