import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/about.module.scss'

import { Helmet } from 'react-helmet';

export default function Privacy() {
  return (
    <Layout>
      <Helmet>
        <title>Blomstra - Privacy</title>
      </Helmet>
      <div className={styles.me}>
        <article>
          <h1>Blomstra - Privacy Policy</h1>
          <div className={styles.content}>
            <p>Will be updated soon.</p>
          </div>
        </article>
      </div>
    </Layout>
  )
}