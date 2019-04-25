import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/Header";
import Gallery from "../components/gallery";

export default () => (
  <Layout>
    <SEO title="Myanmar" />
    <Header pageTitle="Myanmar" bgFile="myanmar-1.jpg"/>
    <Gallery directory="myanmar" />
  </Layout>
)