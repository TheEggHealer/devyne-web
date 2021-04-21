import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout'
import AndroidIcon from '../../images/android_icon.svg'
import IOSIcon from '../../images/ios_icon.svg'
import * as styles from '../../styles/projects.module.css'

const Projects = ({data}) => {
  const projects = data.projects.nodes;
  const files = data.files.nodes;
  console.log(data);

  return (
    <Layout>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <h1>My projects</h1>
      <div className={styles.projects}>
        {projects.map(project => {
          const backgroundGradient = `radial-gradient(
            at top left,
            #${project.frontmatter.grad_from} 0%,
            #${project.frontmatter.grad_to} 100%
          )`
          return (
            <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
              <div style={{background: backgroundGradient}}>
                <img src={files.find((e) => e.name===project.frontmatter.thumb).publicURL} />
                <div className={styles.platform}>
                  {project.frontmatter.platform.map((p) => 
                    {
                      if(p==='android') return <AndroidIcon />
                      else return <IOSIcon />
                    }
                  )}
                </div>
                <div className={styles.text}>
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query Projects {
    projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb
          grad_from
          grad_to
          platform
          date
        }
        id
      }
    }
    files: allFile(filter: {extension: {eq: "svg"}}) {
      nodes {
        publicURL
        name
      }
    }
  }
`
