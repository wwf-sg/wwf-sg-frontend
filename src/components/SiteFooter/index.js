import React from "react"
import FooterMenu from "./FooterMenu"

const SiteFooter = ({ location }) => (
  <footer className="site-footer pb-4">
    <div className="container">
      <div className="row pt-5 mb-5">
        <div className="col-8 offset-2 col-md-4 offset-md-8 col-lg-3 offset-lg-9">
          <p className="font-weight-bold" style={{ fontSize: "16px" }}>
            We are on...
          </p>
          <a
            href="https://www.facebook.com/wwfsg"
            className="text-black m-2 link-facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-square fa-2x"></i>
            <span className="sr-only">facebook</span>
          </a>
          <a
            href="https://twitter.com/wwfsg"
            className="text-black m-2 link-twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-2x"></i>
            <span className="sr-only">twitter</span>
          </a>
          <a
            href="https://www.instagram.com/wwfsg/"
            className="text-black m-2 link-instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-2x"></i>
            <span className="sr-only">instagram</span>
          </a>
          <a
            href="https://www.youtube.com/user/earthhoursg"
            className="text-black m-2 link-youtube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube fa-2x"></i>
            <span className="sr-only">youtube</span>
          </a>
          <a
            href="https://www.linkedin.com/company/wwfsg"
            className="text-black m-2 link-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
            <span className="sr-only">linkedin</span>
          </a>
        </div>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-3 col-md-2">
          <img
            className="logo-footer w-100"
            src="//d1diae5goewto1.cloudfront.net/_skins/yangon/img/logo.png"
            alt="WWF"
          />
        </div>
        <div className="col-9 col-md-8 pl-0">
          <p className="font-weight-bold mb-0 wwf-tagline">
            Building a future in which people live in harmony with nature
          </p>
        </div>
      </div>

      <div className="row mb-4">
        <FooterMenu location={location} />
        <div className="col-12 mt-3">
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p>
            ©2020 WWF - World Wide Fund for Nature. ©1986 Panda Symbol WWF -
            World Wide Fund For Nature (formerly World Wildlife Fund). "WWF" is
            a WWF Registered Trademark under the Creative Commons licence.
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default SiteFooter
