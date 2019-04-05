import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "../components/button"
// import buttonStyles from "../components/css/button.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ 
      marginBottom: `1rem`,
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
        zIndex: `1`
      }}>
        <div>
          <h1 style={{ 
            color:`white`,
            fontSize: `4.5rem`,
            fontWeight: `900`,
            textShadow: `0 4px 8px rgba(0,0,0,.6)`
          }}>Iceland</h1>  

          <Button to="/about">View Gallery</Button>
        </div>
        
      </div>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
