import React from 'react'

import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer-container">
      <a className="facebook" href="https://www.facebook.com/pyrcrafts"><i class="fab fa-facebook-square"></i> Facebook</a>
      <div className="copyright">
        <span>&#169;</span> Copyright 2021. All Rights Reserved | Website Designed by <a href="https://github.com/Karguel1995"><i class="fab fa-github"></i> Karguel1995</a>
      </div>
    </div>
  )
}

export default Footer