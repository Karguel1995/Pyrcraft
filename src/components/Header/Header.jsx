import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <>
      <header>
        <div className="header-wrapper">
          <div className="logo"></div>
          <div className="header-contact">
            <div className="header-contact-info">Email: pyrk@pyrcrafts.pl</div>
            <div className="header-contact-info">Telefon: pyrk pyrk pyrk</div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;