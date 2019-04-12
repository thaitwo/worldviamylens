import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"

const AboutPage = () => (
  <Layout>
    <SEO title="Page two" />

    <Header pageTitle="About" bgFile="myanmar.jpg"/>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
