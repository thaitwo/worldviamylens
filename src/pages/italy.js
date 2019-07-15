import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";
import Gallery from "../components/gallery";

export default () => (
  <Layout>
    <SEO title="Italy" />
    <Header pageTitle="Italy" bgFile="italy-1.jpg"/>
    <Gallery directory="italy" />
  </Layout>
)