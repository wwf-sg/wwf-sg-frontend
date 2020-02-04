import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { createLocalLink } from "../../utils"

import SetOfFourSectionStyles from "./style.module.scss"

const SetOfFourSection = props => {
  const data = useStaticQuery(graphql`
    query GET_SET_OF_FOUR_SECTION {
      homePageJson(id: { eq: "40918f9f-1efa-5dd0-aff4-7578b6693307" }) {
        id
        styles
        type
        class
        formFields {
          images {
            alt
            class
            src
            styles
            link
          }
          title {
            class
            text
            styles
          }
        }
      }
    }
  `)

  return (
    <section className={`wwf-sg-section ${SetOfFourSectionStyles.section}`}>
      <div className="wwf-sg-container container">
        <div className="wwf-sg-row row">
          <div className="wwf-sg-column col">
            <h2 className={`text-md-center ${SetOfFourSectionStyles.title}`}>
              {data.homePageJson.formFields.title.text}
            </h2>
          </div>
        </div>

        <div className="wwf-sg-row row">
          <div className="wwf-sg-column col">
            <div className="row no-gutters">
              {data.homePageJson.formFields.images.map(image => {
                return (
                  <div key={image.alt} className="col-6 col-md-3">
                    <Link to={createLocalLink(image.link)}>
                      <img
                        className={`w-100 ${SetOfFourSectionStyles.img} ${image.class}`}
                        src={image.src}
                        alt={image.alt}
                      />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="wwf-sg-section-bg-popover"></div>
    </section>
  )
}

export default SetOfFourSection
