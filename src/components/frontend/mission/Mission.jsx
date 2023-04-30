import React from "react";
import imgVission from "../../../layouts/frontend/image/mission-vission.png";
import mission from "../../../layouts/frontend/image/mission.jpg";
import vission from "../../../layouts/frontend/image/vission.jpg";

const Mission = () => {
  return (
    <div>
      <div
        class="banner-header section-padding valign bg-img bg-fixed img-fluid"
        data-background="https://i.ibb.co/J26y8YG/career2.jpg"
        style={{
          backgroundImage: `url(${imgVission})`,
          minHeight: "500px",
          width: "100%",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="container">
          <div class="row">
            <div
              class="col-md-12  caption align-middle"
              style={{ marginTop: "200px" }}
            >
              <h5 style={{ color: "white", fontSize: "20px" }}>
                MH PREMIER STAFFING SOLUTIONS
              </h5>
              <h1 style={{ color: "white", fontSize: "70px" }}>
                Mission & Values
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div class="container " style={{ marginTop: "150px" }}>
        <div class="row justify-content-end">
          <div class="col-12 col-md-6 col-lg-6">
            <h2 class="my-5">Our Mission</h2>
            <p style={{ fontSize: "18px" }}>
              Our mission is to create shared success amongst customers and
              recruited staff.
            </p>
            <p style={{ fontSize: "18px" }}>
              A company that trusts a recruitment agency in finding personnel
              puts the keys to success or failure in its hands, especially in a
              world as elegant as that of hospitality, hotels & restaurants.
            </p>
            <p style={{ fontSize: "18px" }}>
              We take this mission with eminent significance by living this
              world at the pace of our customers.
            </p>
            <p style={{ fontSize: "18px" }}>
              We measure our success at the end of the mission of recruiting
              staff when our client calls us back for a new challenge.
            </p>
            <p style={{ fontSize: "18px" }}>
              The secret to this success is to always consider the client and
              their well-being, objectives and goals, as well as the selected
              recruited staff, instead of thinking of the income you can gain
              from the opportunity.
            </p>
          </div>
          <div class="col-12 col-md-6 col-lg-6 mt-5">
            <img src={mission} alt="the mission" class="img-fluid" />
          </div>
        </div>

        <div class="row justify-content-end mt-5">
          <div class="col-12 col-md-6 col-lg-6 mt-5">
            <img src={vission} alt="the mission" class="img-fluid" />
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <h2 class="my-5">Our Vission</h2>
            <p style={{ fontSize: "18px" }}>
              The human being put first is always our priority. Making sure that
              they come before the business is a value we stand by.
            </p>
            <p style={{ fontSize: "18px" }}>
              We believe that someone hired in the right position becomes a
              person who enjoys their job, positively affecting their whole
              life.
            </p>
            <p style={{ fontSize: "18px" }}>
              A customer who expresses their concerns and tells us their dreams
              for their company is someone who wants us to overcome a challenge,
              which we do with help from each other.
            </p>
            <p style={{ fontSize: "18px" }}>
              We live in a globalised world where the human component is often
              forgotten. However, the most successful stories and the
              significant chalenges won were made by people who considered the
              human being as the added value of the company.
            </p>
            <p style={{ fontSize: "18px", marginBottom: "200px" }}>
              Education, compared to listening, is a must for everyone;
              constructive comparison represents a daily enrichment for us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
