import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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
        zIndex: `2`
       }}>
        <h1 style={{ 
          color:`white`,
          fontSize: `4.5rem`,
          fontWeight: `900`
        }}>Iceland</h1>  
      </div>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
