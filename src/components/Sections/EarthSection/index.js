import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image"
import EarthSectionStyles from "./style.module.scss"

export const query = graphql`

fragment AcfImage on WPGraphQL_MediaItem {
  
  mediaItemUrl
  sourceUrl
  modified
  databaseId
  imageFile {
    childImageSharp {
      fluid {
				...GatsbyImageSharpFluid
      }
    }
  }
}

query {
  wpgraphql {
    pages(where: {title: "Home"}) {
      edges {
        node {
          slug
          title
          acfEarthSection {
            earthHeadline
            earthCallToAction
						earthImage {
              ...AcfImage
            }
          }
        }
      }
    }
  }
}
 
`;


const EarthSection = () => {

	const { wpgraphql: { pages: { edges } } } = useStaticQuery(query)
	const [{ node: page }] = edges


  return (
    <section className={`wwf-sg-section ${EarthSectionStyles.section}`}>
      <div className="wwf-sg-container container">
        <div className="wwf-sg-row row">
          <div className="wwf-sg-column col-6 col-lg">
						<Img 
						className={`w-100 p-lg-4 ${EarthSectionStyles.img} `}
						fluid={page.acfEarthSection.earthImage.imageFile.childImageSharp.fluid}  />
          </div>
          <div className="wwf-sg-column col-6 col-lg-4 d-flex align-items-center">
            <div className="text-right">
              <h2 className={`${EarthSectionStyles.title}`}>
                {page.acfEarthSection.earthHeadline}
              </h2>
              <a
                className={`${EarthSectionStyles.iconButton}`}
                href="/"
              >
                <img
                  className={`${EarthSectionStyles.icon}`}
                  src="images/down-arrow.png"
                  alt="down-arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="wwf-sg-section-bg-popover"></div>
    </section>
  )
}

export default EarthSection
