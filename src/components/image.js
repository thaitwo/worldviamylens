import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

export const FeaturedImage = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "iceland-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img 
      fluid={data.image.childImageSharp.fluid}
    />}
  />
)

export const GalleryBox = () => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "bali.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageTwo: file(relativePath: { eq: "myanmar.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
    <Img fluid={data.imageOne.childImageSharp.fluid}/>
    )}
  />
)