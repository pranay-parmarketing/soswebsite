import React from "react";
import soundOfSilence from "../images/sound-of-silence.png";

const ShortText = () => {
  return (
    <>
      <div className="container-fluid py-4 px-2 mb-4 background">
        <div className="container p-0">
          <div className="short-text-grid">
            <div data-aos="fade-right">
              <p>
                The Sounds of Silence (SOS) initiative uncovers and attempts to
                soothe the mental troubles associated with the silent burden of
                debt — the kind of pain that doesn't always scream but quietly
                eats away at the mind. Unlike visible struggles, financial
                stress often hides behind closed doors, showing up instead as
                sleepless nights, panic attacks, irritability, or even
                depression. <br />
                <br /> With nearly 69% of Indian households facing financial
                insecurity and 58% struggling to meet monthly expenses, debt
                isn't just a number — it silently rewires mental health. Unpaid
                EMIs, constant calls, and relentless pressure translate into
                anxiety, shame, and isolation. SOS initiative exists to break
                this silence, turning hidden suffering into open conversations,
                shared resilience, and collective healing with the support of
                mental health professionals.
              </p>
            </div>
            <div
              className="short-text-img rounded overflow-hidden"
              data-aos="fade-left"
            >
              <img src={soundOfSilence} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortText;
