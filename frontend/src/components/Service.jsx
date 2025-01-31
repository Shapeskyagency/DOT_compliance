import React from "react";

const practiceAreas = [
  ["Driver Management Services", "Fleet Management Services ", "Compliance Review","Drug & Alcohol Consortium"],
  ["New USDOT Number", "U.C.R.", "SCAC","NON-DOT Drug Testing"],
  ["Clearinghouse", "Biennual Update", "Operating Authority","Carb Cert"],
];

function Service() {
  return (
    <>
      {/* Why Choose Us Start */}
      <section className="section-lg why-choose-section-seven">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="pbmit-heading-subheading-style-2 text-white">
                <h4 className="pbmit-subtitle">WHY CHOOSE US</h4>
                <h2 className="pbmit-title">Explore our wide range of practice areas</h2>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                {practiceAreas.map((column, index) => (
                  <div key={index} className="col-md-4">
                    <ul className="list-group list-group-style-1 list-group-borderless">
                      {column.map((area, idx) => (
                        <li key={idx} className="list-group-item">
                          <i className="themifyicon ti-arrow-right"></i>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us End */}



      
    </>
  );
}

export default Service;
