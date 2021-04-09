import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/project-details.module.css'
import '../styles/slider.css'
import { graphql, Link, navigate } from 'gatsby';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ProjectDetails = ({ data }) => {
  console.log(data);

  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter
  const images = data.allFile.nodes;
  var mouseDown = false;
  var dragging = false;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    dotsClass: "dots",
  }

  const handleClick = (e, url) => {
    if (!dragging) {
      console.log('Clicked on ' + url);
      window.location.href = url;
    }

    dragging = false;
    mouseDown = false;
  }

  return (
    <Layout>
      <div className={styles.slide}>
          <Slider {...settings}>
          {
            images.map((image, index) => {
              return (
                
                <div className={styles.image}>
                  <GatsbyImage style={{cursor: 'pointer'}}image={getImage(image)} alt="img" key={index} onMouseUp={(e) => handleClick(e, image.publicURL)} onMouseMove={(e) => { if(mouseDown) dragging=true }} onMouseDown={(e) => { mouseDown = true }} />
                </div>
                
              )
            })
          }
            
          </Slider>
        </div>
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
  query Details($slug: String, $dir: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        stack
      }
    }
    allFile(filter: {relativeDirectory: {eq: $dir}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 300, quality: 100)
        }
        publicURL
      }
    }
  }
`