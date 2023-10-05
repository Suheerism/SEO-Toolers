import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="text-center text-lg-start text-light" id="footer">
        <section className="pt-3">
          <div className="container text-start mt-5 mx-auto footer-container">
            <div className="row footer-row mt-3">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <img
                    src="SEOToolerslogo.jpg"
                    alt="SEOToolerslogo"
                    width="46"
                    height="45"
                  />
                </h6>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    What We Offer
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Careers
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Certificates
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Blog
                  </a>
                </p>
              </div>

              {/* <!-- Grid column --> */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Learning</h6>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Get The App
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Testimonial
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Faq
                  </a>
                </p>
              </div>

              {/* <!-- Grid column --> */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">More</h6>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Affiliates
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Become A Course Creator
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Trainnig Webinars
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Free Personality text
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none">
                    Help and Support
                  </a>
                </p>
              </div>

              {/* <!-- Grid column --> */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Get In Touch</h6>
                <p>
                  <i className="fa fa-facebook me-3"></i>Facebook
                </p>
                <p>
                  <i className="fa-brands fa-instagram me-3"></i>Instagram
                </p>
                <p>
                  <i className="fa-brands fa-youtube me-3"></i>YouTube
                </p>
                <p>
                  <i className="fa-brands fa-linkedin me-3"></i>LinkedIn
                </p>
                <p>
                  <i className="fa-brands fa-twitter me-3"></i>
                  Twitter
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-4 copyright"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold text-decoration-none" href="#">
            Suheer Zahid
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
