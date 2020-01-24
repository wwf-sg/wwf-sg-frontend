import React from "react"

const Footer = () => (
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
        <div className="col-12 col-md-6 mb-md-4 mb-lg-0 col-lg-3">
          <p className="font-weight-bold mb-2">Campaigns</p>
          <nav className="d-none d-md-block">
            <ul className="list-unstyled nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#earth-hour">
                  Earth Hour
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#earth-hour">
                  Bring Wildlife Back
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#earth-hour">
                  Protect Food Sources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#earth-hour">
                  Make Singapore Haze-Free
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#earth-hour">
                  Keep Plastic Out of Nature
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-12 col-md-6 mb-md-4 mb-lg-0 col-lg-3">
          <p className="font-weight-bold mb-2">Partners</p>{" "}
          <nav className="d-none d-md-block">
            <ul className="list-unstyled nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#earth-hour">
                  Businesses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#earth-hour">
                  Sustainable Finance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#123">
                  Education & Schools
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#123">
                  Youths & Communities
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-12 col-md-6 mb-md-4 mb-lg-0 col-lg-3">
          <p className="font-weight-bold mb-2">Media Center</p>
          <nav className="d-none d-md-block">
            <ul className="list-unstyled nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#earth-hour">
                  Publications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#123">
                  Press release
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#123">
                  Stories
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-12 col-md-6 mb-md-4 mb-lg-0 col-lg-3">
          <p className="font-weight-bold mb-2">About WWF</p>
          <nav className="d-none d-md-block">
            <ul className="list-unstyled nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#careers">
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#123">
                  Who We Are
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#123">
                  Policies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#123">
                  Sust. @ WWF
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#123">
                  Annual Reports
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-12 mt-3">
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p>
            ©2019 WWF - World Wide Fund for Nature. ©1986 Panda Symbol WWF -
            World Wide Fund For Nature (formerly World Wildlife Fund). "WWF" is
            a WWF Registered Trademark under the Creative Commons licence.
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
