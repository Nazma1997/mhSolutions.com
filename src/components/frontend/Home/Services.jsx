import React from "react";

function Services({language}) {
  return (
    <section className="our_services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="ourServicesSpan">
              <span className="custom_span1">{language === 'en' ? `Our` : `ملكنا
`}</span>
              <span className="custom_span2">{language === 'en' ? `Services` : `خدمات`} </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
