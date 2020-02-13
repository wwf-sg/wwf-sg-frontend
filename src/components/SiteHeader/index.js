import React from "react"
import HeaderMenu from "./HeaderMenu"

import SHstyle from "./style.module.scss"

const SiteHeader = ({ location }) => {
  return (
    <header className="site-header bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
          <a className="navbar-brand p-0" href="/">
            <img
              className="site-logo"
              src="/images/wwf-sg-logo.png"
              alt=""
              style={{ maxWidth: "80px" }}
            />
          </a>

          <div className="d-lg-none py-2">
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
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className={`navbar-toggler-icon ${SHstyle.navbarTogglerIcon}`}
              ></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="headerNavbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item d-lg-none">
                <form action="" className="form">
                  <input className="w-100 form-control" type="search" />
                </form>
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

              <li className="nav-item nav-icon dropdown">
                <a href="/" className="nav-link">
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
    </header>
  )
}

export default SiteHeader
