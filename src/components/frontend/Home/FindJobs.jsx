import React from "react";
import { Link } from "react-router-dom";

function FindJobs({language}) {
  return (
    <section className="find_jobs">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="col-lg-6">
              <div className="humanimgwrapper">
                <img
                  className="human"
                  src="assets/frontend/images/indexImages/Find job/kisspng-web-design-web-page-search-engine-optimization-web-5c63b3e4337f02 1.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="counterimgwrapper">
                <img
                  className="img-fluid workers w-75"
                  src="assets/frontend/images/indexImages/Find job/Frame 39.png"
                  alt="image"
                />
                <img
                  className="img-fluid jobs w-75"
                  src="assets/frontend/images/indexImages/Find job/Frame 38.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="jobsh1">
              <h1>
                { language === 'en' ?  `Find The Best` : `ابحث عن الأفضل
`}
                <span className="customWorkerJobsText"> {language === 'en' ?  `Workers` : `عمال ` } </span>
                <span className="customWorkerJobsText">{ language === 'en' ?  `Jobs` : `وظائف`}   </span>{ language === 'en' ?  `In here` : `هنا`}
              </h1>
            </div>
            <div className="jobsp">
              <p>
                { language ==='en' ? `PREMIER STAFFING SOLUTIONS helps you hire great 
                experienced workers at a moment's notice. You can Apply for Jobs
                as well` :`حلول الموظفين الأولى يساعدك على توظيف رائع
                العمال ذوي الخبرة في أي لحظة. يمكنك التقدم للوظائف
                أيضً`}
               
              </p>
            </div>
            <div className="bannerButtonWrapper text-end">
              {/* <Link to='/login'>
              <button type="button" className="btn bannerButtonWrapper1">
                Hire a worker
              </button>
              </Link>
             <Link to='/register'>
             <button
                type="button"
                style={{ marginLeft: "5px" }}
                className="btn bannerButtonWrapper2"
              >
                Drop your CV, if Job Needed
              </button>
             </Link> */}

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
        </div>
      </div>
    </section>
  );
}

export default FindJobs;
