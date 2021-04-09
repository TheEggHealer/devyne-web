import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/project-details.module.css'
import { graphql } from 'gatsby';

const ProjectDetails = ({ data }) => {
  console.log(data);

  const { html } = data.markdownRemark
  const {title, stack} = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.stack}>{stack}</h3>
        <div className={styles.html} dangerouslySetInnerHTML={{__html: html}}/>
      </div>
    </Layout>
  )
}

export default ProjectDetails;

export const query = graphql`
  query Details($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        stack
      }
    }
  }
`