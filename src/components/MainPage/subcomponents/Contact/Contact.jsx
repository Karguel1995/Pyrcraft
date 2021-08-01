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

  return (
    <div id="contact" className="contact-page">
      <h2>Kontakt</h2>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-details">
            <h3>Adres:</h3>
            <p>Polska 05-088 Brochów,</p>
            <p>Woj. Mazowieckie</p>
          </div>

          <div className="contact-details">
            <h3>Numer telefonu:</h3>
            <p>+48 600 004 736</p>
          </div>

          <div className="contact-details">
            <h3>Email:</h3>
            <p>pyrcrafts@gmail.com</p>
          </div>
        </div>
        <div className="contact-right">
          <form>
            <label htmlFor="name">Twoje imie:</label>
            <input type="text" id="name" onChange={handleInputChange} placeholder="Wpisz imie..." value={name} />

            <label htmlFor="email">Twój email:</label>
            <input type="text" id="email" onChange={handleInputChange} placeholder="Wpisz email..." value={email} />

            <label htmlFor="subject">Temat:</label>
            <input type="text" id="subject" onChange={handleInputChange} placeholder="Temat wiadomości" value={subject} />

            <label htmlFor="message">Wiadomość:</label>
            <textarea id="message" onChange={handleInputChange} placeholder="Wpisz wiadomość" value={message} />
            <button>Wyślij wiadomość</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;