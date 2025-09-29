import React from "react";
import bannerDesktop from "../images/banner-desktop.png";
import bannerMobile from "../images/banner-mobile.png";

const Banner = () => {
  return (
    <>
      <a href="#sos-form" className="banner-desktop d-md-block d-none">
        <img src={bannerDesktop} alt="" />
      </a>
      <a href="#sos-form" className="banner-mobile d-md-none">
        <img src={bannerMobile} alt="" />
      </a>
    </>
  );
};

export default Banner;
