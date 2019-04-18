import React from "react"
import { Image } from "../components/Image.js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import 'masonry-layout'

export default () => (
  <Layout>
    <SEO title="Iceland" />

    <Header pageTitle="Iceland" bgFile="iceland-1.jpg"/>
    
    <div className="grid-masonry" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": ".grid-sizer" }'>
      <div className="grid-sizer"></div>
      <div className="grid-item">
        <Image filename="iceland-2.jpg" width="300" height="200" />
      </div>
      <div className="grid-item">
        <Image filename="iceland-3.jpg" />
      </div>
      <div className="grid-item">
        <Image filename="iceland-8.jpg" />
      </div>
      <div className="grid-item">
        <Image filename="iceland-5.jpg" />
      </div>
      <div className="grid-item">
        <Image filename="iceland-6.jpg" />
      </div>
      <div className="grid-item">
        <Image filename="iceland-7.jpg" />
      </div>
      <div className="grid-item">
        <Image filename="iceland-4.jpg" />
      </div>
      <div className="grid-item">
        <Image filename="iceland-9.jpg" />
      </div>
      <div className="grid-item">
        <Image filename="iceland-10.jpg" />
      </div>
    </div>
    
  </Layout>
)

