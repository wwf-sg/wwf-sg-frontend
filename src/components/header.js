import React from "react"

const Header = () => {
  return (
    <header className="">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img
              src="images/wwf-sg-logo.png"
              alt=""
              style={{ maxWidth: "80px" }}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="headerNavbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link" href="/">
                  Earth Hour 2020
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Challenges
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">
                    Bring Wildlife Back
                  </a>
                  <a className="dropdown-item" href="/">
                    Protect Food Sources
                  </a>
                  <a className="dropdown-item" href="/">
                    Make Singapore Haze-Free
                  </a>
                  <a className="dropdown-item" href="/">
                    Keep Plastic Out of Nature
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Do Something
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">
                    Join Community
                  </a>
                  <a className="dropdown-item" href="/">
                    Events &amp; Activities
                  </a>
                  <a className="dropdown-item" href="/">
                    Donate
                  </a>
                  <a className="dropdown-item" href="/">
                    Shop
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">
                    About WWF-SG
                  </a>
                  <a className="dropdown-item" href="/">
                    Contact Us
                  </a>
                </div>
              </li>

              <li className="nav-item nav-button">
                <a
                  className="btn btn-primary btn-sm"
                  href="https://donate.wwf.sg/"
                >
                  DONATE
                </a>
              </li>

              <li className="nav-item nav-icon dropdown">
                <a href="/" className="nav-link">
                  <i className="fas fa-search fa-fw"></i>
                  <span className="d-md-none">Search</span>
                </a>
              </li>

              <li
                className="nav-item nav-icon dropdown"
                id="showRegionSelector"
              >
                <a href="/" className="nav-link">
                  <i className="fas fa-globe fa-fw"></i>
                  <span className="d-md-none">WWF Locations</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
