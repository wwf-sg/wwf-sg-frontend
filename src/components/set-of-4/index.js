import React from "react"
import { Link } from "gatsby"

import { createLocalLink } from "../../utils"

import SetOf4Styles from "./style.module.scss"

const SetOf4 = props => {
  return (
    <section className={`wwf-sg-section ${SetOf4Styles.section}`}>
      <div className="wwf-sg-container container">
        <div className="wwf-sg-row row">
          <div className="wwf-sg-column col">
            <h2 className={`text-md-center ${SetOf4Styles.title}`}>
              {props.config.formFields.title.content}
            </h2>
          </div>
        </div>

        <div className="wwf-sg-row row">
          <div className="wwf-sg-column col">
            <div className="row no-gutters">
              {props.config.formFields.images.map(image => {
                console.log(image)
                return (
                  <div key={image.alt} className="col-6 col-md-3">
                    <Link to={createLocalLink(image.link)}>
                      <img
                        className={`w-100 ${SetOf4Styles.img} ${image.class}`}
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

export default SetOf4
