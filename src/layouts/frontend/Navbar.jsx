import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import './select.css'

function Navbar({ setLanguage, language }) {

  // const { t } = useTranslation();

  // const welcome_to_React = " Hello Bangladesh"
  const changeLanguage = (e) => {
    setLanguage(e.target.value)
  };

  // console.log('navla',language)
  //  if(ready){
  return (

    <>

      <section className="header sticky-top">
        <div className="container Index_header_container ">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand customNav320" to="/">
                  <img
                    className="img-fluid nav_logo"
                    src="assets/frontend/images/indexImages/logo.png"
                    alt="image"
                  />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="home_navbar_custom collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="navbar_custom_hover nav-link"
                        aria-current="page"
                        to="/"
                      >
                        {language === 'en' ? `Home` : `بيت`}
                      </NavLink>
                    </li>


                    {/* <li className="nav-item">
                    <NavLink
                      className="navbar_custom_hover nav-link"
                      aria-current="page"
                      to="/register"
                    >
                      Register
                    </NavLink>
                  </li> */}
                    <li className="nav-item">
                      <NavLink
                        className="navbar_custom_hover nav-link"
                        to="/about"

                      >
                        {language === 'en' ? `About Us` : `معلومات عنا
`}
                      </NavLink>
                    </li>

                    {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="."
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Career
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/job-opportunities"
                        >
                          World Hospitality
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/job-opportunities"
                        >
                          Job Opportunities
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/job-opportunities"
                        >
                          Law And Regulations
                        </Link>
                      </li>
                    </ul>
                  </li> */}
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
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/privacy"
                        >
                          Privacy notice
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                    {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="javascript:void(0)"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/payroll-services"
                        >
                          PAYROLL
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/recruiting-services"
                        >
                          RECRUITING
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/strategy-consultancy-services"
                        >
                          STRATEGY CONSULTANCY
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                    <li className="nav-item">
                      <NavLink
                        className="navbar_custom_hover nav-link"
                        aria-current="page"
                        to="/payroll-services"
                      >
                        {language === 'en' ? `Services` : `خدمات
`}
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="navbar_custom_hover nav-link"
                        aria-current="page"
                        to="/mission"
                      >
                        {language === 'en' ? `Mission` : `مهمة

`}

                      </NavLink>
                    </li>
                    {/* <li className="nav-item">
                    <NavLink
                      className="navbar_custom_hover nav-link"
                      aria-current="page"
                      to="/meet-the-team"
                    >
                      Team
                    </NavLink>
                  </li> */}
                    <div className="languageFlagWrapper d-flex justify-content-center align-items-center">
                      <img
                        className="img-fluid"
                        src="assets/frontend/images/indexImages/flag.png"
                        alt="image"
                      />
                    </div>
                    {/* <li className="nav-item dropdown">
                    <button
                      className="nav-link dropdown-toggle border-0 "
                      href="javascript:void(0)"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{backgroundColor:'#fafafa'}}
                  
                    >
                      Eng
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <button className="dropdown-item border-0" href="#"    style={{backgroundColor:'#fafafa'}}
                         
                        >
                          Arabic
                         
                        </button>
                      </li>
                      <li>
                      <button className="dropdown-item border-0" href="#"    style={{backgroundColor:'#fafafa'}}>
                          French
                        </button>
                      </li>
                      <li></li>
                      <li>
                      <button className="dropdown-item border-0" href="#"    style={{backgroundColor:'#fafafa'}}>
                          Spanish
                        </button>
                      </li>
                    </ul>
                  </li> */}

                    <select onChange={e => changeLanguage(e)} className="nav-item dropdown border-0 mx-1 navbar_custom_hover nav-link selectItem">
                      {/* <option>En</option> */}
                      <option value={'en'} selected>{language === 'en' ? `English` : `إنجليزي


`}
 </option>
                      <option value={'ar'}>{language === 'en' ? `Arabic` : `عربي



`}</option>
                    </select>
                    <button type="button" className="navButton btn">
                      <Link to="/login">
                        <img
                          src="assets/frontend/images/indexImages/person.png"
                          alt="image"
                        />
                        {language === 'en' ? `Sign In` : `تسجيل الدخول




`}
                      </Link>
                    </button>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  //  }
}

export default Navbar;
