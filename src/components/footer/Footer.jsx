import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer id="footer">
      <h2>Muslim Hashim</h2>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Muslim Hashim. All rights reserved.</p>
    </footer>
  )
}

export default Footer
