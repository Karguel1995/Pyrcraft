import React from "react";
import './Navigation.scss'


const Navigation = () => {
  return (
    <nav>
      <ul className="navigation-contener">
        <li className="navigation-list">Strona główna</li>
        <li className="navigation-list">O nas</li>
        <li className="navigation-list">Galeria</li>
        <li className="navigation-list">Kontakt</li>
      </ul>
    </nav>
  );
}

export default Navigation;