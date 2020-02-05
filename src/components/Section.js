import React from "react"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Section = () => {
  return (
    <section className="wwf-sg-section">
      <div className="wwf-sg-section-bg"></div>

      <div className="wwf-sg-section-bg-overlay"></div>

      <div className="wwf-sg-section-divider wwf-sg-section-divider-top"></div>

      <div className="wwf-sg-section-divider wwf-sg-section-divider-bottom"></div>

      <div className="wwf-sg-container">
        <div className="wwf-sg-row">
          <div className="wwf-sg-column">
            <div className="wwf-sg-column-container">
              <div className="wwf-sg-components-wrapper">
                <div className="wwf-sg-component">
                  <div className="wwf-sg-component-container">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="wwf-sg-component"></div>
              </div>
            </div>
          </div>
          <div className="wwf-sg-column"></div>
        </div>
      </div>

      <div className="wwf-sg-section-bg-popover"></div>
    </section>
  )
}

export default Section
