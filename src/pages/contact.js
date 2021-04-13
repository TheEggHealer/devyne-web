import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/contact.module.scss'

export default function contact() {

  const handleMouseMove = (e) => {
    const button = e.target;

    e.target.style.setProperty('--x', `${e.pageX - button.offsetLeft}px`)
    e.target.style.setProperty('--y', `${e.pageY - button.offsetTop}px`)
  }


  return (
    <Layout>
      <h1>(WIP) Contact me</h1>
      <div>
        <p>You can contact me at <a href="mailto:contact@devyne.se">contact@devyne.se</a>, or type your message below.</p>
      </div>
      <div className={styles.form_parent}>
        <div className={styles.form}>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id='name'/>
            <label htmlFor="email">Email</label>
            <input type='text' id='email'/>
            <label htmlFor="content">Message</label>
            <textarea id='content'/>
            <div className={styles.buttonParent}><button className={styles.button} onMouseMove={(e) => handleMouseMove(e)}>Send</button></div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
