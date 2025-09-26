import React from "react";
import mannTalksLogo from "../images/mann-talks-logo.png";

const MannTalks = () => {
  return (
    <>
      <div className="container-fluid py-4 px-2 my-4 background">
        <div className="container p-0">
          <div className="mann-talk-flex">
            <div>
              <h2 className="mb-2">About Mann Talks X SOS</h2>
              <p>
                Established in 2020 by Vidhi Shanghvi, Mann Talks is a
                non-profit mental health initiative driven by the principle of
                Leave No One Behind. Dedicated to making quality psychological
                support accessible across India, through free helplines, email
                counselling, and affordable long-term therapy. Mann Talks
                combines prevention, promotion, and care to build a more
                resilient mental health ecosystem. Their collaboration with the
                Sounds of Silence Initiative by SingleDebt ensures that
                debt-driven mental health struggles are met with empathy,
                professional support, and pathways to healing.
              </p>
            </div>
            <div>
              <div className="mann-talk-logo rounded overflow-hidden">
                <img src={mannTalksLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MannTalks;
