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
        nodes {
          styles
          type
          id
          class
        }
      }
    }
  `)

  console.log(data.allHomePageJson.nodes)

  return (
    <SiteLayout location={location}>
      <Seo title="Home" />

      {data.allHomePageJson.nodes.map(node => {
        console.log()
        switch (node.type) {
          case "hero-section":
            return <HeroSection config={node}></HeroSection>
            break
          case "scroll-section":
            return <ScrollSection config={node}></ScrollSection>
            break
          case "set-of-four-section":
            return <SetOfFourSection config={node}></SetOfFourSection>
            break
          case "recent-posts-widget":
            return (
              <RecentPostsWidget
                style={{ backgroundColor: "#f4f2f2" }}
                config={node}
              ></RecentPostsWidget>
            )
            break
        }
      })}
    </SiteLayout>
  )
}

export default IndexPage
