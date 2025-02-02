'use client'
import React, { useState } from 'react';
import PageBanner from '@/components/PageBanner';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {  // Replace '/api/contact' with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
      } else {
        setStatus('Error sending message.');
      }
    } catch (error) {
      setStatus('An error occurred, please try again.');
    }
  };

  return (
    <>
      <PageBanner title={"Contact Us"} />

      {/* Page Content */}
      <div className="page-content">

        {/* Ihbox */}
        <section className="contact-ihbox-section">
          <div className="container">
            <div className="contact-ihbox">
              <div className="row g-0">
                <div className="col-md-4">
                  <div className="pbmit-ihbox-style-4">
                    <div className="pbmit-ihbox-inner">
                      <div className="pbmit-ihbox-icon pbmit-icon-skincolor"></div>
                      <div className="pbmit-ihbox-contents">
                        <div className="pbmit-vc_general pbmit-vc_cta3 pbmit-cta3-only">
                          <div className="pbmit-vc_cta3_content-container">
                            <div className="pbmit-vc_cta3-content">
                              <div className="pbmit-vc_cta3-content-header pbmit-wrap">
                                <div className="pbmit-vc_cta3-headers pbmit-wrap-cell">
                                  <h2 className="pbmit-custom-heading">Address</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-cta3-content-wrapper">
                          8 THE GRN STE A, Dover, DE 19901-3618
                          <p></p>
                          <p><a href="#">View On Google Map</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="pbmit-ihbox-style-4 pbmit-textcolor-white">
                    <div className="pbmit-ihbox-inner">
                      <div className="pbmit-ihbox-icon pbmit-icon-skincolor"></div>
                      <div className="pbmit-ihbox-contents">
                        <div className="pbmit-vc_general pbmit-vc_cta3 pbmit-cta3-only">
                          <div className="pbmit-vc_cta3_content-container">
                            <div className="pbmit-vc_cta3-content">
                              <div className="pbmit-vc_cta3-content-header pbmit-wrap">
                                <div className="pbmit-vc_cta3-headers pbmit-wrap-cell">
                                  <h2 className="pbmit-custom-heading">Phone</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-cta3-content-wrapper">
                          A wonderful serenity has taken possession of my entire soul, like these.
                          <p></p>
                          <p><a href="#">+1-(302)-520-2246</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="pbmit-ihbox-style-4">
                    <div className="pbmit-ihbox-inner">
                      <div className="pbmit-ihbox-icon pbmit-icon-skincolor"></div>
                      <div className="pbmit-ihbox-contents">
                        <div className="pbmit-vc_general pbmit-vc_cta3 pbmit-cta3-only">
                          <div className="pbmit-vc_cta3_content-container">
                            <div className="pbmit-vc_cta3-content">
                              <div className="pbmit-vc_cta3-content-header pbmit-wrap">
                                <div className="pbmit-vc_cta3-headers pbmit-wrap-cell">
                                  <h2 className="pbmit-custom-heading">Email</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pbmit-cta3-content-wrapper">
                          A wonderful serenity has taken possession of my entire soul, like these.
                          <p></p>
                          <p><a href="#"><span className="__cf_email__" data-cfemail="3459555d58745855434d5146575b1a575b59">support@mydotcabinet.com</span></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        {/* Ihbox End */}

        {/* Contact Form */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-details">
                  <div className="pbmit-heading-subheading">
                    <h4 className="pbmit-subtitle">GET IN TOUCH</h4>
                    <h2 className="pbmit-title">Contact Details</h2>
                  </div>
                  <p>If you are interested in working with us then please drop us a line, we would love to hear from you.</p>
                  <h5>Opening Hour</h5>
                  <p>Monday – Friday: 8am to 6pm <br /> Saturday: 09.00am to 2pm <br/> Sunday: Close <br/> Emergency Support is available after 6 PM for Tier 3 members only.</p>
                  <h5>Call Us Today</h5>
                  <p>+1 <strong>(302)-520-2246</strong></p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="contact-form">
                  <div className="pbmit-heading-subheading">
                    <h4 className="pbmit-subtitle">PLEASE Fill Form</h4>
                    <h2 className="pbmit-title">Do You Have Any Questions?</h2>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12 col-lg-6">
                        <input 
                          type="text" 
                          name="name" 
                          className="form-control" 
                          placeholder="Name" 
                          value={formData.name}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <div className="col-md-12 col-lg-6">
                        <input 
                          type="email" 
                          name="email" 
                          className="form-control" 
                          placeholder="Email" 
                          value={formData.email}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <div className="col-md-12 col-lg-6">
                        <input 
                          type="text" 
                          name="phone" 
                          className="form-control" 
                          placeholder="Phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <div className="col-md-12 col-lg-6">
                        <input 
                          type="text" 
                          name="subject" 
                          className="form-control" 
                          placeholder="Subject" 
                          value={formData.subject}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea 
                          name="message" 
                          cols="40" 
                          rows="4" 
                          className="form-control" 
                          placeholder="Message" 
                          value={formData.message}
                          onChange={handleChange}
                          required 
                        ></textarea>
                      </div>
                      <div className="col-md-12 col-lg-6">
                        <button type="submit" className="pbmit-btn pbmit-btn-global pbmit-btn-shape-round w-100">
                          <i className="form-btn-loader fa fa-circle-o-notch fa-spin fa-fw margin-bottom d-none"></i>
                          SEND MESSAGE
                        </button>
                      </div>
                      <div className="col-md-12 col-lg-12 message-status">
                        {status && <p>{status}</p>}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Form End */}

        {/* Iframe */}
        <section>
          <div className="contact-section-iframe">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.829986131271!2d-122.4746968033092!3d37.80374752160443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey+Ave%2C+San+Francisco%2C+CA+94129!5e0!3m2!1sen!2sus!4v1435826432051" 
              allowFullScreen="" 
            ></iframe>
          </div>
        </section>
        {/* Iframe End */}

      </div>
      {/* Page Content End */}
    </>
  );
}

export default ContactUs;
