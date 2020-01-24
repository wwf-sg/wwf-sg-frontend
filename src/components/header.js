import React from "react"

const Header = () => {
  return (
    <header className="site-header bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
          <a className="navbar-brand p-0" href="/">
            <img
              className="site-logo"
              src="images/wwf-sg-logo.png"
              alt=""
              style={{ maxWidth: "80px" }}
            />
          </a>

          <div className="d-lg-none">
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
          </div>

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
                  <a
                    className="dropdown-item d-flex align-items-center text-hazel"
                    href="/"
                  >
                    <img
                      className="mr-3"
                      style={{ width: "39px" }}
                      src="images/bring-wildlife-back.svg"
                      alt=""
                    />
                    <div>Bring Wildlife Back</div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center text-teal"
                    href="/"
                  >
                    <img
                      className="mr-3"
                      style={{ width: "39px" }}
                      src="images/protect-food-sources.svg"
                      alt=""
                    />
                    <div>Protect Food Sources</div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center text-lipstick"
                    href="/"
                  >
                    <img
                      className="mr-3"
                      style={{ width: "39px" }}
                      src="images/make-sg-haze-free.svg"
                      alt=""
                    />
                    <div>Make Singapore Haze-Free</div>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center text-mossy-green"
                    href="/"
                  >
                    <img
                      className="mr-3"
                      style={{ width: "39px" }}
                      src="images/keep-plastic-out-of-nature.svg"
                      alt=""
                    />
                    <div>Keep Plastic Out of Nature</div>
                  </a>
                </div>
              </li>

              {/* 
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
                    <a className="dropdown-item px-3" href="/">
                      Join Community
                    </a>
                    <a className="dropdown-item px-3" href="/">
                      Events &amp; Activities
                    </a>
                    <a className="dropdown-item px-3" href="/">
                      Donate
                    </a>
                    <a className="dropdown-item px-3" href="/">
                      Shop
                    </a>
                  </div>
                </li> 
              */}

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
                  <a className="dropdown-item px-3" href="/">
                    About WWF-SG
                  </a>
                  <a className="dropdown-item" href="/">
                    Contact Us
                  </a>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav">
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
                  {/* <i className="fas fa-search fa-fw"></i> */}
                  <img
                    style={{ maxWidth: "28px" }}
                    src="images/navigation-search.png"
                    alt="Search"
                  />
                  <span className="d-md-none">Search</span>
                </a>
              </li>

              {/* <li
                className="nav-item nav-icon dropdown"
                id="showRegionSelector"
              >
                <a href="/" className="nav-link">
                  <i className="fas fa-globe fa-fw"></i>
                  <span className="d-md-none">WWF Locations</span>
                </a>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
