import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <>
      <header>
        <div className="header-wrapper">
          <div className="logo"></div>
          <div className="header-contact">
            <i class="fas fa-envelope"></i>
            <div className="header-contact-info">
              Email:
              <p>pyrcrafts@gmail.com</p></div>
            <i class="fas fa-phone-square-alt"></i>
            <div className="header-contact-info">
              Telefon:
              <p>+48 600 004 736</p></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;