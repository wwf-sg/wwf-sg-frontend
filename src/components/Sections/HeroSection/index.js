import React from "react"

import Button from "../../Ui/Button"
import { Wave } from "../../../utils/svg-icons"

import HeroSectionStyles from "./style.module.scss"

const HeroSection = props => {
  return (
    <section
      className={`wwf-sg-section d-flex align-items-center ${HeroSectionStyles.section}`}
    >
      <div
        className="wwf-sg-section-bg"
        style={{
          backgroundImage: `url('/${props.formFields.background
            .backgroundImage || ""}')`,
          color: `${props.formFields.background.backgroundColor || ""}`,
        }}
      ></div>

      <div
        className="wwf-sg-section-bg-overlay"
        style={{
          backgroundColor: `${props.formFields.backgroundOverlay
            .backgroundColor || ""}`,
        }}
      ></div>

      <div className="wwf-sg-section-divider wwf-sg-section-divider-top"></div>

      <div className="wwf-sg-section-divider wwf-sg-section-divider-bottom">
        <Wave />
      </div>

      <div className="wwf-sg-container container">
        <div className="wwf-sg-row row align-items-start">
          <div className="wwf-sg-column col-10 offset-1 col-md-5 col-lg-6 offset-lg-0 text-center text-md-left">
            <h2 className={`${HeroSectionStyles.title}`}>
              {props.formFields.title.text}
            </h2>
            <p className={`${HeroSectionStyles.subtitle}`}>
              {props.formFields.subtitle.text}
            </p>
            <Button
              className={`btn-outline-secondary btn-lg ${HeroSectionStyles.button}`}
            >
              {props.formFields.button.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
