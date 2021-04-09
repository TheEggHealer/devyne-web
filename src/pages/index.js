import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Logo from '../images/logo.svg'
import * as styles from '../styles/home.module.scss'

export default function Home() {

  const handleMouseMove = (e) => {
    const button = e.target;

    e.target.style.setProperty('--x', `${e.pageX - button.offsetLeft}px`)
    e.target.style.setProperty('--y', `${e.pageY - button.offsetTop}px`)
  }

  return <Layout>
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <div>
        <h2 className={styles.typewriter}><span>dev</span>yne.</h2>
        <h3>software.</h3>
      </div>
    </header>
    <main>
      <h1><span className={styles.first}>App and Web</span> - <span className={styles.second}>Developer and Designer</span></h1>
      <div>
        <p>Welcome to Devyne. I'm here to help you and your project reach more people.</p>
      </div>
      <Link to="/projects" className={styles.button} onMouseMove={(e) => handleMouseMove(e)}>
        <span>Check out my portfolio!</span>
      </Link>
    </main>
    </Layout>
}
