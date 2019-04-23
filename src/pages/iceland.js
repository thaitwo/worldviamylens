import React from "react";
import { Image } from "../components/Image.js";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/Header";

class Gallery extends React.Component {

  componentDidMount() {
    const Masonry = require('masonry-layout');
    
    // Initialize Masonry gallery
    const container = document.querySelector('.grid-masonry');
    const gall = new Masonry( container, {
      itemSelector: '.grid-masonry-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
  }

  render() {
    return (
      <Layout>
          <SEO title="Iceland" />

          <Header pageTitle="Iceland" bgFile="iceland-1.jpg"/>
          
          <ul className="grid-masonry">
            <li className="grid-sizer"></li>
            <li className="grid-masonry-item">
              <Image filename="iceland-2.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-3.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-8.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-5.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-4.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-7.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-6.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-9.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-10.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-11.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-12.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-13.jpg" />
            </li>
          </ul>
        </Layout>
    )
  }
}

export default Gallery;