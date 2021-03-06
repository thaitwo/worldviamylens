import React from "react";

import Layout from "../components/layout";
import { Image } from "../components/image.js";
import Gallerybox from "../components/gallerybox.js";

import SEO from "../components/seo";
import headerStyles from "../styles/_header.module.scss";
import ListLink from "../components/Topnav.js";
import galleryStyles from "../styles/_gallery.module.scss";
import { Link } from "gatsby";
import Button from "../components/button";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <header className={headerStyles.headerLarge}>
      <div style={{position: `relative`}}>
        <div className={headerStyles.topnav}>
          <h1 className={headerStyles.logo}>
            <Link className="logo" to="/" style={{ color: `white`, display: `block`, fontSize: `0.1rem`, fontWeight: `900`, lineHeight: `2rem`, textDecoration: `none`, textTransform: `lowercase` }}>
              <Image filename="logo.png" />
            </Link>
          </h1>
          <ul className={headerStyles.topnavList}>
            <ListLink to="/#gallery">Galleries</ListLink>
            <ListLink to="/about">About</ListLink>
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
      justifyContent: `flex-start`,
      margin: `0 1rem 2rem`
    }}>
      <Gallerybox filename="california-1.jpg" title="California" href="/california" alt="Bay Bridge" />
      <Gallerybox filename="indonesia-1.jpg" title="Indonesia" href="/indonesia" alt="Tegalalang Rice Terrace in Bali, Indonesia" />
      <Gallerybox filename="italy-1.jpg" title="Italy" href="/italy" alt="Taung Wine Mountain" />
      <Gallerybox filename="japan-1.jpg" title="Japan" href="/japan" alt="Japan" />
      <Gallerybox filename="malaysia-1.jpg" title="Malaysia" href="/malaysia" alt="Malaysia" />
      <Gallerybox filename="myanmar-1.jpg" title="Myanmar" href="/myanmar" alt="Taung Wine Mountain" />
      <Gallerybox filename="newyork-1.jpg" title="New York" href="/newyork" alt="New York" />
      <Gallerybox filename="srilanka-1.jpg" title="Sri Lanka" href="/srilanka" alt="Sri Lanka" />
      <Gallerybox filename="taiwan-1.jpg" title="Taiwan" href="/taiwan" alt="Taiwan" />
      <Gallerybox filename="thailand-1.jpg" title="Thailand" href="/thailand" alt="Thailand" />
      <Gallerybox filename="vietnam-1.jpg" title="Vietnam" href="/vietnam" alt="Fish market in Vietnam" />
    </div>
  </Layout>
)

export default IndexPage