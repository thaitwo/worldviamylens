import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ListLink from "./top-nav.js"

const Header = () => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div style={{ display: `flex`, justifyContent: `space-between`, alignItems: `center`, margin: `0 auto`, padding: `1rem 2.5rem` }}>
      <h1 style={{ lineHeight: `2rem`, margin: 0 }}>
        <Link to="/" style={{ color: `white`, display: `block`, fontSize: `1.1rem`, fontWeight: `900`, lineHeight: `2rem`, textDecoration: `none`, textTransform: `lowercase` }}>
          worldviamylens
        </Link>
      </h1>
      <ul style={{ float: `right`, marginBottom: `0` }}>
        <ListLink to="/#gallery">Gallery</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/blog">Blog</ListLink>
        <li style={{ display: `inline-block` }}><a href="https://www.instagram.com/worldviamylens" target="_blank" style={{ color: `white`, opacity: `.7`, padding: `.2rem 1rem`, textDecoration: `none` }}>Instagram</a></li>
      </ul>
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
