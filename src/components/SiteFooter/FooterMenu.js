import React, { Fragment } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { createLocalLink } from "../../utils"

const MENU_QUERY = graphql`
  fragment MenuFields on WPGraphQL_MenuItem {
    id
    label
    url
    connectedObject {
      __typename
    }
  }

  query GET_MENU_ITEMS {
    wpgraphql {
      menuItems(where: { location: FOOTER }) {
        nodes {
          ...MenuFields
          childItems {
            nodes {
              ...MenuFields
            }
          }
        }
      }
    }
  }
`

const renderMenuItem = menuItem => {
  const link = createLocalLink(menuItem.url)
  if (menuItem.childItems && menuItem.childItems.nodes.length) {
    return renderSubMenu(menuItem)
  } else {
    return (
      <li className="nav-item" key={menuItem.id}>
        {link ? (
          <Link className="nav-link" to={createLocalLink(menuItem.url)}>
            <span
              dangerouslySetInnerHTML={{
                __html: menuItem.label,
              }}
            ></span>
          </Link>
        ) : (
          <span
            dangerouslySetInnerHTML={{
              __html: menuItem.label,
            }}
          ></span>
        )}
      </li>
    )
  }
}

const renderSubMenu = menuItem => (
  <div
    className="col-12 col-md-6 mb-md-4 mb-lg-0 col-lg-3"
    title={menuItem.label}
    key={menuItem.id}
  >
    <p className="font-weight-bold mb-2">{menuItem.label}</p>
    <nav className="d-none d-md-block" title={menuItem.label}>
      <ul className="list-unstyled nav flex-column">
        {menuItem.childItems.nodes.map(item => renderMenuItem(item))}
      </ul>
    </nav>
  </div>
)

const FooterMenu = ({ location }) => (
  <StaticQuery
    query={MENU_QUERY}
    render={data => {
      if (data.wpgraphql.menuItems) {
        return (
          <Fragment>
            {data.wpgraphql.menuItems.nodes.map(menuItem => {
              if (menuItem.childItems.nodes.length) {
                return renderSubMenu(menuItem)
              } else {
                return renderMenuItem(menuItem)
              }
            })}
          </Fragment>
        )
      } else {
        return null
      }
    }}
  />
)

export default FooterMenu
