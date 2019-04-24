import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Image } from "../components/Image.js"
import ListLink from "./Topnav.js"
import galleryStyles from "../styles/_gallery.module.scss"
import headerStyles from "../styles/_header.module.scss"

const Header = (props) => (
  <header className={headerStyles.header}>
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
        </ul>
      </div>
    </div>
    <div className={headerStyles.heroImageContainer}>
      <div className={headerStyles.titleContainer}>
        <div className={headerStyles.titleInnerContainer}>
          <h1 className={headerStyles.title}>{props.pageTitle}</h1>
        </div>
      </div>
      <div className={galleryStyles.overlayFeaturedImage}></div>
      <Image className={headerStyles.featuredImage} filename={props.bgFile} sizes={{aspectRatio: 4/3}} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
