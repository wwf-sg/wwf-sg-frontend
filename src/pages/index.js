import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import SiteLayout from "../components/SiteLayout"
import Seo from "../components/Seo"
// import HeroSection from "../components/Sections/HeroSection"
// import ScrollSection from "../components/Sections/ScrollSection"
// import SetOfFourSection from "../components/Sections/SetOfFourSection"
// import RecentPostsWidget from "../components/Widgets/RecentPostsWidget"

const IndexPage = ({ location }) => {
  // const data = useStaticQuery(graphql`
  //   query PagesQuery {
  //     allPagesJson {
  //       nodes {
  //         styles
  //         type
  //         id
  //         class
  //       }
  //     }
  //   }
  // `)

  return (
    <SiteLayout location={location}>
      {/* <Seo title="Home" /> */}

      {/* {data.allHomePageJson.nodes.map(node => {
        switch (node.type) {
          case "hero-section":
            return <HeroSection key={node.id} config={node}></HeroSection>
            break
          case "scroll-section":
            return <ScrollSection key={node.id} config={node}></ScrollSection>
            break
          case "set-of-four-section":
            return (
              <SetOfFourSection key={node.id} config={node}></SetOfFourSection>
            )
            break
          case "recent-posts-widget":
            return (
              <RecentPostsWidget
                style={{ backgroundColor: "#f4f2f2" }}
                key={node.id}
                config={node}
              ></RecentPostsWidget>
            )
            break
        }
      })} */}
    </SiteLayout>
  )
}

// export default IndexPage
