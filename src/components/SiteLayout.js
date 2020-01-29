/**
 * SiteLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import SiteHeader from "./SiteHeader"
import SiteFooter from "./SiteFooter"

const SiteLayout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Helmet>
        {/* <base href="https://wwf-sg.github.io/wwf-sg-frontend/" /> */}
      </Helmet>

      <SiteHeader
        location={location}
        siteTitle={data.site.siteMetadata.title}
      />

      <main>{children}</main>

      <SiteFooter location={location} />
    </div>
  )
}

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteLayout
