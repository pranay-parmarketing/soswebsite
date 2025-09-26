import React from "react";
import logo from "../images/logo.png";

const Initiative = () => {
  return (
    <>
      <div className="container px-2 py-4 my-4">
        <div className="text-center">
          <h2 className="mb-2">What the Initiative Aims to Achieve</h2>
          <p>
            The Sounds of Silence (SOS) initiative, in association with Mann
            Talks (Mental Health NGO), aims to break the silence around
            debt-driven stress and mental health struggles. This initiative
            focuses on providing safe spaces, practical tools, empathetic
            listening and support by mental health professionals to help
            individuals cope with the emotional and psychological weight of
            financial burdens.
          </p>
        </div>
        <div className="initiative-grid mt-5">
          <div className="movement-img rounded overflow-hidden">
            <img src={logo} alt="" />
          </div>
          <div>
            <h2 className="mb-2">Through this initiative, we aim to:</h2>
            <ul className="mb-2">
              <li>
                Free Counselling For All - Provide free financial and mental
                health counselling to individuals silently struggling with debt.
              </li>
              <li>
                Free & Confidential Helpline - Speak openly with mental health
                professionals and receive on-call help 24x7 without fear or
                judgment.
              </li>
              <li>
                Learning Mindfulness - Access self-help tool like Mindfulness
                Mann Se, a free mindfulness and meditation audio series to keep
                your calm and mind free from stress.
              </li>
              <li>
                Free 1:1 therapy sessions - Video call sessions with therapists
                (first session free for enrolled clients during the initiative
                duration) to share your troubles and devise your path to peace
                with trained psychologists (master's degree in Clinical
                (non-RCI) or Counselling Psychology from premier educational
                institutions)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Initiative;
