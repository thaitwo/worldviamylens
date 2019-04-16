import React from "react"
import { Link } from "gatsby"
import { Image } from "../components/Image.js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"

const AboutPage = () => (
  <Layout>
    <SEO title="Page two" />

    <Header pageTitle="About" bgFile="myanmar.jpg"/>
    <div class="container">
      <div style={{display: `flex`, alignItems: `center`}}>
        <div style={{flex: `1`, paddingRight: `64px`}}>
          <Image filename="thai.jpg" />
        </div>
        <div style={{flex: `2`}}>
          <p>Welcome to my photography website! I'm Thai, a photography enthusiast living in Northern California.</p>
          <p>I got into photography back in 2013 when I bought my first DSLR camera. Ever since, capturing majestic sceneries and memorable life moments have been a hobby and passion of mine.</p>
          <p>Aside from photography, I also enjoy playing tennis and basketball, outdoor activities, building great web products, and traveling.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
