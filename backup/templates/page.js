import React from "react"
import { graphql } from "gatsby"
import SiteLayout from "../components/SiteLayout"
import Seo from "../components/Seo"

import HeroSection from "../components/Sections/HeroSection"
import ScrollSection from "../components/Sections/ScrollSection"
import SetOfFourSection from "../components/Sections/SetOfFourSection"
import RecentPostsWidget from "../components/Widgets/RecentPostsWidget"

const Page = props => {
  const {
    location,
    data: {
      pagesJson: { title, content },
    },
  } = props

  const components = {
    HeroSection: HeroSection,
    ScrollSection: ScrollSection,
    SetOfFourSection: SetOfFourSection,
    RecentPostsWidget: RecentPostsWidget,
  }

  return (
    <SiteLayout location={location}>
      <Seo title={`${title}`} />
      {content.map(component => {
        return React.createElement(components[component.type], {
          ...component,
          key: component.type,
        })
      })}
    </SiteLayout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($id: String!) {
    pagesJson(id: { eq: $id }) {
      title
      content {
        type
        formFields {
          title {
            class
            styles
            text
          }
          subtitle {
            class
            styles
            text
          }
          background {
            backgroundColor
            backgroundImage
          }
          button {
            class
            href
            styles
            text
            icon
          }
          iconButton {
            class
            href
            icon
            styles
          }
          images {
            alt
            link
            src
            styles
            title
            class
          }
          image {
            alt
            class
            link
            src
            styles
            title
          }
          backgroundOverlay {
            backgroundColor
          }
          bottomDivider {
            backgroundColor
            flip
            object
          }
          topDivider {
            flip
            object
          }
        }
      }
    }
  }
`
