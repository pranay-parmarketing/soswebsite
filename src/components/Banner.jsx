import React from "react";
import bannerDesktop from "../images/banner-desktop.png";
import bannerMobile from "../images/banner-mobile.png";

const Banner = () => {
  return (
    <>
      <div className="banner-desktop d-md-block d-none">
        <img src={bannerDesktop} alt="" />
      </div>
      <div className="banner-mobile d-md-none">
        <img src={bannerMobile} alt="" />
      </div>
    </>
  );
};

export default Banner;
