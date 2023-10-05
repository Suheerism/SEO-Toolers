import React from "react";
import { Link } from "react-router-dom";
import SEOToolersLogo from "./SEOToolersLogo.jpg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={SEOToolersLogo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SEO Tools
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/freetools">
                      Free Tools
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/seogroupplan">
                      Seo Group Plans
                    </Link>
                  </li>
                </ul>
              </div>

              <li className="nav-item">
                <Link className="nav-link" to="/socialpanel">
                  Social Panel
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/buyandsell">
                  Buy and Sell
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/earning">
                  Earning
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/community">
                  Community
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/planandpricing">
                  Plan & Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
