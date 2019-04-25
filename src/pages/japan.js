import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/Header";
import Gallery from "../components/gallery";

export default () => (
  <Layout>
    <SEO title="Japan" />
    <Header pageTitle="Japan" bgFile="japan-1.jpg"/>
    <Gallery directory="japan" />
  </Layout>
)