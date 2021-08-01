import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <>
      <header>
        <div className="header-wrapper">
          <div className="logo"></div>
          <div className="header-contact">
            <div className="header-contact-info">Email: pyrcrafts@gmail.com</div>
            <div className="header-contact-info">Telefon: +48 600 004 736</div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;