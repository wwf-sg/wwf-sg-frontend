import React from "react"
import Search from "./Search"
import HeaderMenu from "./HeaderMenu"

import SHstyle from "./style.module.scss"

const SiteHeader = ({ location }) => {
  return (
    <header
      id="siteHeader"
      className={`site-header fixed-top ${SHstyle.siteHeader}`}
    >
      <div className="container-lg px-0 px-lg-3">
        <nav className="navbar navbar-expand-lg navbar-dark p-0">
          <a
            className={`navbar-brand p-0 pl-2 pl-lg-0 ${SHstyle.navbarBrand}`}
            href="/"
          >
            <img
              className={`site-logo ${SHstyle.siteLogo}`}
              src="/images/wwf-sg-logo.png"
              alt=""
              style={{ maxWidth: "80px" }}
            />
          </a>

          <div className="d-lg-none py-3">
            <a className="btn btn-outline-secondary btn-sm mr-2" href="/">
              GET INVOLVED
            </a>

            <a
              className="btn btn-outline-secondary btn-sm"
              href="https://donate.wwf.sg/"
            >
              DONATE
            </a>

            <button
              className={`navbar-toggler ${SHstyle.navbarToggler}`}
              type="button"
              data-toggle="collapse"
              data-target="#headerNavbarCollapse"
              aria-controls="headerNavbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className={`navbar-toggler-icon ${SHstyle.navbarTogglerIcon}`}
              ></span>
            </button>
          </div>

          <div
            className={`collapse navbar-collapse ml-lg-4 py-lg-4 ${SHstyle.navbarCollapse}`}
            id="headerNavbarCollapse"
          >
            <ul className={`navbar-nav mr-auto ${SHstyle.navbarNav}`}>
              <li className="nav-item d-lg-none">
                <Search />
              </li>
              <HeaderMenu location={location} />
            </ul>

            <ul className="navbar-nav d-none d-lg-flex">
              <li className="nav-item nav-button pt-2">
                <a className="btn btn-outline-secondary" href="/">
                  GET INVOLVED
                </a>
              </li>

              <li className="nav-item nav-button ml-2 pt-2">
                <a
                  className="btn btn-outline-secondary"
                  href="https://donate.wwf.sg/"
                >
                  DONATE
                </a>
              </li>

              <li className={`nav-item nav-icon ${SHstyle.navItem}`}>
                <a
                  href="/"
                  className="nav-link mr-0"
                  data-toggle="collapse"
                  data-target="#headerSearchbarCollapse"
                  aria-controls="headerSearchbarCollapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <img
                    style={{ maxWidth: "28px" }}
                    src="/images/navigation-search.png"
                    alt="Search"
                  />
                  <span className="d-md-none">Search</span>
                </a>
              </li>

              {/* 
              <li
                className="nav-item nav-icon dropdown"
                id="showRegionSelector"
              >
                <a href="/" className="nav-link">
                  <i className="fas fa-globe fa-fw"></i>
                  <span className="d-md-none">WWF Locations</span>
                </a>
              </li>
              */}
            </ul>
          </div>
        </nav>
      </div>
      <div className="collapse" id="headerSearchbarCollapse">
        <div
          className="d-none d-lg-block"
          style={{ backgroundColor: "#f4f2f2" }}
        >
          <div className="container px-5 py-2">
            <Search />
          </div>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
