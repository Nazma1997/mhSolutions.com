import React from "react";
import image1 from '../../../layouts/frontend/image/PERTICLE1 (2).png'

function DownloadApp({language}) {
  return (
    <section className="downloadApp">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="assets/frontend/images/indexImages/PERTICLE2.png"
              className="downloadPerticle img-fluid"
              alt="image"
            />
            <div className="appAvailableImage">
              <img
                className="img-fluid"
                src="assets/frontend/images/indexImages/lineImg.png"
                alt="image"
              />
            </div>
            <div className="h2DownloadWrapper">
              <h2>{ language === 'en' ? ` Download The App` : `قم بتنزيل التطبيق
`}</h2>
            </div>
            <div className="pDownloadWrapper">
              <p>
            { language ==='en' ? `PREMIER STAFFING SOLUTIONS helps you hire great 
                experienced workers at a moment's notice. You can Apply for Jobs
                as well` :`حلول الموظفين الأولى يساعدك على توظيف رائع
                العمال ذوي الخبرة في أي لحظة. يمكنك التقدم للوظائف
                أيضً`}
               
              </p>
            </div>
            <div className="buttonDownloadWrapper d-flex justify-content-around align-items-center">
              {/* <a href>
                <img
                  className="img-fluid"
                  src="assets/frontend/images/indexImages/appleButton.png"
                  alt="the"
                />
              </a>
              <a href>
                <img
                  className="img-fluid"
                  src="assets/frontend/images/indexImages/Group 116147.png"
                  alt="the"
                />
              </a> */}
               <a href='https://apps.apple.com/us/app/mh/id6446052294' target='_blank'>
               <img
                  className="img-fluid"
                  src="assets/frontend/images/indexImages/appleButton.png"
                  alt="the"
                />
                </a>
                <a href ='https://play.google.com/store/apps/details?id=com.invain.mh' target="_blank">
                <img
                  className="img-fluid"
                  src="assets/frontend/images/indexImages/Group 116147.png"
                  alt="the"
                />
                </a>
            </div>
          </div>
          <div className="col-lg-6">
            <img
               src="assets/frontend/images/indexImages/PERTICLE1 (2).png"
              className="downloadPerticle2 img-fluid"
              // className="img-fluid perticle1"
              alt="the "
            />
            <div className="phoneImgWrapper">
              <img
                className="img-fluid"
                src="assets/frontend/images/indexImages/phone.png"
                alt="the"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
