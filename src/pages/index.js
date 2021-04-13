import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Hero from '../images/hero-image.svg'
import * as styles from '../styles/home.module.scss'

export default function Home() {

  const handleMouseMove = (e) => {
    const button = e.target;

    e.target.style.setProperty('--x', `${e.pageX - button.offsetLeft}px`)
    e.target.style.setProperty('--y', `${e.pageY - button.offsetTop}px`)
  }

  return <Layout>
    {/* <header className={styles.header}>
      <Hero className={styles.logo}/>  
      <div>
        <h2 className={styles.typewriter}><span>Dev</span>yne.</h2>
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
    </main> */}

    <header>
      <div className={styles.type}>
        <div className={styles.head}>
          <h1><span>App and Web,</span><br/>Developer and<br/>Designer</h1>
        </div>
        <p>I’m here to help you and your project<br/>reach more people.</p>
        <Link to="/projects" className={styles.button} onMouseMove={(e) => handleMouseMove(e)}>
          <span>Check out my portfolio!</span>
        </Link>
      </div>
      <div className={styles.hero}>
        <Hero />
      </div>
    </header>

    </Layout>
}
