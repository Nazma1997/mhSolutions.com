import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import rectangle from "../../../layouts/frontend/image/Rectangle 40237.png";
import vector from "../../../layouts/frontend/image/Vector.png";
import img1 from "../../../layouts/frontend/image/Profile (1).png";
import img2 from "../../../layouts/frontend/image/Vector (1).png";
import img3 from "../../../layouts/frontend/image/Vector (2).png";
import img4 from "../../../layouts/frontend/image/Subtract.png";
import img5 from "../../../layouts/frontend/image/Vector (3).png";
import img6 from "../../../layouts/frontend/image/Vector (4).png";
import img7 from "../../../layouts/frontend/image/Vector (5).png";
import img8 from "../../../layouts/frontend/image/Vector (6).png";
import img9 from "../../../layouts/frontend/image/Vector (7).png";
import img10 from "../../../layouts/frontend/image/Vector (8).png";
import img11 from "../../../layouts/frontend/image/Union.png";
import img12 from "../../../layouts/frontend/image/Vector (9).png";
import img13 from "../../../layouts/frontend/image/Vector (10).png";

const AfterLogin = () => {
  return (
    <div className='pb-5'>
      {/* <section className="header sticky-top">
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

                      </NavLink>
                    </li>

                    <div className="languageFlagWrapper d-flex justify-content-center align-items-center">
                      <img
                        className="img-fluid"
                        src="assets/frontend/images/indexImages/flag.png"
                        alt="image"
                      />
                    </div>

                    <select

                      className="nav-item dropdown border-0 mx-1 navbar_custom_hover nav-link selectItem"
                    >

                      <option selected>
                        English
                      </option>
                      <option>
                        Arabic
                      </option>
                    </select>

                    <div style={{
                      backgroundColor: '#FFA800', borderRadius: "15px", width: '50px', height: '28px'
                    }} >
                      <img
                        className="me-1 px-1"
                        src={vector}
                        alt="image"

                      />
                      <img
                        style={{ height: '18px' }}
                        src={rectangle}
                        alt="image"
                      />
                    </div>

                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section> */}

      <div style={{
        background: '#FFFFFF',
        border: '0.5px solid #A6A6A6', borderRadius: '14.8px'
      }} className='container mt-5 pb-5'>
        <div style={{
          height: '95px', marginLeft: '-12px',
          marginRight: '-12px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px',
          backgroundColor: 'black'
        }}>

          <p className='text-center py-4 ' style={{ color: 'white', fontWeight: '600', fontSize: '12px', lineHeight: '30px' }}>Hey Razinul Karim, Your Profile is <strong style={{ color: '#C6A34F' }}>30%</strong> Done. Please, complete your profile to Proceed Next!<span className='mx-3 rounded-circle border border-white border-5 px-1 py-2 '> 30% </span> </p>


        </div>




        <div className='container mt-5'>
          <div className='d-md-flex d-lg-flex  justify-content-evenly'>
            <div>
              <div>
                <div className='d-flex mt-2'>
                  <img src={img1} alt='tt' style={{ height: '15px', width: '15px', marginTop: '8px' }} />
                  <p className='mx-2' style={{ color: '#C6A34F', fontWeight: '400', fontSize: '11px', marginTop: '8px' }}>First Name</p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" Razinul "
                  required=""
                  className="border-bottom border-0 px-1   "

                  style={{ fontWeight: '500', fontSize: '15px', marginTop: '5px', outline: "none" }}
                />
              </div>

              <div className='mt-2'>
                <div className='d-flex mt-2'>
                  <img src={img2} alt='tt' style={{ height: '15px', width: '15px', marginTop: '8px' }} />
                  <p className='mx-2' style={{ color: '#C6A34F', fontWeight: '400', fontSize: '11px', marginTop: '8px' }}>Position</p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" Manager "
                  required=""
                  className="border-bottom border-0 px-1   "

                  style={{ fontWeight: '500', fontSize: '15px', marginTop: '5px', outline: "none" }}
                />
              </div>

              <div className='mt-2'>
                <div className='d-flex mt-2'>
                  <img src={img3} alt='tt' style={{ height: '15px', width: '15px', marginTop: '8px' }} />
                  <p className='mx-2' style={{ color: '#C6A34F', fontWeight: '400', fontSize: '11px', marginTop: '8px' }}>Phone Number</p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" +880-1726332325 "
                  required=""
                  className="border-bottom border-0 px-1   "

                  style={{ fontWeight: '500', fontSize: '15px', marginTop: '5px', outline: "none" }}
                />
              </div>
              <div className='mt-2'>
                <div className='d-flex mt-2'>
                  <img src={img4} alt='tt' style={{ height: '15px', width: '15px', marginTop: '8px' }} />
                  <p className='mx-2' style={{ color: '#C6A34F', fontWeight: '400', fontSize: '11px', marginTop: '8px' }}>Present Address</p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" Latif School, Patuakhali"
                  required=""
                  className="border-bottom border-0 px-1   "

                  style={{ fontWeight: '500', fontSize: '15px', marginTop: '5px', outline: "none" }}
                />
              </div>
              <div className='mt-2'>
                <div className='d-flex mt-2'>
                  <img src={img5} alt='tt' style={{ height: '15px', width: '15px', marginTop: '8px' }} />
                  <p className='mx-2' style={{ color: '#C6A34F', fontWeight: '400', fontSize: '11px', marginTop: '8px' }}>Date of Birth</p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" -- / -- / --"
                  required=""
                  className="border-bottom border-0 px-1   "

                  style={{ fontWeight: '500', fontSize: '15px', marginTop: '5px', outline: "none" }}
                />
              </div>
              <div className='mt-2'>
                <div className='d-flex mt-2'>
                  <img src={img6} alt='tt' style={{ height: '15px', width: '15px', marginTop: '8px' }} />
                  <p className='mx-2' style={{ color: '#C6A34F', fontWeight: '400', fontSize: '11px', marginTop: '8px' }}>language</p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" Type here..."
                  required=""
                  className="border-bottom border-0 px-1   "

                  style={{ fontWeight: '500', fontSize: '15px', marginTop: '5px', outline: "none" }}
                />
              </div>
              <div className='mt-2'>
                <div className='d-flex mt-2'>
                  <img src={img7} alt='tt' style={{ height: '15px', width: '15px', marginTop: '8px' }} />
                  <p className='mx-2' style={{ color: '#C6A34F', fontWeight: '400', fontSize: '11px', marginTop: '8px' }}>Higher Education</p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" -"
                  required=""
                  className="border-bottom border-0 px-1   "

                  style={{ fontWeight: '500', fontSize: '15px', marginTop: '5px', outline: "none" }}
                />
              </div>
              <div className='mt-2'>
                <div className='d-flex mt-2'>
                  <img src={img3} alt='tt' style={{ height: '15px', width: '15px', marginTop: '8px' }} />
                  <p className='mx-2' style={{ color: '#C6A34F', fontWeight: '400', fontSize: '11px', marginTop: '8px' }}>Emergency Contact</p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" - "
                  required=""
                  className="border-bottom border-0 px-1   "

                  style={{ fontWeight: '500', fontSize: '15px', marginTop: '5px', outline: "none" }}
                />
              </div>

            </div>

            <div>
              <div>
                <div className='d-flex mt-2'>
                  <img src={img1} alt='tt' style={{ height: '15px', width: '15px', marginTop: '8px' }} />
                  <p className='mx-2' style={{ color: '#C6A34F', fontWeight: '400', fontSize: '11px', marginTop: '8px' }}>Last Name</p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" karim "
                  required=""
                  className="border-bottom border-0 px-1   "

                  style={{ fontWeight: '500', fontSize: '15px', marginTop: '5px', outline: "none" }}
                />
              </div>
              <div className='mt-2'>
                <div className='d-flex mt-2'>
                  <img src={img8} alt='tt' style={{ height: '15px', width: '15px', marginTop: '8px' }} />
                  <p className='mx-2' style={{ color: '#C6A34F', fontWeight: '400', fontSize: '11px', marginTop: '8px' }}>Gender</p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" - "
                  required=""
                  className="border-bottom border-0 px-1   "

                  style={{ fontWeight: '500', fontSize: '15px', marginTop: '5px', outline: "none" }}
                />
              </div>
              <div className='mt-2'>
                <div className='d-flex mt-2'>
                  <img src={img9} alt='tt' style={{ height: '15px', width: '15px', marginTop: '8px' }} />
                  <p className='mx-2' style={{ color: '#C6A34F', fontWeight: '400', fontSize: '11px', marginTop: '8px' }}>Email</p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" raz.cse5.bu@gmail.com"
                  required=""
                  className="border-bottom border-0 px-1   "

                  style={{ fontWeight: '500', fontSize: '15px', marginTop: '5px', outline: "none" }}
                />
              </div>
              <div className='mt-2'>
                <div className='d-flex mt-2'>
                  <img src={img4} alt='tt' style={{ height: '15px', width: '15px', marginTop: '8px' }} />
                  <p className='mx-2' style={{ color: '#C6A34F', fontWeight: '400', fontSize: '11px', marginTop: '8px' }}>Permanent Address</p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" -"
                  required=""
                  className="border-bottom border-0 px-1   "

                  style={{ fontWeight: '500', fontSize: '15px', marginTop: '5px', outline: "none" }}
                />
              </div>
              <div className='mt-2'>
                <div className='d-flex mt-2'>
                  <img src={img10} alt='tt' style={{ height: '15px', width: '15px', marginTop: '8px' }} />
                  <p className='mx-2' style={{ color: '#C6A34F', fontWeight: '400', fontSize: '11px', marginTop: '8px' }}>Country</p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" -"
                  required=""
                  className="border-bottom border-0 px-1   "

                  style={{ fontWeight: '500', fontSize: '15px', marginTop: '5px', outline: "none" }}
                />
              </div>
              <div className='mt-2'>
                <div className='d-flex mt-2'>
                  <img src={img11} alt='tt' style={{ height: '15px', width: '15px', marginTop: '8px' }} />
                  <p className='mx-2' style={{ color: '#C6A34F', fontWeight: '400', fontSize: '11px', marginTop: '8px' }}>Skills</p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" type here"
                  required=""
                  className="border-bottom border-0 px-1   "

                  style={{ fontWeight: '500', fontSize: '15px', marginTop: '5px', outline: "none" }}
                />
              </div>
              <div className='mt-2'>
                <div className='d-flex mt-2'>
                  <img src={img12} alt='tt' style={{ height: '15px', width: '15px', marginTop: '8px' }} />
                  <p className='mx-2' style={{ color: '#C6A34F', fontWeight: '400', fontSize: '11px', marginTop: '8px' }}>Licenses No.</p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" -"
                  required=""
                  className="border-bottom border-0 px-1   "

                  style={{ fontWeight: '500', fontSize: '15px', marginTop: '5px', outline: "none" }}
                />
              </div>
              <div className='mt-2'>
                <div className='d-flex mt-2'>
                  <img src={img13} alt='tt' style={{ height: '15px', width: '15px', marginTop: '8px' }} />
                  <p className='mx-2' style={{ color: '#C6A34F', fontWeight: '400', fontSize: '11px', marginTop: '8px' }}>Certificate Name</p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" -"
                  required=""
                  className="border-bottom border-0 px-1   "

                  style={{ fontWeight: '500', fontSize: '15px', marginTop: '5px', outline: "none" }}
                />
              </div>
            </div>
          </div>

          <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }} className='mt-5'>
            <button style={{ background: '#C6A34F', borderTopLeftRadius: '10px', borderBottomRightRadius: '10px', color: 'white', outline: 'none' }} className='px-5 py-2 border-0'>Submit Info</button>


          </div>

        </div>

      </div>
    </div>
  )
}

export default AfterLogin
