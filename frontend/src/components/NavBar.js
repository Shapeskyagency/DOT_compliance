'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header header-style-7">
      <div className="container-fluid g-0">
        <div className="site-header-menu d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="site-branding">
            <h1 className="site-title">
              <Link href="/">
                <img width={250} className="logo-img" style={{maxHeight:300}} src="/logo.png" alt="AttorCO" />
              </Link>
            </h1>
          </div>

          {/* Top Bar */}
          <div className="pbmit-menu-topbararea">
            <div className="pre-header">
              <div className="pbmit-pre-header-inner">
                <div className="container">
                  <div className="pbmit-table pbmit-pre-header-content">
                    {/* <div className="pbmit-table-cell">
                      <ul className="top-contact">
                        <li><Link href="#">News</Link></li>
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Contact Us</Link></li>
                        <li><Link href="#">Careers Solutions</Link></li>
                      </ul>
                    </div> */}
                    <div className="pbmit-table-cell pbmit-align-right">
                      <div className="pbmit-social-links-wrapper">
                        <ul className="social-icons">
                          <li className="pbmit-social-facebook">
                            <a className="tooltip-top" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                              <i className="pbmit-base-icon-facebook"></i>
                            </a>
                          </li>
                          <li className="pbmit-social-twitter">
                            <a className="tooltip-top" target="_blank" rel="noopener noreferrer" href="#">
                              <i className="pbmit-base-icon-twitter"></i>
                            </a>
                          </li>
                          <li className="pbmit-social-flickr">
                            <a className="tooltip-top" target="_blank" rel="noopener noreferrer" href="#">
                              <i className="pbmit-base-icon-flickr"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="pbmit-header-btn">
                        <Link className="pbmit-btn pbmit-btn-global" href="/contact-us">
                          <span>Get in Touch</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="site-navigations d-flex justify-content-between">
              <nav className="main-menu navbar-expand-xl navbar-light">
                <div className="navbar-header">
                  {/* Toggle Button */}
                  <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
                <div className={`pbmit-mobile-menu-bg ${isOpen ? 'show' : ''}`}></div>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="pbmit-menu">
                  <div className="pbmit-menu-wrap">
                    <ul className="navigation clearfix">
                      <li className="dropdown ">
                        <Link href="/new">News</Link>
                      </li>
                      <li className="dropdown">
                        <Link href="/about-us">About Us</Link>
                      </li>
                      <li className="dropdown">
                        <Link href="/contact-us">Contact Us</Link>
                      </li>
                      <li className="dropdown">
                        <Link href="/practice-areas">Fleet Management Service</Link>
                        <ul>
													<li class="active"><Link href="/new-dot">New DOT</Link></li>
													<li class="active"><Link href="/urc">U.R.C</Link></li>
													<li class="active"><Link href="/scac">SCAC</Link></li>
													<li class="active"><Link href="/biennual-update">BIENNUAL UPDATE</Link></li>
													<li class="active"><Link href="/operating-authority">OPERATING AUTHORITY</Link></li>
													<li class="active"><Link href="/durga-alcohol-consortium">DRUG & ALCOHOL CONSORTIUM</Link></li>
													<li class="active"><Link href="/carn-cert">CARB CERT</Link></li>
												</ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

              {/* Contact Info */}
              <div className="pbmit-right-side">
                <div className="info-widget">
                  <div className="info-widget-inner">
                    <div className="media-top">
                      <i className="pbmit-base-icon-phone-call"></i>
                      <h4>Call us: +1-(302)-520-2246</h4>
                    </div>
                  </div>
                </div>
                <div className="info-widget">
                  <div className="info-widget-inner">
                    <div className="media-top">
                      <i className="pbmit-base-icon-location-pin"></i>
                      <h4>8 THE GRN STE A, Dover, DE 19901-3618</h4>
                    </div>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
