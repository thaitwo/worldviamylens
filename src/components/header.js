import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ListLink from "./top-nav.js"

const Header = () => (
  <header
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,0))`,
      marginBottom: `1.45rem`,
      position: `absolute`,
      top: `1rem`,
      right: `1rem`,
      left: `1rem`,
      zIndex: `2`
    }}
  >
    <div style={{
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
      margin: `0 auto`,
      padding: `1rem 1.5rem 1rem 2rem`
    }}>
      <h1 style={{ lineHeight: `2rem`, margin: 0 }}>
        <Link to="/" style={{ color: `white`, display: `block`, fontSize: `1.1rem`, fontWeight: `900`, lineHeight: `2rem`, textDecoration: `none`, textTransform: `lowercase` }}>
          worldviamylens
        </Link>
      </h1>
      <ul style={{ float: `right`, marginBottom: `0` }}>
        <ListLink to="/#gallery">Galleries</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/blog">Blog</ListLink>
        <li style={{ display: `inline-block` }}><a href="https://www.instagram.com/worldviamylens" style={{ color: `white`, padding: `.2rem 1rem`, textDecoration: `none` }}>Instagram</a></li>
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
