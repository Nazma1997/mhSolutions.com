import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer({language}) {


  return (
    <>
      <section className="footer" style={{ paddingTop: "130px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-2">
              <div className="leftPartLinks">
                <ul>
                  <li>
                    <Link to="/">{language === 'en' ? `Home` : `بيت
`} </Link>
                    {/* <Link to="/customers">Customers</Link> */}
                    <Link to="/contract">{language === 'en' ? `Contract` : `عقد
`}</Link>
                    <Link to="/about">{language === 'en' ? `About Us` : `معلومات عنا
`} </Link>
                    <Link to="/payroll-services">{language === 'en' ? `Services` : `خدمات
`} </Link>
                    <Link to="/meet-the-team">{language === 'en' ? `Meet The Team` : `قابل الفريق
`} </Link>
                    <Link to="/job-opportunities">{language === 'en' ? `Career` : `حياة مهنية
`} </Link>
                    <Link to="/faq">{language === 'en' ? `Faq` : `التعليمات`} </Link>
                    <Link to="/mission"> {language === 'en' ? `Mission` : `مهمة
`}</Link>
                    {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="."
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Legal
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                      style={{color:'black'}}
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/corporate-information"
                        >
                          Corporate Information
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/terms-of-use"
                        >
                          Website terms of use
                        </Link>
                      </li>
                      <li style={{color:'black'}}>
                        <Link
                          className="dropdown-item"
                          to="/privacy"
                          
                        >
                          Privacy notice
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-8">
              <div className="middlePart">
                <h3>{language === 'en' ? `Need Help? Contact Us` : `تحتاج مساعدة؟ اتصل بنا
`} </h3>
                <h4>+44 20 3980 9360</h4>
                <h5>info@mhpremierstaffingsolutions.com</h5>
                <div className="placeImg">
                  <h6>
                    <img
                      src="assets/frontend/images/indexImages/place.png"
                      alt="image"
                    />
                    {language === 'en' ? `48 Warwick St Regent Street W1B 5AW London` : `48 وارويك سانت ريجنت ستريت W1B 5AW لندن
`}
                    
                  </h6>
                </div>
                <span>{language === 'en' ? `Follow us on` : `اتبعنا
`} </span>
                <div className="socialMediaIcons">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/RecruitmentMirkoHospitality/"
                  >
                    <img
                      className="img-fluid"
                      src="assets/frontend/images/indexImages/socialMedia/Group 116168.png"
                      alt="image"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/recruitmentmirkohospitality/"
                  >
                    <img
                      className="img-fluid"
                      src="assets/frontend/images/indexImages/socialMedia/Group 116169.png"
                      alt="image"
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/mirko-hospitality/mycompany/?viewAsMember=true"
                  >
                    <img
                      className="img-fluid"
                      src="assets/frontend/images/indexImages/socialMedia/Group 116170.png"
                      alt="image"
                    />
                  </a>
                  <a href="https://vm.tiktok.com/ZGJmndX98/" target="_blank">
                    <img
                      className="img-fluid"
                      src="assets/frontend/images/indexImages/socialMedia/Group 116171.png"
                      alt="image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-2">
              <div className="rightPartLinks">
                <ul>
                  <li>
                    <Link to="corporate-information">
                      
                      {language === 'en' ? `CORPORATE INFORMATION` : `معلومات الشركات
`}
                    </Link>
                    <Link to="/terms-of-use">{language === 'en' ? `WEBSITE TERM OF USE` : `مدة استخدام الموقع
`} </Link>
                    <Link to="/privacy">{language === 'en' ? `PRIVACY NOTICE` : `إشعار الخصوصية
`} </Link>
                    <a>{language === 'en' ? `COOKIES` : `بسكويت
`} </a>
                    <a>{language === 'en' ? `DOWNLOAD THE APP` : `قم بتنزيل التطبيق
`} </a>
                  </li>
                </ul>
                <div className="rightPartLogoWrapper text-end">
                  <a
                    href="https://apps.apple.com/us/app/mh/id6446052294"
                    target="_blank"
                  >
                    <img
                      className="img-fluid me-2"
                      src="assets/frontend/images/indexImages/socialMedia/Group 117303.png"
                      alt="image"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.invain.mh"
                    target="_blank"
                  >
                    <img
                      className="img-fluid"
                      src="assets/frontend/images/indexImages/socialMedia/Group 117304.png"
                      alt="image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 footerFinal">
              <div className="footerTextWrpper d-flex justify-content-between">
                <span>
                  {language === 'en' ? `© 2023 MH Premier Staffing Solutions. All rights reserved.` :  `  © حلول التوظيف الممتازة لعام 2023 MH. كل الحقوق محفوظة.
`}
              
                </span>
                <img
                  className="img-fluid footerFinalLogo"
                  src="assets/frontend/images/indexImages/footerLogo.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
