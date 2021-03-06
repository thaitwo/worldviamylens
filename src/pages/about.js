import React from "react"
import { Image } from "../components/image.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />

    <Header pageTitle="About" bgFile="myanmar-1.jpg"/>
    <div className="container">
      <div className="sectionPad">
        <div className="about-welcome-container">
          <div className="about-welcome-image">
            <Image filename="thai.jpg" />
          </div>
          <div className="about-welcome-text">
            <h2>Welcome to WorldViaMyLens!</h2>
            <p>I'm Thai, a photography enthusiast based in Northern California.</p>
            <p>I got into photography back in 2013 when I bought my first DSLR camera. Ever since, capturing majestic sceneries and memorable life moments have been a hobby and passion of mine.</p>
            <p>I built this website to share my travel photography which I hope can inspire others to travel and take cool photos.</p>
            <p>Aside from photography, I also enjoy playing tennis and basketball, outdoor activities, building great web products, and traveling.</p>
          </div>
        </div>
      </div>
      <div className="sectionPad">
        <h2>My Gear</h2>
        <ul>
          <li>Canon EOS 5D Mark III</li>
          <li>Canon EF 17-40 mm f/4</li>
          <li>Canon EF 24-70 mm f/2.8</li>
          <li>Canon EF 50 mm f/1.8</li>
          <li>GoPro HERO 7 Black</li>
          <li>Apple iPhone Xr</li>
          <li>Incase DSLR Pro Pack</li>
          <li>MeFoto BackPacker Travel Tripod</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default AboutPage
