import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Gallery from "../components/gallery";

export default () => (
  <Layout>
    <SEO title="New York" />
    <Header pageTitle="New York" bgFile="newyork-1.jpg"/>
    <Gallery directory="newyork" />
  </Layout>
)