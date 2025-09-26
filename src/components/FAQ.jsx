import React from "react";
import faqBanner from "../images/faq-banner.png";

const FAQ = () => {
  return (
    <>
      <div className="container px-2 py-4 my-4">
        <h2 className="text-center mb-4">
          FAQs - Sounds of Silence (SOS) Initiative
        </h2>
        <div className="faq-grid">
          <div className="rounded overflow-hidden" data-aos="fade-up">
            <img src={faqBanner} alt="" />
          </div>
          <div data-aos="zoom-in">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is the Sounds of Silence (SOS) initiative about?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      The Sounds of Silence (SOS) initiative by SingleDebt, in
                      association with Mann Talks - a leading mental health
                      support NGO is dedicated to breaking the silence around
                      debt-related stress and its profound impact on mental
                      health. Through this initiative, we aim to create a safe
                      space where individuals can share, heal, and access both
                      financial guidance and psychological support without
                      stigma. Open to hear, open to talk.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Who are Mann Talks, and how do they support this initiative?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Mann Talks is a respected mental health support NGO
                      established by Vidhi Shanghvi, driven by the principle of
                      Leave No One Behind. Dedicated to making quality
                      psychological support accessible across India, through
                      free helplines, email counselling, and affordable
                      long-term therapy. Their collaboration with the Sounds of
                      Silence Initiative by SingleDebt ensures that debt-driven
                      mental health struggles are met with empathy, professional
                      support, and pathways to healing. Their legacy lies in
                      helping individuals break the stigma around mental health
                      and ensuring no one has to fight silent battles alone.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Who can seek help through this initiative?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Anyone experiencing stress, anxiety, or mental strain due
                      to debt, EMIs, or financial pressure can reach out.
                      Whether you're a student, professional, entrepreneur, or
                      homemaker — you are not alone.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What kind of support will I receive?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>You will have access to:</p>
                    <ul>
                      <li>
                        Free financial-mental counselling by SingleDebt and Mann
                        Talks professionals
                      </li>
                      <li>
                        Dedicated help line for confidential conversations about
                        debt-related stress with certified mental health
                        professionals.
                      </li>
                      <li>
                        Mindfulness Mann Se Mann free audio series self-help
                        tool to build resilience and reduce anxiety.
                      </li>
                      <li>
                        'Empathy based conversations' trained SingleDebt staff
                        who listen with empathy and guide you towards practical
                        relief.
                      </li>
                      <li>
                        Additional 1:1 (1 hour long) video call therapy session
                        with professional therapists (first session free) for
                        SingleDebt enrolled clients.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Is my information kept confidential?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Yes. All conversations and personal details shared through
                      this campaign are kept strictly confidential. Your trust
                      and privacy are our top priority.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    How do I get started?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Simply fill out the form above or call our dedicated
                      helpline number. Once you reach out, our team will connect
                      you with a trained counsellor who will guide you step by
                      step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
