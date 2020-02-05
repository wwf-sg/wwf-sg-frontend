import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ScrollSectionStyles from "./style.module.scss"

const ScrollSection = props => {
  const data = useStaticQuery(graphql`
    query GET_SET_OF_FOUR {
      homePageJson(id: { eq: "c4ecc57f-d155-5561-820c-455bd60631eb" }) {
        id
        styles
        type
        class
        formFields {
          image {
            title
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
          iconButton {
            href
            icon
            class
            styles
          }
        }
      }
    }
  `)

  return (
    <section className={`wwf-sg-section ${ScrollSectionStyles.section}`}>
      <div className="wwf-sg-container container">
        <div className="wwf-sg-row row">
          <div className="wwf-sg-column col-6 col-lg">
            <img
              className={`w-100 p-lg-4 ${ScrollSectionStyles.img} ${data.homePageJson.formFields.image.class}`}
              src={data.homePageJson.formFields.image.src}
              alt={data.homePageJson.formFields.image.alt}
            />
          </div>
          <div className="wwf-sg-column col-6 col-lg-4 d-flex align-items-center">
            <div className="text-right">
              <h2 className={`${ScrollSectionStyles.title}`}>
                {data.homePageJson.formFields.title.text}
              </h2>
              <a
                className={`${ScrollSectionStyles.iconButton}`}
                href={data.homePageJson.formFields.iconButton.href}
              >
                <img
                  className={`${ScrollSectionStyles.icon}`}
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

export default ScrollSection
