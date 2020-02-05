import React from "react"
import { Link } from "gatsby"

import { createLocalLink } from "../../../utils"

import SetOfFourSectionStyles from "./style.module.scss"

const SetOfFourSection = props => {
  return (
    <section className={`wwf-sg-section ${SetOfFourSectionStyles.section}`}>
      <div className="wwf-sg-container container">
        <div className="wwf-sg-row row">
          <div className="wwf-sg-column col">
            <h2 className={`text-md-center ${SetOfFourSectionStyles.title}`}>
              {props.formFields.title.text}
            </h2>
          </div>
        </div>

        <div className="wwf-sg-row row">
          <div className="wwf-sg-column col">
            <div className="row no-gutters">
              {props.formFields.images.map(image => {
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
