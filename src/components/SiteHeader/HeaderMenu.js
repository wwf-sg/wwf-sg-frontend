import React, { Fragment } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { createLocalLink } from "../../utils"

// import SHstyle from "./style.module.scss"

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
      {menuItem.childItems.nodes.map(item => {
        var { featureColor, featureIcon } =
          item.connectedObject.campaignsTaxonomyFields || {}

        return (
          <Link
            key={item.id}
            className="dropdown-item px-3 d-flex align-items-center"
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
// {post.campaigns.nodes.map((campaign, i) => {
//   if (i > 1) return null
//   return (
//     <Fragment key={campaign.slug}>
//       <Link
//         className={`entry-campaign ${RPWstyle.entryCampaign}`}
//         style={{
//           color:
//             campaign.campaignsTaxonomyFields.featureColor,
//           fontSize: "16px",
//           fontWeight: 600,
//           lineHeight: 1,
//           letterSpacing: "-0.7px",
//         }}
//         to={"/campaign/" + campaign.slug}
//         key={campaign.slug}
//         rel="category"
//       >
//         <img
//           className="mr-2"
//           style={{ maxWidth: "40px" }}
//           srcSet={
//             campaign.campaignsTaxonomyFields.featureIcon
//               .srcSet
//           }
//           src={
//             campaign.campaignsTaxonomyFields.featureIcon
//               .sourceUrl
//           }
//           alt={
//             campaign.campaignsTaxonomyFields.featureIcon
//               .altText
//           }
//         />
//         {campaign.name}
//       </Link>
//     </Fragment>
//   )
// })}
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
