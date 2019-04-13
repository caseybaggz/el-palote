// @flow

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const indexPage: React.node = (
  <Layout>
    <SEO title="El Palote Foods | Home" />
  </Layout>
);

type Props = {};

function IndexPage(props: Props): React.node {
  return indexPage;
}

export default React.memo(IndexPage)
