import { Link } from 'gatsby'
import React, { useState } from 'react'
import Logo from '../images/autone_home.svg'

export default function Navbar() {

  const [showNav, setShowNav] = useState(false);
  const [animation, setAnimation] = useState(false);

  const handleBurger = (e) => {
    setShowNav(!showNav);

    setAnimation(!showNav ? true : false);
  }

  return (
    <nav>
      <Link to="/"><Logo className="logo" /></Link>
      <ul className={showNav ? "links nav-active" : "links"}>
        <li><Link to="/" className={animation ? "nav-item-anim" : ""}>Home</Link></li>
        <li><Link to="/about" className={animation ? "nav-item-anim" : ""}>About</Link></li>
        <li><Link to="/projects" className={animation ? "nav-item-anim" : ""}>Portfolio</Link></li>
        <li><Link to="/contact" className={animation ? "button nav-item-anim" : "button"}>Contact</Link></li>
      </ul>
      <div className="burger" onClick={(e) => handleBurger(e)}>
        <div className={showNav ? "line1 active" : "line1"}></div>
        <div className={showNav ? "line2 active" : "line2"}></div>
        <div className={showNav ? "line3 active" : "line3"}></div>
      </div>
    </nav>
  )
}
