import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <div>
        <h1>404</h1>
        <p>Sorry, that page does not exist.</p>
      </div>
    </Layout>
  )
}
