import React from "react";

function Ihbox() {
  const services = [
    {
      id: "01",
      title: "DOT Compliance Guidance",
      description: "Get expert advice on FMCSA regulations and compliance requirements tailored to your business needs.",
      iconClass: "pbmit-attorco-business-icon-balance"
    },
    {
      id: "02",
      title: "Document Management & Review",
      description: "Ensure your driver qualification files, vehicle records, and compliance documents are accurate and audit-ready.",
      iconClass: "pbmit-attorco-business-icon-suitcase"
    },
    {
      id: "03",
      title: "Cost-Effective Solutions",
      description: "Access affordable compliance support with service plans designed to fit your budget and operational needs.",
      iconClass: "pbmit-attorco-business-icon-legal-document"
    }
  ];

  return (
    <>
      {/* Ihbox Section Start */}
      <section className="section-lgb">
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div
                  className={`pbmit-ihbox-style-8 ${
                    index === 1 ? "ihbox-seven-second-style" : index === 2 ? "ihbox-seven-last-style" : ""
                  }`}
                >
                  <div className="pbmit-ihbox-inner">
                    <div className="pbmit-ihbox-heading-with-icon">
                      <div className="pbmit-ihbox-icon">
                        <div className="pbmit-ihbox-icon-wrapper">
                          <i className={`pbmit-attorco-business-icon ${service.iconClass}`}></i>
                        </div>
                      </div>
                      <div className="pbmit-ihbox-heading">
                        <div className="pbmit-ihbox-big-number-text">{service.id}</div>
                        <h2 className="pbmit-custom-heading">{service.title}</h2>
                        <div className="pbmit-ihbox-contents">
                          <div className="pbmit-cta3-content-wrapper">{service.description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Ihbox Section End */}
    </>
  );
}

export default Ihbox;
