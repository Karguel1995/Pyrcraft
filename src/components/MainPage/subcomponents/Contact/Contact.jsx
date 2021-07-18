import React from "react";

import './Contact.scss'

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Kontakt</h2>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-details">
            <h3>Adres:</h3>
            <p>Malanowo</p>
            <p>pyrk pyrk</p>
          </div>

          <div className="contact-details">
            <h3>Numer telefonu:</h3>
            <p>pyrk pyrk pyrk</p>
          </div>

          <div className="contact-details">
            <h3>Email:</h3>
            <p>pyrk@pyrcrafts.pl</p>
          </div>
        </div>
        <div className="contact-right">
          <form>
            <label htmlFor="name">Twoje imie:</label>
            <input type="text" id="name" placeholder="Wpisz imie..." value="Pyrk" />

            <label htmlFor="email">Twój email:</label>
            <input type="text" id="email" placeholder="Wpisz email..." value="pyrk@pyrcrafts" />

            <label htmlFor="subject">Temat:</label>
            <input type="text" id="subject" placeholder="Temat wiadomości" value="Pyrk pyrk?" />

            <label htmlFor="message">Wiadomość:</label>
            <textarea id="message" placeholder="Wpisz wiadomość" value="Pyrki to takie ziemniaki, ale z rybami" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;