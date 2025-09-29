import React from "react";
import mindful from "../video/mindful.mp4";

const Mindful = () => {
  return (
    <>
      <div className="container-fluid py-4 px-2 my-4 background">
        <div className="container p-0">
          <div className="mindful-grid">
            <div>
              <h2 className="mb-2">Mindfulness Audio Series</h2>
              <p>
                Mindfulness Mann Se is a self-help program built by Mann Talks,
                in collaboration with global experts and is rooted in scientific
                research, providing free access to comprehensive tools to
                enhance your well-being. This audio series offers interactive
                learning, guided practice, and insights that will deepen your
                understanding and application of mindfulness in real-life
                situations. <br />
                <br /> Mindfulness practice has been proven to help have better
                self-regulation, improve our physical and psychological health,
                boost memory and focus, reduce stress, anxiety, reactivity, and
                restlessness and enhance our mood and general sense of peace,
                greater life satisfaction and overall well-being.
              </p>
            </div>
            <div>
              <div className="mindful-video text-center">
                <video playsInline controls className="rounded overflow-hidden">
                  <source src={mindful} type="video/mp4" />
                </video>
              </div>
              <div className="text-center">
                <a
                  href="https://www.manntalks.org/mindfulness/basics-introduction/how-to-use-these-resources/"
                  target="_blank"
                  className="button d-inline-block text-decoration-none mt-2"
                >
                  Click Here To Start Listening
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mindful;
