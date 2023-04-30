import React from "react";
import { FaBeer, FaTelegramPlane } from 'react-icons/fa';

function Contact({ language }) {
  return (
    <section className="contactUs">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-12">
            <div className="contactUsText text-center">
              <span className="contactUsSpan">{language === 'en' ? `Contact Us` : `اتصل بنا
`} </span>
              <span className="todaySpan">{language === 'en' ? `Today` : `اليوم
`} </span>
            </div>
          </div>
        </div>
      </div>
      {/* contactUsFormContainer */}
      <div className="container " style={{ backgroundColor: 'white', padding: '5%', marginBottom: '-13%', borderRadius: '10px' }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="row text-center">
              <div className="col-lg-6">
                <div className="inputLogoWrapper">
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/contactForm/Placeholder.png"
                    alt="image"
                  />
                </div>
                <input
                  placeholder={language === 'en' ? `Name` : `اسم`}
                  type="text"
                  className="form-control custom_client_input mb-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-lg-6">
                <div className="inputLogoWrapper">
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/contactForm/Placeholder (1).png"
                    alt="image"
                  />
                </div>
                <input
                  placeholder={language === 'en' ? `Enter Your Email` : `أدخل بريدك الإلكتروني
                  `}
                  type="email"
                  className="form-control custom_client_input mb-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="messageinputLogoWrapper">
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/contactForm/Placeholder (2).png"
                    alt="image"
                  />
                </div>
                <textarea
                  className="form-control contactUsMessage"
                  placeholder={language === 'en' ? `Messages` : `رسائل
                  `}
                  id="floatingTextarea2"
                  style={{ height: 100 }}
                  defaultValue={""}
                />
              </div>
              <div className="sendButtonWrapper text-center">
                
                <button type="button" className="btn bannerButtonWrapper1 px-5 py-2"  style={{marginLeft: '5px', fontSize:'25px'}}>
                  { language === 'en' ? `Send` : `يرسل
`} <FaTelegramPlane style={{marginLeft: '5px', fontSize:'35px'}}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
