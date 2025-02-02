import React from 'react';

function PageBanner({ title, content , image, imageAlt, imageTitle }) {
  return (
    // Title Bar
    <div className="pbmit-title-bar-wrapper">
      <div className="container">
        <div className="pbmit-title-bar-content">
          <div className="pbmit-title-bar-content-inner">
            <div className="pbmit-tbar">
              <div className="pbmit-tbar-inner container">
                <h1 className="pbmit-tbar-title">{title}</h1>
              </div>
            </div>
            {/* <div className="pbmit-breadcrumb">
              <div className="pbmit-breadcrumb-inner">
                <span>
                  <a title="" href="index.html" className="home">
                    <span>Attorco Sites</span>
                  </a>
                </span>
                <span className="sep">  </span>
                <span>
                  <a href="#" className="home">
                    <span>Attorco Demo 1</span>
                  </a>
                </span>
                <span className="sep">  </span>
                <span>
                  <span className="post-root post post-post current-item">
                    About Us
                  </span>
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    // Title Bar End
  );
}

export default PageBanner;
