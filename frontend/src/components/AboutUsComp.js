import React from 'react';

function AboutUsComp() {
  return (
    // About Us Start
    <section className="about-us-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-us-single-img">
              <figure>
                <img
                  src="images/about-img.jpg"
                  className="img-fluid"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-us-content">
              <div className="pbmit-heading-subheading">
                <h4 className="pbmit-subtitle">ABOUT US</h4>
                <h2 className="pbmit-title">D.O.T. CABINET LLC</h2>
              </div>
              <p>
              Your trusted partner in DOT compliance. With over a decade of experience in the transportation industry, we understand what it takes to keep your business running smoothly while meeting all Department of Transportation (DOT) regulations.
Founded in January 2025, our mission is to simplify compliance, ensuring your operations remain stress-free and fully compliant. Whether you're managing an established fleet or just starting out with a new DOT number, we provide the tools, expertise, and support to help you navigate every aspect of compliance with confidence.
At MY D.O.T. CABINET LLC, we specialize in comprehensive compliance solutions, including driver qualification files, vehicle maintenance records, audit preparation, and keeping your DOT number active. Our commitment is to help you stay compliant, efficient, and focused on growth.

              </p>
              {/* <div className="progressbar">
                <span className="progress-label">Success Cases</span>
                <div className="progress progress-lg progress-percent-bg">
                  <div
                    className="progress-bar aos aos-init aos-animate"
                    data-aos="slide-right"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: '90%' }}
                  ></div>
                  <span className="progress-percent">90%</span>
                </div>
              </div>
              <div className="progressbar">
                <span className="progress-label">Case Experience</span>
                <div className="progress progress-lg progress-percent-bg">
                  <div
                    className="progress-bar aos aos-init aos-animate"
                    data-aos="slide-right"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: '80%' }}
                  ></div>
                  <span className="progress-percent">80%</span>
                </div>
              </div>
              <div className="progressbar">
                <span className="progress-label">Real Estate</span>
                <div className="progress progress-lg progress-percent-bg">
                  <div
                    className="progress-bar aos aos-init aos-animate"
                    data-aos="slide-right"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: '70%' }}
                  ></div>
                  <span className="progress-percent">70%</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    // About Us End
  );
}

export default AboutUsComp;
