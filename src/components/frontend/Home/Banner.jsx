import React from "react";
import { Link } from "react-router-dom";

function Banner({ language }) {

  return (
    <section className="Indexbanner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 Home_page_left_part">
            <img
              src="assets/frontend/images/indexImages/PERTICLE1 (2).png"
              className="img-fluid perticle1"
              alt
            />
            <div className="h1Wrapper">

              <h2>{
                language ==='en' ? 'PREMIER STAFFING SOLUTIONS' :'حلول الموظفين الأولى'
              }</h2>
            </div>
            <div className="pTextWrapper">
              <p>
              {
                language ==='en' ? `PREMIER STAFFING SOLUTIONS helps you hire great &amp
                experienced workers at a moment's notice. You can Apply for Jobs
                as well` :
                              `'حلول الموظفين الأولى 
                              يساعدك على توظيف رائع & amp؛
                                              العمال ذوي الخبرة في أي لحظة. يمكنك التقدم للوظائف`
              }
              
              </p>
            </div>
            <div className="bannerButtonWrapper">
              <Link to='/login'>
                <button type="button" className="btn bannerButtonWrapper1">
                  { language === 'en' ? `Hire a worker` : `استأجر عاملاً`}
                </button>
              </Link>
              <Link to='/register'>
                <button type="button" style={{ marginLeft: '5px' }} className="btn bannerButtonWrapper2">
                 {language === 'en' ? `Drop your CV, if Job Needed` : `اترك سيرتك الذاتية إذا احتجت إلى وظيفة
`}
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 Home_page_right_part">
            <img
              src="assets/frontend/images/indexImages/PERTICLE2.png"
              className="img-fluid perticle2"
              alt
            />
            <div className="bannerImageWrapper">
              <img
                src="assets/frontend/images/indexImages/Group 117293.png"
                className="img-fluid"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
