import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image"
import { createLocalLink } from "../../../utils"
import { Wave } from "../../../utils/svg-icons"

import SetOfFourSectionStyles from "./style.module.scss"

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

{
  wpgraphql {
    pages(where: {title: "Home"}) {
      edges {
        node {
          acfSetOfFourSection {
            setOfFourHeadline
            setOfFourImage1{
              ...AcfImage
            }
            setOfFourImage2{
              ...AcfImage
            }
						setOfFourImage3{
              ...AcfImage
            }
						setOfFourImage4{
              ...AcfImage
            }
						setOfFourSlug1
            setOfFourSlug2
            setOfFourSlug4
            setOfFourSlug3
          }
        }
      }
    }
  }
}
 
`;


const SetOfFourSection = () => {

	const { wpgraphql: { pages: { edges } } } = useStaticQuery(query)
	const [{ node: page }] = edges

	return (
		<section className={`wwf-sg-section ${SetOfFourSectionStyles.section}`}>
			<div className="wwf-sg-section-divider wwf-sg-section-divider-top">
				<Wave className="" fill="#fff" />
			</div>

			<div className="wwf-sg-container container">
				<div className="wwf-sg-row row">
					<div className="wwf-sg-column col">
						<h2 className={`text-md-center ${SetOfFourSectionStyles.title}`}>
							{page.acfSetOfFourSection.setOfFourHeadline}
						</h2>
					</div>
				</div>

				<div className="wwf-sg-row row">
					<div className="wwf-sg-column col">
						<div className="row no-gutters">
							<div className="col-6 col-md-3 p-3">
								<Link to={createLocalLink(page.acfSetOfFourSection.setOfFourSlug1)}>
									<Img
										fluid={page.acfSetOfFourSection.setOfFourImage1.imageFile.childImageSharp.fluid} />
								</Link>
							</div>
							<div className="col-6 col-md-3 p-3">
								<Link to={createLocalLink(page.acfSetOfFourSection.setOfFourSlug2)}>
									<Img
										fluid={page.acfSetOfFourSection.setOfFourImage2.imageFile.childImageSharp.fluid} />
								</Link>
							</div>
							<div className="col-6 col-md-3 p-3">
								<Link to={createLocalLink(page.acfSetOfFourSection.setOfFourSlug3)}>
									<Img
										fluid={page.acfSetOfFourSection.setOfFourImage3.imageFile.childImageSharp.fluid} />
								</Link>
							</div>
							<div className="col-6 col-md-3 p-3">
								<Link to={createLocalLink(page.acfSetOfFourSection.setOfFourSlug4)}>
									<Img
										fluid={page.acfSetOfFourSection.setOfFourImage4.imageFile.childImageSharp.fluid} />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="wwf-sg-section-bg-popover"></div>
		</section >
	)
}

export default SetOfFourSection
