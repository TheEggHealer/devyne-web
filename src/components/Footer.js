import { Link } from 'gatsby'
import React from 'react'
import Github from '../images/media-github.svg'
import LinkedIn from '../images/media-linkedin.svg'
import Instagram from '../images/media-instagram.svg'

export default function Footer() {
  return (
    <footer>
      <ul className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="media">
        <a href="https://github.com/TheEggHealer" className="social-media"><Github /></a>
        <a href="https://www.linkedin.com/in/jonathanruneke/" className="social-media"><LinkedIn /></a>
        <a href="https://www.instagram.com/jonathanruneke/" className="social-media"><Instagram /></a>
      </div>
      <p>Copyright 2021 © Devyne Software</p>
    </footer>
  )
}
