import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react'
import Layout from '../components/Layout'
import useWindowDimensions from '../components/useWindowDimensions';
import * as styles from '../styles/about.module.scss'
import Devyne from '../images/devyne-software.svg'
import { Helmet } from 'react-helmet';

export default function About({ data }) {
  const image = data.file;

  const [readMoreMe, setReadMoreMe] = useState(false);
  const [readMoreDevyne, setReadMoreDevyne] = useState(false);
  const { width } = useWindowDimensions();

  if (width > 850 && !readMoreMe) setReadMoreMe(true);
  if (width > 850 && !readMoreDevyne) setReadMoreDevyne(true);

  const handleMore = (e, section) => {
    if (section === 0) setReadMoreMe(!readMoreMe);
    else if (section === 1) setReadMoreDevyne(!readMoreDevyne);
  }

  return (
    <Layout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className={styles.me}>
        <GatsbyImage image={getImage(image)} alt="Portrait" className={styles.portrait} />
        <article>
          <h1>This is me</h1>
          <div className={styles.content}>
            <p>Hi, my name is <span>Jonathan Runeke</span>. I’m a 21 year old student from Sweden with a passion for software development and design. </p>
            {
              readMoreMe && (
                <div className="more">
                  <p>For around 12 years I have been teaching myself programming by making games, simulations, apps and much more. Currently, I’m studying computer science and engineering at <span>Lunds Tekniska Högskola</span> with 3 out of 5 years left.</p>
                  <p>Other than developing software I love to play guitar, play any sport or hang out with friends and play boardgames or watch movies. </p>   
                </div>
              )
            }
            <p className={styles.readMore} onClick={(e) => handleMore(e, 0)}>{readMoreMe ? 'Read less' : 'Read more'}</p>
          </div>
        </article>
      </div>
      <div className={styles.devyne}>
        <article>
          <h1>This is Devyne</h1>
          <div className={styles.content}>
            <p>Devyne Software is a project that I started to help others create new platforms for their audiences to use. </p>
            {
              readMoreDevyne && (
                <div className="more">
                  <p>I’m here to help you with designing and building the perfect app or website with your users experience in mind.</p>
                  <p>If you’re intrested in hiring me, or have any questions, send an email or message me directly through the contact form.</p>   
                </div>
              )
            }
            <p className={styles.readMore} onClick={(e) => handleMore(e, 1)}>{readMoreDevyne ? 'Read less' : 'Read more'}</p>
          </div>
        </article>
        <Devyne />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query About {
    file(relativePath: {eq: "portrait.JPG"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
