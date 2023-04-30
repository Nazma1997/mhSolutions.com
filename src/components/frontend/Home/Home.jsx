import React from "react";

import Banner from "./Banner";
import Services from "./Services";
import Position from "./Position";
import FindJobs from "./FindJobs";
import DownloadApp from "./DownloadApp";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Cookies from "../cookies/Cookies";
// import Cookies from "../cookies/Cookies";

function Home({language}) {

  // console.log('homeL', language)
  return (
    <div>
      <Cookies />
      <Banner language={language}/>
      <Services language={language}/>
      <Position language={language}/>
      <FindJobs language={language}/>
      <DownloadApp language={language}/>
      <Testimonial language={language}/>
      <Contact language={language}/>
      {/* <Cookies /> */}
    </div>
  );
}

export default Home;
