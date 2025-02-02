const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="footer site-footer">
        <div className="footer-wrap pbmit-footer-big-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="pbmit-footer-boxes col-md-4">
                <div className="pbmit-footer-contact-info">
                  <div className="pbmit-footer-contact-info-inner">
                    <i className="pbmit-base-icon-location-pin"></i>
                    <span className="pbmit-label">Address</span> 8 THE GRN STE A, Dover, DE 19901-3618
                  </div>
                </div>
              </div>
              <div className="pbmit-footer-boxes col-md-4">
                <div className="pbmit-footer-contact-info text-center">
                  <div className="pbmit-footer-contact-info-inner">
                    <i className="pbmit-base-icon-mail"></i>
                    <span className="pbmit-label">Email</span> 
                    <a href="mailto:support@mydotcabinet.com"><span> support@mydotcabinet.com</span></a>
                  </div>
                </div>
              </div>
              <div className="pbmit-footer-boxes col-md-4">
                <div className="pbmit-footer-contact-info text-end">
                  <div className="pbmit-footer-contact-info-inner">
                    <i className="pbmit-base-icon-clock"></i>
                    <span className="pbmit-label d-block text-start mb-2">Open Hours</span>
                    <p className="text-start mb-0"><span className="pbmit-label ">Monday</span> Friday: 8:00 AM - 6:00 PM ET <br/></p>
                    <p className="text-start mb-0" ><span className="pbmit-label text-start">Saturday</span> 9:00 AM - 2:00 PM ET<br/></p>
                    <p className="text-start mb-0"><span className="pbmit-label  text-start">Sunday</span> Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Widgets */}
        <div className="pbmit-footer-widget-area">
          <div className="container">
            <div className="row">
              <div className="pbmit-footer-widget-col-1">
                <div className="widget">
                  <div className="footerlogo">
                    <img className="img-fluid" src="/logo.png" alt="Logo" />
                  </div>
                  <p className="pbmit-footer-text">
                  DOT compliance is more than just regulations—it’s the foundation of a safe, reliable, and scalable business. Let MY D.O.T. CABINET LLC be your compliance partner on the road to success.
                  </p>
                  <form>
                    <div className="form-row align-items-center">
                      <div className="col-auto">
                        <input type="email" name="EMAIL" placeholder="Email address" required />
                        <button type="submit">
                          <i className="pbmit-base-icon-mail-alt"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              
              {/* Information */}
              <div className="pbmit-footer-widget-col-2">
                <div className="widget">
                  <h3 className="widget-title">Information</h3>
                  <div className="pbmit-footermenu-wrapper">
                    <ul>
                    <li><a href="#">News</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Careers Solutions</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Latest News */}
              <div className="pbmit-footer-widget-col-3">
                <div className="widget">
                  <h3 className="widget-title">Latest News</h3>
                  <ul className="pbmit-recent-post-list">
                    <li className="pbmit-recent-post-list-li">
                      <a href="blog-single-view.html">
                        <img src="images/footer/blog-01.jpg" className="img-fluid" alt="News 1" />
                      </a>
                      <a href="blog-single-view.html">How Is Mediation Useful in Family Law?</a>
                      <span className="post-date">June 13, 2019</span>
                    </li>
                    <li className="pbmit-recent-post-list-li">
                      <a href="blog-single-view.html">
                        <img src="images/footer/blog-02.jpg" className="img-fluid" alt="News 2" />
                      </a>
                      <a href="blog-single-view.html">Allow to miles wound be place the leave.</a>
                      <span className="post-date">June 13, 2019</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Our Services */}
              <div className="pbmit-footer-widget-col-4">
                <div className="widget">
                  <h3 className="widget-title">Our Services</h3>
                  <div className="pbmit-footermenu-wrapper">
                    <ul>
                      <li><a href="#">News</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Careers Solutions</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pbmit-footer-bottom">
          <div className="container">
            <div className="pbmit-footer-text-inner">
              <div className="row">
                <div className="col-md-12">
                  Copyright © 2025 <a href="#">mydotcabinet.com</a>. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
