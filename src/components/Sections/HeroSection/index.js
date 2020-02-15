import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image"
import Button from "../../Ui/Button"
import { Wave } from "../../../utils/svg-icons"
import HeroSectionStyles from "./style.module.scss"

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
          acfHeroSection {
            heroCallToAction
            heroCallToActionUrl
            heroHeadline
            heroHeadlineParagraph
            heroImage {
              ...AcfImage
            }
          }
        }
      }
    }
  }
}
 
`;


const HeroSection = () => {

	const { wpgraphql: { pages: { edges } } } = useStaticQuery(query)
	const [{ node: page }] = edges


	return (
		<section
			className={`wwf-sg-section d-flex align-items-center ${HeroSectionStyles.section}`}
		>
			<div className="wwf-sg-section-bg">
				<Img fluid={page.acfHeroSection.heroImage.imageFile.childImageSharp.fluid} className={HeroSectionStyles.heroImage} />
			</div>

			<div className="wwf-sg-section-bg-overlay"></div>

			<div className="wwf-sg-section-divider wwf-sg-section-divider-top"></div>

			<div className="wwf-sg-section-divider wwf-sg-section-divider-bottom">
				<Wave />
			</div>

			<div className="wwf-sg-container container">
				<div className="wwf-sg-row row align-items-start">
					<div className="wwf-sg-column col-10 offset-1 col-md-5 col-lg-6 offset-lg-0 text-center text-md-left">
						<h2 className={`${HeroSectionStyles.title}`}>
							{page.acfHeroSection.heroHeadline}
						</h2>
						<p className={`${HeroSectionStyles.heroHeadlineParagraph}`}>
							{page.acfHeroSection.heroHeadline}
						</p>
						<Button className={`btn-outline-secondary btn-lg ${HeroSectionStyles.button}`}>
							{page.acfHeroSection.heroCallToAction}
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection

