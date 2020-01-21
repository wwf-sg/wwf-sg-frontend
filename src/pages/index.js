import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Button from "../components/ui/Button"
import SetOf4 from "../components/set-of-4"

const IndexPage = () => {
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
    <Layout>
      <SEO title="Home" />

      <SetOf4 config={data.allHomePageJson.edges[0].node}></SetOf4>

      {/* <section className="my-5">
        <div className="container">
          <div className="col">
            <Button>TAKE ACTION</Button>
          </div>
        </div>
      </section> */}
    </Layout>
  )
}

export default IndexPage
