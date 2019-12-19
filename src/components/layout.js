/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Image } from "../components/image.js";
import { StaticQuery, graphql } from "gatsby";

// import Header from "./Header"
import "../styles/styles.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div>
          <main className="main">
            {children}
          </main>
          <footer className="footer">
            <Image className="footer-logo" filename="logo-alt.png" />
            <div>World Via My Lens</div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout