import React, { Fragment } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { createLocalLink } from "../../utils"

import SHstyle from "./style.module.scss"

const MENU_QUERY = graphql`
  fragment HeaderMenuFields on WPGraphQL_MenuItem {
    id
    label
    url
    connectedObject {
      __typename
      ... on WPGraphQL_Campaign {
        campaignsTaxonomyFields {
          featureColor
          featureIcon {
            altText
            srcSet(size: THUMBNAIL)
            sourceUrl(size: THUMBNAIL)
          }
        }
      }
    }
  }

  query GET_HEADER_MENU_ITEMS {
    wpgraphql {
      menuItems(where: { location: PRIMARY }) {
        nodes {
          ...HeaderMenuFields
          childItems {
            nodes {
              ...HeaderMenuFields
              childItems {
                nodes {
                  ...HeaderMenuFields
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
      <li className={`nav-item ${SHstyle.navItem}`} key={menuItem.id}>
        {link ? (
          <Link
            title={menuItem.label}
            className={`nav-link px-3 px-lg-0 ${SHstyle.navLink}`}
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
  <li
    className={`nav-item dropdown ${SHstyle.navItem} ${SHstyle.dropdown}`}
    key={menuItem.id}
  >
    <Link
      className={`nav-link px-3 px-lg-0 dropdown-toggle ${SHstyle.navLink} ${SHstyle.dropdownToggle}`}
      to={createLocalLink(menuItem.url)}
      title={menuItem.label}
      data-toggle="dropdown"
    >
      {menuItem.label}
    </Link>

    <div
      className={`dropdown-menu ${SHstyle.dropdownMenu}`}
      aria-labelledby="navbarDropdown"
    >
      {menuItem.childItems.nodes.map(item => {
        var { featureColor, featureIcon } =
          item.connectedObject.campaignsTaxonomyFields || {}

        return (
          <Link
            key={item.id}
            className={`dropdown-item px-3 d-flex align-items-center ${SHstyle.dropdownItem}`}
            to={createLocalLink(item.url)}
            title={item.label}
            style={{
              color: featureColor || "",
            }}
          >
            {featureIcon ? (
              <img
                className="mr-2"
                style={{ width: "32px", height: "32px" }}
                srcSet={featureIcon.srcSet}
                src={featureIcon.sourceUrl}
                alt={featureIcon.altText}
              />
            ) : (
              ""
            )}
            <span>{item.label}</span>
          </Link>
        )
      })}
    </div>
  </li>
)

const HeaderMenu = ({ location }) => {
  return (
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
}

export default HeaderMenu
