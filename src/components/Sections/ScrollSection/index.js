import React from "react"

import ScrollSectionStyles from "./style.module.scss"

const ScrollSection = props => {
  return (
    <section className={`wwf-sg-section ${ScrollSectionStyles.section}`}>
      <div className="wwf-sg-container container">
        <div className="wwf-sg-row row">
          <div className="wwf-sg-column col-6 col-lg">
            <img
              className={`w-100 p-lg-4 ${ScrollSectionStyles.img} ${props.formFields.image.class}`}
              src={props.formFields.image.src}
              alt={props.formFields.image.alt}
            />
          </div>
          <div className="wwf-sg-column col-6 col-lg-4 d-flex align-items-center">
            <div className="text-right">
              <h2 className={`${ScrollSectionStyles.title}`}>
                {props.formFields.title.text}
              </h2>
              <a
                className={`${ScrollSectionStyles.iconButton}`}
                href={props.formFields.iconButton.href}
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
