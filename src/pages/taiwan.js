import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/Header";
import Gallery from "../components/gallery";

export default () => (
  <Layout>
    <SEO title="Taian" />
    <Header pageTitle="Taian" bgFile="taiwan-1.jpg"/>
    <Gallery directory="taiwan" />
  </Layout>
)