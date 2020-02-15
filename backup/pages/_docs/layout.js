/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <div>
      <header className="container">
        <Helmet>
          {/* <base href="https://wwf-sg.github.io/wwf-sg-frontend/" /> */}
        </Helmet>
        {/* <nav>
          <ul>
            <li>
              <Link to="/_docs/button">Buttons</Link>
            </li>
            <li>
              <Link to="/_docs/section">Section</Link>
            </li>
          </ul>
        </nav> */}
      </header>
      <div className="container">
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
