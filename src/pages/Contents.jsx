import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../css/contents.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
//
import Banner from "../components/Banner";
import ShortText from "../components/ShortText";
import WeightOfDebt from "../components/WeightOfDebt";
import DebtStress from "../components/DebtStress";
import Initiative from "../components/Initiative";
import MannTalks from "../components/MannTalks";
import Form from "../components/Form";
import Mindful from "../components/Mindful";
import Blogs from "../components/Blogs";
import Media from "../components/Media";
import FAQ from "../components/FAQ";

const Contents = () => {
  const { contentsRef } = useContext(AppContext);

  return (
    <div className="contents hide overflow-x-hidden" ref={contentsRef}>
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
