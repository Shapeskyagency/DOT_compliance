import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper CSS
import "swiper/css/navigation"; // Navigation styles
import { Navigation } from "swiper/modules"; // Swiper Navigation module

function Testimonials() {
  const testimonials = [
    {
      name: "Victoria Porter",
      role: "Customer",
      image: "images/homepage-7/testimonial/testimonial-01.jpg",
      text: "I've been happy with the services provided by Lawyer Attorneys Firm. John was really patient to listen to all my problems and try his best to give me good advice for my case.",
    },
    {
      name: "John Smith",
      role: "Building Owner",
      image: "images/homepage-7/testimonial/testimonial-02.jpg",
      text: "I've been happy with the services provided by Lawyer Attorneys Firm. John was really patient to listen to all my problems and try his best to give me good advice for my case.",
    },
    {
      name: "Allien John",
      role: "Customer",
      image: "images/homepage-7/testimonial/testimonial-03.jpg",
      text: "I've been happy with the services provided by Lawyer Attorneys Firm. John was really patient to listen to all my problems and try his best to give me good advice for my case.",
    },
  ];

  return (
    <section className="testimonial-seven">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="pbmit-heading-subheading-style-1 text-white">
              <h4 className="pbmit-subtitle">Testimonials</h4>
              <h2 className="pbmit-title">What People Say</h2>
            </div>
            <div className="testimonial-arrow swiper-btn-custom d-flex flex-row-reverse">
              <Swiper
                modules={[Navigation]}
                navigation
                loop={true}
                autoplay={{ delay: 3000 }}
                slidesPerView={1}
                spaceBetween={30}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <article className="pbmit-box-testimonial pbmit-testimonialbox-style-3">
                      <div className="pbmit-post-item">
                        <div className="pbmit-box-content">
                          <div className="pbmit-box-star">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="pbmit-base-icon-star pbmit-skincolor pbmit-active"></i>
                            ))}
                          </div>
                          <div className="pbmit-box-desc">
                            <blockquote className="pbmit-testimonial-text">
                              <div className="pbmit-testimonial-textbox">{testimonial.text}</div>
                            </blockquote>
                          </div>
                          <div className="pbmit-box-author">
                            <div className="pbmit-box-img">
                              <span className="pbmit-item-thumbnail">
                                <span className="pbmit-item-thumbnail-inner">
                                  <img src={testimonial.image} className="img-fluid" alt={testimonial.name} />
                                </span>
                              </span>
                            </div>
                            <div className="pbmit-box-author-right">
                              <div className="pbmit-box-title">
                                <h3 className="pbmit-author-name">{testimonial.name}</h3>
                                <span className="pbmit-box-footer">{testimonial.role}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="col-md-12 col-lg-6"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
