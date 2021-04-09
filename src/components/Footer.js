import { Link } from 'gatsby'
import React from 'react'
import Bottom from '../images/bottom.svg'

export default function Footer() {
  return (
    <footer>
      <ul className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <p>Copyright 2021 © Devyne Software AB</p>
    </footer>
  )
}
