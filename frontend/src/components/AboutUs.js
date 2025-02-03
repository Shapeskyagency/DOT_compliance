import React from 'react'

function AboutUs() {
    const features = [
        { title: "Regulatory Compliance Made Simple", description: " We handle the complexities of FMCSA regulations so you can focus on running your business." },
        { title: "Stress-Free File Management", description: " Keep your driver and vehicle records organized, accessible, and audit-ready." },
        { title: "Cutting-Edge Compliance Technology", description: "Automated reminders, secure document storage, and easy access to essential forms." },
        { title: "Tailored Service Plans", description: "Choose from Self-Service, Moderate Support, or Full Compliance Management." }
      ];
  return (
    <>
     {/* About Section Start */}
     <section className="about-section-seven">
        <div className="container">
          <div className="row">
            {/* Image Section */}
            <div className="col-md-12 col-lg-6">
              <div className="about-seven-imgbox">
                <figure>
                  <img src="images/homepage-7/about-img.jpg" className="img-fluid" alt="About Us" />
                </figure>
              </div>
            </div>

            {/* Content Section */}
            <div className="col-md-12 col-lg-6">
              <div className="about-seven-content">
                <div className="pbmit-heading-subheading-style-2">
                  <h4 className="pbmit-subtitle">WHY CHOOSE US</h4>
                  <h2 className="pbmit-title">Experts in DOT Compliance with Over 10 Years of Industry Experience</h2>
                </div>
                <div className="pbmit-firstlater">
                  <p className="mb-3">
                  Let MY D.O.T. CABINET LLC be your compliance partner on the road to success. 
                  </p>
                </div>
                <p>A wonderful serenity has taken possession of my entire soul.</p>

                {/* Features Section */}
                <div className="about-seven-ihbox">
                  <div className="row g-4">
                    {features.map((feature, index) => (
                      <div key={index} className="col-md-6">
                        <div className="pbmit-ihbox-style-7">
                          <div className="pbmit-ihbox-inner">
                            <div className="pbmit-ihbox-icon pbmit-icon-skincolor"></div>
                            <div className="pbmit-ihbox-contents">
                              <h2 className="pbmit-custom-heading">{feature.title}</h2>
                              <div className="pbmit-cta3-content-wrapper">{feature.description}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Signature & Contact Section */}
                <div className="about-seven-inner">
                  <div className="row align-items-center">
                    <div className="col-2 col-lg-2 p-0">
                      <div className="about-seven-single-img">
                        <figure>
                          <img src="images/homepage-7/img-01.jpg" className="img-fluid" alt="Signature" />
                        </figure>
                      </div>
                    </div>
                    {/* <div className="col-8 col-lg-5">
                      <figure>
                        <img src="images/homepage-7/sign.png" className="img-fluid" alt="Signature" />
                      </figure>
                      <h5>Michael Phillips</h5>
                    </div> */}
                    <div className="col-12 col-lg-5">
                      <a href="about-us.html" className="pbmit-btn pbmit-btn-global">
                        Get Touch <i className="themifyicon ti-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}




      
      </>
  )
}

export default AboutUs