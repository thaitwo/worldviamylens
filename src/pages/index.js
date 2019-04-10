import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { Image } from "../components/Image.js"
import Gallerybox from "../components/Gallerybox.js"

import SEO from "../components/seo"
import Button from "../components/button"
import styles from "../components/css/gallery.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ 
      position: `relative`
    }}>
      <div style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        position: `absolute`,
        top: `0`,
        right: `0`,
        bottom: `0`,
        left: `0`,
        textAlign: `center`,
        zIndex: `2`
      }}>
        <div>
          <h1 style={{ 
            color:`white`,
            fontSize: `4.5rem`,
            fontWeight: `900`,
            textShadow: `0 4px 8px rgba(0,0,0,.6)`
          }}>Iceland</h1>  

          <Button to="/#gallery">View Gallery</Button>
        </div>
        
      </div>
      <div style={{
        height: `100vh`,
        padding: `1rem`,
        position: `relative`
      }}>
        <div className={styles.overlayFeaturedImage}></div>
        <Image className="featuredImage" filename="iceland-1.jpg" sizes={{aspectRatio: 4/3}} />
      </div>
      
      
    </div>
    <div id="gallery" style={{
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `space-between`,
      margin: `0 1rem 2rem`
    }}>
      <Gallerybox filename="bali.jpg" title="Indonesia" href="/about" alt="Tegalalang Rice Terrace in Bali, Indonesia" />
      <Gallerybox filename="myanmar.jpg" title="Myanmar" href="/about" alt="Taung Wine Mountain" />
      <Gallerybox filename="vietnam.jpg" title="Vietnam" href="/about" alt="Fish market in Vietnam" />
      <Gallerybox filename="taiwan.jpg" title="Taiwan" href="/about" alt="Taiwan" />
      <Gallerybox filename="japan.jpg" title="Japan" href="/about" alt="Japan" />
      <Gallerybox filename="thailand.jpg" title="Thailand" href="/about" alt="Thailand" />
      <Gallerybox filename="srilanka.jpg" title="Sri Lanka" href="/about" alt="Sri Lanka" />
      <Gallerybox filename="california.jpg" title="California" href="/about" alt="California" />
      <Gallerybox filename="newyork.jpg" title="New York" href="/about" alt="New York" />
    </div>
  </Layout>
)

export default IndexPage
