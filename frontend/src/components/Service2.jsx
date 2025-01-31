import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles

function Services2() {
  const services = [
    {
      id: 1,
      title: "Driver Compliance Management ",
      category: "Personal",
      description: "Ensure your drivers meet all FMCSA requirements with qualification file tracking, medical certifications, and automated reminders.",
      image: "images/homepage-7/service/service-01.jpg",
      iconClass: "pbmit-attorco-business-icon-equality"
    },
    {
      id: 2,
      title: "Document & Record-Keeping",
      category: "Financial",
      description: "Maintain accurate, audit-ready records, including vehicle maintenance logs, inspection reports, and safety compliance documents.",
      image: "images/homepage-7/service/service-02.jpg",
      iconClass: "pbmit-attorco-business-icon-law-book"
    },
    {
      id: 3,
      title: "DOT Audit Support & Risk Management",
      category: "Business",
      description: "Be prepared for DOT audits with proactive compliance monitoring, expert guidance, and risk-reduction strategies.",
      image: "images/homepage-7/service/service-03.jpg",
      iconClass: "pbmit-attorco-business-icon-legal"
    },
    {
      id: 4,
      title: "Drug & Alcohol Testing Programs",
      category: "Business",
      description: "Stay compliant with FMCSA drug and alcohol testing requirements using our nationwide testing network.",
      image: "images/homepage-7/service/service-04.jpg",
      iconClass: "pbmit-attorco-business-icon-briefcase"
    },
    {
      id: 5,
      title: "Fleet & Safety Compliance",
      category: "Business",
      description: "Optimize your fleet’s safety with vehicle monitoring, compliance updates, and risk management solutions.",
      image: "images/homepage-7/service/service-04.jpg",
      iconClass: "pbmit-attorco-business-icon-briefcase"
    },
    {
      id: 6,
      title: "Regulatory Updates & Expert Guidance",
      category: "Business",
      description: "Stay ahead of changing regulations with access to compliance experts and up-to-date industry insights.",
      image: "images/homepage-7/service/service-04.jpg",
      iconClass: "pbmit-attorco-business-icon-briefcase"
    }
  ];

  return (
    <section className="pbmit-bg-color-light section-x">
      <div className="container">
        <div className="pbmit-heading-subheading-style-2 text-center">
          <h4 className="pbmit-subtitle">WHY CHOOSE US</h4>
          <h2 className="pbmit-title">
      Trusted DOT Compliance Solutions with Over 10 Years <br /> of Industry Experience
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          loop={true}
          autoplay={{ delay: 3000 }}
          // slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 3 }
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <article className="pbmit-servicebox-style-6">
                <div className="pbmit-post-item">
                  <div className="pbmit-ihbox-icon-light">
                    <i className={`pbmit-attorco-business-icon ${service.iconClass}`}></i>
                  </div>
                  <span className="pbmit-item-thumbnail">
                    <span className="pbmit-item-thumbnail-inner">
                      <img src={service.image} className="img-fluid" alt={service.title} />
                    </span>
                  </span>
                  <div className="pbmit-box-content">
                    <div className="pbmit-box-content-inner">
                      <div className="pbmit-ihbox-icon">
                        <i className={`pbmit-attorco-business-icon ${service.iconClass}`}></i>
                      </div>
                      <div className="pbmit-pf-box-title">
                        <div className="pbmit-box-category">
                          <a href="practice-areas.html" rel="tag">{service.category}</a>
                        </div>
                        <h3>
                          <a href="practice-areas-detail.html">{service.title}</a>
                        </h3>
                        <div className="pbmit-service-content">
                          <p>{service.description}</p>
                        </div>
                        <div className="pbmit-service-readmore">
                          <a href="practice-areas-detail.html">Learn More</a>
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
    </section>
  );
}

export default Services2;
