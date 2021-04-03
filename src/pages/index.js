import React from "react"
import Layout from "../components/Layout"
import Logo from '../images/logo.svg'
import * as styles from '../styles/home.module.css'

export default function Home() {
  return <Layout>
    <header className={styles.header}>
      <Logo className={styles.logo} />
      <div>
        <h2 className={styles.typewriter}>autone.</h2>
        <h3>software.</h3>
      </div>
    </header>
  </Layout>
}
