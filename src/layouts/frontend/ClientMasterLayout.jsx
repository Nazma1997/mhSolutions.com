import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";
import Navbar2 from "./test/Navbar2";
import Cookies from "../../components/frontend/cookies/Cookies";

function ClientMasterLayout({setLanguage, language}) {

  // console.log('lgg', language)
  return (
    <div>
      <Navbar  setLanguage={setLanguage} language={language}/>
      {/* <Navbar2 /> */}
      <Outlet />
      <Footer language={language}/>

      <Cookies />
    </div>
  );
}

export default ClientMasterLayout;
