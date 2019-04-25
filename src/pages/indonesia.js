import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/Header";
import Gallery from "../components/gallery";

export default () => (
  <Layout>
    <SEO title="Indonesia" />
    <Header pageTitle="Indonesia" bgFile="indonesia-1.jpg"/>
    <Gallery directory="indonesia" />
  </Layout>
)