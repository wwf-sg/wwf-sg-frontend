import React from "react"
import { useStaticQuery } from "gatsby"

import Button from "../ui/Button"

import HeroSectionStyles from "./style.module.scss"

const HeroSection = props => {
  const data = useStaticQuery(graphql`
    query GET_HERO_SECTION {
      homePageJson(id: { eq: "0a785b78-cd87-5b70-a71d-7b5ae6946516" }) {
        id
        styles
        type
        class
        formFields {
          title {
            class
            text
            styles
          }
          subtitle {
            class
            styles
            text
          }
          image {
            alt
            class
            link
            src
            styles
            title
          }
          images {
            alt
            class
            link
            src
            styles
            title
          }
          button {
            class
            href
            styles
            text
          }
          background {
            image
          }
        }
      }
    }
  `)

  return (
    <section
      className={`wwf-sg-section d-flex align-items-center ${HeroSectionStyles.section}`}
    >
      <div
        className="wwf-sg-section-bg"
        style={{
          backgroundImage: `url('/${data.homePageJson.formFields.background.image}')`,
          color: "white",
        }}
      ></div>
      <div className="wwf-sg-section-bg-overlay"></div>
      <div className="wwf-sg-container container">
        <div className="wwf-sg-row row align-items-start">
          <div className="wwf-sg-column col-10 offset-1  col-md-5 col-lg-4 text-center text-md-left">
            <h2 className={`${HeroSectionStyles.title}`}>
              {data.homePageJson.formFields.title.text}
            </h2>
            <p className={`${HeroSectionStyles.subtitle}`}>
              {data.homePageJson.formFields.subtitle.text}
            </p>
            <Button
              className={`btn-outline-secondary btn-lg ${HeroSectionStyles.button}`}
            >
              {data.homePageJson.formFields.button.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
