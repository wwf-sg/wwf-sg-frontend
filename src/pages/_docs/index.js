import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Docs = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Components Documentation</h1>
    <ul>
      <li>
        <Link to="/_docs/button">Buttons</Link>
      </li>
      <li>
        <Link to="/_docs/section">Section</Link>
      </li>
    </ul>
  </Layout>
)

export default Docs
