import React from "react";
import { Image } from "../components/Image.js";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/Header";
import imagesLoaded from "imagesLoaded";

class Gallery extends React.Component {

  componentDidMount() {
    const Masonry = require('masonry-layout');

    // Initialize Masonry gallery
    const container = document.querySelector('.grid-masonry');
    const masonrygGallery = new Masonry( container, {
      itemSelector: '.grid-masonry-item',
      columnWidth: '.grid-masonry-sizer',
      percentPosition: true,
      gutter: '.masonry-gutter-sizer'
    });
    // Load all images before displaying images to prevent image overlaps
    imagesLoaded(container).on('progress', () => {
      masonrygGallery.layout();
    });
  }

  render() {
    return (
      <Layout>
          <SEO title="Iceland" />

          <Header pageTitle="Iceland" bgFile="iceland-1.jpg"/>
          
          <ul className="grid-masonry">
            <li className="grid-masonry-sizer"></li>
            <li className="masonry-gutter-sizer"></li>
            <li className="grid-masonry-item">
              <Image filename="iceland-3.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-4.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-5.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-12.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-2.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-6.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-7.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-8.jpg" />
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
              <Image filename="iceland-13.jpg" />
            </li>
            <li className="grid-masonry-item">
              <Image filename="iceland-14.jpg" />
            </li>
          </ul>
        </Layout>
    )
  }
}

export default Gallery;