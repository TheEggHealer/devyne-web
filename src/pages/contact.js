import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/contact.module.css'

export default function contact() {
  return (
    <Layout>
      <h1>Contact me</h1>
      <div>
        <p>You can contact me at <a href="mailto:contact@devyne.se">contact@devyne.se</a>, or type your message below.</p>
      </div>
      <div className={styles.form_parent}>
        <div className={styles.form}>
          <form>
            <label htmlF
            por="name">Name</label>
            <input type="text" id='name'/>
            <label htmlFor="email">Email</label>
            <input type='text' id='email'/>
            <label htmlFor="content">Message</label>
            <textarea id='content'/>
            <div className={styles.buttonParent}><button>Send</button></div>
          </form>
        </div>
      </div>
    </Layout>
  )
}