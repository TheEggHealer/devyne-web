import { Link } from 'gatsby'
import React from 'react'
import Github from '../images/media-github.svg'

export default function Footer() {
  return (
    <footer>
      <ul className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <a href="https://github.com/TheEggHealer" className="social-media"><Github /></a>
      <p>Copyright 2021 © Devyne Software</p>
    </footer>
  )
}
