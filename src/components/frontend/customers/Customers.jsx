import React from "react";
import img1 from "../../../layouts/frontend/image/clients/Hotel Xeniya.png";
import img2 from "../../../layouts/frontend/image/clients/bITALIAN.png";
import img3 from "../../../layouts/frontend/image/clients/bafarat.png";
import img4 from "../../../layouts/frontend/image/clients/cicchetti.png";
import banner from "../../../layouts/frontend/image/clients/client.png";
import img5 from "../../../layouts/frontend/image/clients/clondon.png";
import img6 from "../../../layouts/frontend/image/clients/conchigliaitalian.png";
import img7 from "../../../layouts/frontend/image/clients/edera.png";
import img8 from "../../../layouts/frontend/image/clients/forno.png";
import img9 from "../../../layouts/frontend/image/clients/hush.png";
import img10 from "../../../layouts/frontend/image/clients/jungle.png";
import img11 from "../../../layouts/frontend/image/clients/kenlos.png";
import img12 from "../../../layouts/frontend/image/clients/lamia.png";
import img13 from "../../../layouts/frontend/image/clients/lissome.png";
import img14 from "../../../layouts/frontend/image/clients/lsq.png";
import img15 from "../../../layouts/frontend/image/clients/lucio.png";
import img16 from "../../../layouts/frontend/image/clients/macellaio.png";
import img17 from "../../../layouts/frontend/image/clients/parkworld.png";
import img18 from "../../../layouts/frontend/image/clients/pintaderacafe.png";
import img19 from "../../../layouts/frontend/image/clients/salotto.png";
import img20 from "../../../layouts/frontend/image/clients/sancarlo.png";
import img21 from "../../../layouts/frontend/image/clients/santi.png";
import img22 from "../../../layouts/frontend/image/clients/santore.png";
import img23 from "../../../layouts/frontend/image/clients/tastingitaly.png";
import img24 from "../../../layouts/frontend/image/clients/zafferanoitalia.png";
import video from "../../../layouts/frontend/image/video.jpg";
import Testimonial2 from "../Home/Testimonial2";

const Customers = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4
  // };

  const imageLogo = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
  ];
  return (
    <div>
      <div
        class="banner-header section-padding valign bg-img bg-fixed img-fluid"
        data-background="https://i.ibb.co/J26y8YG/career2.jpg"
        style={{
          backgroundImage: `url(${banner})`,
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
              <h5 style={{ color: "white", fontSize: "18px" }}>
                MH PREMIER STAFFING SOLUTIONS
              </h5>
              <h1 style={{ color: "white", fontSize: "70px" }}>Customers</h1>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          // paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <div class="container ">
          <h1 class="mt-5">MH</h1>
          <p style={{ fontSize: "20px" }} class="my-3">
            MH PREMIER STAFFING SOLUTIONS
          </p>

          <p class="mt-4" style={{ fontSize: "18px" }}>
            Our many years of experience in hospitality and restaurants allow us
            to offer high value services for new and already existing
            businesses.
          </p>
          <p class="mt-4" style={{ fontSize: "18px" }}>
            The Italian DNA of the staff and consultants represent an added
            value in the world of Hospitality and Restaurants.
          </p>
          <p class="mt-4" style={{ fontSize: "18px" }}>
            We face this task with great solemnity and with technical and human
            adroitness. Like all recruitment agencies, we use web portals and
            social media to intercept the ideal candidates, but this may not be
            enough in the hospitality sector!
          </p>

          <p class="mt-4" style={{ fontSize: "18px", marginBottom: "200px" }}>
            For example, we can support a restaurant for a commercial relaunch
            on the market by making use of menu expert consultants in the staff
            we have for similar problems. We can also support an entrepreneur
            who wishes to open a business in London as a restaurant but does not
            know the area, or how to find the ideal staff/what types of trading
            approach must carry forward to be successful. Our business always
            starts from listening to the customer and analysing their needs to
            achieve their goals.
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#f8f5f0",
          paddingTop: "100px",
          paddingBottom: "50px",
        }}
      >
        <div class="container ">
          <p style={{ fontSize: "20px" }} class="my-3">
            OUR CLIENT
          </p>
          <h1 class="">CLIENT</h1>

          {/* <Slider {...settings}> */}
          <div class="row gy-3 gx-1">
            {imageLogo?.map((item) => (
              <div class="col-sm-12 col-md-4 col-lg-4 ">
                <div class="p-3">
                  {" "}
                  <img
                    src={item}
                    alt="the"
                    style={{
                      backgroundColor: "white",
                      paddingLeft: "20px",
                      marginRight: "20px",
                    }}
                    class="p-3"
                  />{" "}
                </div>
              </div>
            ))}
          </div>
          {/* </Slider> */}
        </div>
      </div>

      <div
        class="banner-header section-padding valign bg-img bg-fixed img-fluid"
        data-overlay-dark="3"
        data-background="https://i.ibb.co/J26y8YG/career2.jpg"
        style={{
          backgroundImage: `url(${video})`,
          minHeight: "800px",
          width: "100%",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div class="container">
          <div class="row">
            <div class="col-md-12  caption align-middle" style={{ marginTop: '200px' }}>
              <h5 style={{ color: 'white', fontSize: '18px' }}>TESTIMONIALS</h5>
              <h1 style={{ color: 'white' }}>What Client's Say?</h1>
              <h5 style={{ color: 'white', fontSize: '18px' }}> I recently had the pleasure of working with this company, and I have to say,
                I am thoroughly impressed. From start to till now, the experience was top-notch.
                The staff was friendly, knowledgeable, and attentive to our hotel needs.
                They went above and beyond to ensure that all the guest was satisfied with the
                services they received.</h5>
                <AiFillStar style={{color: '#aa8453', fontSize:'25px'}} />
                <AiFillStar style={{color: '#aa8453', fontSize:'25px'}} />
                <AiFillStar style={{color: '#aa8453', fontSize:'25px'}} />
                <AiFillStar style={{color: '#aa8453', fontSize:'25px'}} />
                <AiFillStar style={{color: '#aa8453', fontSize:'25px'}} />
                <p style={{ color: 'white', fontSize: '18px' }}>XENIA</p>
                <strong style={{ color: 'white', fontSize: '15px' }}>Client Review</strong>

            </div>
          </div>
        </div> */}
        <Testimonial2 />
      </div>
    </div>
  );
};

export default Customers;
