import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SiteLayout from "../components/SiteLayout"
import Seo from "../components/Seo"
// import Button from "../components/ui/Button"
import SetOf4 from "../components/set-of-4"
import RecentPostsWidget from "../components/RecentPostsWidget"

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      allHomePageJson {
        edges {
          node {
            style
            type
            id
            class
            formFields {
              images {
                alt
                class
                src
                style
                link
              }
              title {
                class
                content
                style
              }
            }
          }
        }
      }
    }
  `)

  return (
    <SiteLayout location={location}>
      <Seo title="Home" />
      <SetOf4 config={data.allHomePageJson.edges[0].node}></SetOf4>
      {/* <section className="my-5">
        <div className="container">
          <div className="col">
            <Button>TAKE ACTION</Button>
          </div>
        </div>
      </section> */}

      <RecentPostsWidget
        style={{ backgroundColor: "#f4f2f2" }}
        title="What's Hapenning"
      />
    </SiteLayout>
  )
}

export default IndexPage
