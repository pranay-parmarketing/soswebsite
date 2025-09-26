import React from "react";
import bannerDesktop from "../images/banner-desktop.png";
import bannerMobile from "../images/banner-mobile.png";

const Banner = () => {
  return (
    <>
      <div className="banner-desktop d-md-block d-none" data-aos="fade-down">
        <img src={bannerDesktop} alt="" />
      </div>
      <div className="banner-mobile d-md-none" data-aos="fade-down">
        <img src={bannerMobile} alt="" />
      </div>
    </>
  );
};

export default Banner;
