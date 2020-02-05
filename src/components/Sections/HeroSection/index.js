import React from "react"

import Button from "../../Ui/Button"

import HeroSectionStyles from "./style.module.scss"

const HeroSection = props => {
  console.log(props)

  return (
    <section
      className={`wwf-sg-section d-flex align-items-center ${HeroSectionStyles.section}`}
    >
      <div
        className="wwf-sg-section-bg"
        style={{
          backgroundImage: `url('/${props.formFields.background.image}')`,
          color: "white",
        }}
      ></div>
      <div className="wwf-sg-section-bg-overlay"></div>
      <div className="wwf-sg-container container">
        <div className="wwf-sg-row row align-items-start">
          <div className="wwf-sg-column col-10 offset-1  col-md-5 col-lg-4 text-center text-md-left">
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
