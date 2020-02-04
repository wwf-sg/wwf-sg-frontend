import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SiteLayout from "../components/SiteLayout"
import Seo from "../components/Seo"
// import Button from "../components/ui/Button"
import HeroSection from "../components/HeroSection"
import ScrollSection from "../components/ScrollSection"
import SetOfFourSection from "../components/SetOfFourSection"
import RecentPostsWidget from "../components/RecentPostsWidget"

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      allHomePageJson {
        edges {
          node {
            styles
            type
            id
            class
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <SiteLayout location={location}>
      <Seo title="Home" />

      <HeroSection config={data.allHomePageJson.edges[0].node}></HeroSection>

      <ScrollSection
        config={data.allHomePageJson.edges[1].node}
      ></ScrollSection>

      <SetOfFourSection
        config={data.allHomePageJson.edges[2].node}
      ></SetOfFourSection>

      <RecentPostsWidget
        style={{ backgroundColor: "#f4f2f2" }}
        title="What's Hapenning"
      />
    </SiteLayout>
  )
}

export default IndexPage
