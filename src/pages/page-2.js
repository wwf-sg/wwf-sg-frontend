import React from "react"
import { Link } from "gatsby"

import SiteLayout from "../components/SiteLayout"
import Seo from "../components/Seo"

const SecondPage = () => (
  <SiteLayout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </SiteLayout>
)

export default SecondPage
