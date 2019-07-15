import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import imagesLoaded from "imagesloaded";
import $ from "jquery";
import PhotoSwipe from "photoswipe";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

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

    // this.getPhotoSwipeImages();
    this.activateViewer();
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
      const filePath = image.node.childImageSharp.sizes.src;

      return (
        <li className="grid-masonry-item" key={index}>
          <a href={filePath} itemProp="contentUrl">
            <Img sizes={imageSize} />
          </a>
        </li>
      );
    });
    return imagesHTML;
  }

  photoswipeHTML() {
    return (
      <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="pswp__bg"></div>
          <div className="pswp__scroll-wrap">

              <div className="pswp__container">
                  <div className="pswp__item"></div>
                  <div className="pswp__item"></div>
                  <div className="pswp__item"></div>
              </div>

              <div className="pswp__ui pswp__ui--hidden">

                  <div className="pswp__top-bar">
                      <div className="pswp__counter"></div>
                      <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
                      <button className="pswp__button pswp__button--share" title="Share"></button>
                      <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                      <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                      <div className="pswp__preloader">
                          <div className="pswp__preloader__icn">
                            <div className="pswp__preloader__cut">
                              <div className="pswp__preloader__donut"></div>
                            </div>
                          </div>
                      </div>
                  </div>

                  <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                      <div className="pswp__share-tooltip"></div> 
                  </div>

                  <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                  </button>

                  <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                  </button>

                  <div className="pswp__caption">
                      <div className="pswp__caption__center"></div>
                  </div>

              </div>

          </div>

      </div>
    )
  }

  getPhotoSwipeImages() {
    const $galleryContainer = $('.grid-masonry');

    const images = [];

    $galleryContainer.find('li.grid-masonry-item a').each(function() {
      const smallImage = $(this).find('.gatsby-image-wrapper img')[0];
      const image = $(this).find('.gatsby-image-wrapper picture img');
      const smallWidth = smallImage.clientWidth;
      const smallHeight = smallImage.clientHeight;
      const largeHeight = ((smallHeight/smallWidth) * 1200);
      
      // Get filepath for large version of image
      let url = image.prevObject[0].text;
      url = url.split(',')[5].split(' ')[0];

      const item = {
        src: url,
        w: 1200,
        h: largeHeight
      }
      images.push(item);
    });

    return images;
  }

  activateViewer() {
    const $pswp = $('.pswp')[0];
    const items = this.getPhotoSwipeImages();

    $('.grid-masonry-item a').on('click', function(event) {
      event.preventDefault();

      const options = {
        index: $(this).parent('li').index() - 2,
        bgOpacity: 0.9,
        history: false,
        showHideOpacity: true
      }
      // Initializes and opens PhotoSwipe
      const gallery = new PhotoSwipe( $pswp, PhotoSwipeUI_Default, items, options );
      gallery.init();
    })
  }

  render() {
    return (
      <div>
        <ul className="grid-masonry">
          <li className="grid-masonry-sizer"></li>
          <li className="masonry-gutter-sizer"></li>
          {this.filterImages()}
        </ul>      
        {this.photoswipeHTML()}
      </div>
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