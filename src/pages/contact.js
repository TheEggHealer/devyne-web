import React from 'react'
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>Contact me</title>
      </Helmet>
      <h1>Contact me</h1>
      <div>
        <p>You can contact me at <a href="mailto:jonathan.runeke@hotmail.com">jonathan.runeke@hotmail.com</a></p>
        <p className={styles.error}>The form below does not work yet!</p>
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
