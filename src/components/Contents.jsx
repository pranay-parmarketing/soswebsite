import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import "../css/contents.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
//
import "aos/dist/aos.css";
//
import Aos from "aos";
import Banner from "./Banner";
import ShortText from "./ShortText";
import WeightOfDebt from "./WeightOfDebt";
import DebtStress from "./DebtStress";
import Initiative from "./Initiative";
import MannTalks from "./MannTalks";
import Form from "./Form";
import Mindful from "./Mindful";
import Blogs from "./Blogs";
import Media from "./Media";
import FAQ from "./FAQ";

const Contents = () => {
  const { contentsRef } = useContext(AppContext);
  //
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <div className="contents overflow-x-hidden" ref={contentsRef}>
      <Banner />
      <ShortText />
      <WeightOfDebt />
      <DebtStress />
      <Initiative />
      <MannTalks />
      <Form />
      <Mindful />
      <Blogs />
      <Media />
      <FAQ />
    </div>
  );
};

export default Contents;
