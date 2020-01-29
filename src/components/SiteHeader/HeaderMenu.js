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

  query GET_HEADER_MENU_ITEMS {
    wpgraphql {
      menuItems(where: { location: PRIMARY }) {
        nodes {
          ...MenuFields
          childItems {
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
          <Link
            title={menuItem.label}
            className={`nav-link`}
            to={createLocalLink(menuItem.url)}
          >
            <div>{menuItem.label}</div>
          </Link>
        ) : (
          menuItem.label
        )}
      </li>
    )
  }
}

const renderSubMenu = menuItem => (
  <li className="nav-item dropdown" key={menuItem.id}>
    <Link
      className="nav-link dropdown-toggle"
      to={createLocalLink(menuItem.url)}
      title={menuItem.label}
    >
      {menuItem.label}
    </Link>
    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
      {menuItem.childItems.nodes.map(item => (
        <Link
          key={item.id}
          className="dropdown-item px-3"
          to={createLocalLink(item.url)}
          title={item.label}
        >
          {item.label}
        </Link>
      ))}
    </div>
  </li>
)

const HeaderMenu = ({ location }) => (
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

export default HeaderMenu
