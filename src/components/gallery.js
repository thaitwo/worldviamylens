import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
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

  filterImages() {
    const allImages = this.props.data.images.edges;
    
    // Filter out images from directory indicated
    const galleryImages = allImages.filter((image) => {
      const filePath = image.node.relativePath;
      // Get directory name
      const directory = filePath.split('/')[0];
      // Return images that exist in directory
      return directory === this.props.directory;
    });
    
    const imagesHTML = galleryImages.map((image, index) => {
      const imageSize = image.node.childImageSharp.sizes;
      return (
        <li className="grid-masonry-item" key={index}>
          <Img sizes={imageSize} />
        </li>
      );
    });
    return imagesHTML;
  }

  render() {
    return (
      <ul className="grid-masonry">
        <li className="grid-masonry-sizer"></li>
        <li className="masonry-gutter-sizer"></li>
        {this.filterImages()}
      </ul>      
    )
  }
}

export default (props) => (
  <StaticQuery
    query = {graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}

    render = {(data) => (
      <Gallery data={data} directory={props.directory} />
    )}
  />
)