import React, { useState } from "react";
import { useForm } from "react-hook-form";


import './Contact.scss'

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleOnSubmit = () => {
    console.log("Nie działa")
  }
  console.log(errors.name)

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

          <form
            id="contactform"
            action="https://formsubmit.io/send/karguel1995@gmail.com"
            method="POST"
          >

            <label htmlFor="name">
              {errors.name &&
                <span className="error">! <span className="error-message">Imię powinno mieć między 3 a 20 znakami.</span>
                </span>}
              Imię:</label>
            <input
              {...register("name", { required: true, minLength: 3, maxLength: 20 })}
              placeholder="Wpisz imię"
            />


            <label htmlFor="email">
              {errors.email &&
                <span className="error">! <span className="error-message">Uzupełnij adres email.</span>
                </span>}
              Email:</label>
            <input
              {...register("email", { required: true, minLength: 3 })}
              type="email"
              placeholder="Wpisz email"
            />

            <label htmlFor="message">
              {errors.message &&
                <span className="error">! <span className="error-message">Wiadomość powinna mieć między 20 a 1000 znaków.</span>
                </span>}
              Wiadomość:</label>
            <textarea
              {...register("message", { required: true, minLength: 20, maxLength: 1000 })}
              placeholder="Wpisz wiadomość"
            />

            <input name="_formsubmit_id" type="text" style={{ display: "none" }} />
            <input name="_redirect" type="hidden" id="name" value="https://karguel1995.github.io/Pyrcraft/#/thanks-page" />

            <button
              type="submit"
              className="submit-button"
            >Wyślij wiadomość <i className="fas fa-paper-plane"></i></button>
          </form>

          {/* <form id="contactform" action="https://formsubmit.io/send/karguel1995@gmail.com" method="POST">
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
          </form> */}

        </div>
      </div>
    </div >
  );
}

export default Contact;