import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { Image } from "../components/Image.js"
import Gallerybox from "../components/Gallerybox.js"

import SEO from "../components/seo"
import headerStyles from "../styles/_header.module.scss"
import ListLink from "../components/Topnav.js"
import galleryStyles from "../styles/_gallery.module.scss"
import { Link } from "gatsby"
import Button from "../components/button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <header className={headerStyles.headerLarge}>
      <div style={{position: `relative`}}>
        <div className={headerStyles.topnav}>
          <h1 className={headerStyles.logo}>
            <Link to="/" style={{ color: `white`, display: `block`, fontSize: `1.1rem`, fontWeight: `900`, lineHeight: `2rem`, textDecoration: `none`, textTransform: `lowercase` }}>
              worldviamylens
            </Link>
          </h1>
          <ul className={headerStyles.topnavList}>
            <ListLink to="/#gallery">Galleries</ListLink>
            <ListLink to="/about">About</ListLink>
            <ListLink to="/blog">Blog</ListLink>
            <li style={{ display: `inline-block` }}><a href="https://www.instagram.com/worldviamylens" style={{ color: `white`, padding: `.2rem 1rem`, textDecoration: `none` }}>Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className={headerStyles.heroImageContainer}>
        <div className={headerStyles.titleContainer}>
          <div className={headerStyles.titleInnerContainer}>
            <h1 className={headerStyles.title}>Iceland</h1>
            <Button to="/iceland">View Gallery</Button>
          </div>
        </div>
        <div className={galleryStyles.overlayFeaturedImage}></div>
        <Image className={headerStyles.featuredImage} filename="iceland-1.jpg" sizes={{aspectRatio: 4/3}} />
      </div>
    </header>

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