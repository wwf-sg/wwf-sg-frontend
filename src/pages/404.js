import React from "react"

import SiteLayout from "../components/SiteLayout"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <SiteLayout>
    <div className="container">
      <div className="row">
        <div className="col py-5">
          <Seo title="404: Not found" />
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </div>
  </SiteLayout>
)

export default NotFoundPage
