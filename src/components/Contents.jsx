import React, { useContext } from "react";
import "../css/contents.css";
import { AppContext } from "../context/AppContext";
import sample from "../images/sample.webp";
import keyChar from "../data/keyChar";
import debtStress from "../data/debtStress";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import mannTalksIntro from "../video/mann-talks-intro.mp4";

const Contents = () => {
  const { contentsRef } = useContext(AppContext);

  return (
    <div className="contents hide" ref={contentsRef}>
      <div className="container p-2 pt-4">
        <div className="text-center">
          <h1 className="mb-2">
            Sounds of Silence (SOS) — An Initiative by SingleDebt
          </h1>
          <p>
            Sounds of Silence is an initiative by SingleDebt to turn unspoken
            debt burdens into conversations of hope and healing
          </p>
          <p className="fw-bold">It's time to be heard</p>
        </div>
      </div>
      <div className="container-fluid py-4 px-2 my-4 background">
        <div className="container p-0">
          <div className="short-text-grid">
            <div>
              <p>
                The Sounds of Silence (SOS) initiative uncovers and attempts to
                soothe the mental troubles associated with the silent burden of
                debt — the kind of pain that doesn't always scream but quietly
                eats away at the mind. Unlike visible struggles, financial
                stress often hides behind closed doors, showing up instead as
                sleepless nights, panic attacks, irritability, or even
                depression. With nearly 69% of Indian households facing
                financial insecurity and 58% struggling to meet monthly
                expenses, debt isn't just a number — it silently rewires mental
                health. Unpaid EMIs, constant calls, and relentless pressure
                translate into anxiety, shame, and isolation. SOS exists to
                break this silence, turning hidden suffering into open
                conversations, shared resilience, and collective healing with
                the support of mental health professionals.
              </p>
            </div>
            <div className="short-text-img rounded overflow-hidden">
              <img src={sample} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4 px-2">
        <h2 className="text-center mb-4">What Debt Stress Manifests Like</h2>
        <div className="key-char-grid">
          {keyChar.map((item, index) => {
            return (
              <div className="key-char-card" key={index}>
                <img src={item.img} alt="" className="icon" />
                <div>
                  <p className="fw-bold">{item.title}</p>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container py-4 px-2">
        <h2 className="text-center mb-4">
          Debt Stress Leading to Mental Health Struggles
        </h2>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={8}
            slidesPerView={3}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              1000: { slidesPerView: 3 },
            }}
          >
            {debtStress.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="debt-stress-card">
                  <p className="fw-bold">{item.title}</p>
                  <p>{item.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="container-fluid py-4 px-2 my-4">
        <div className="container p-0">
          <div className="initiative-grid">
            <div>
              <h2 className="mb-2">What the Initiative Aims to Achieve</h2>
              <p className="mb-2">
                The Sounds of Silence (SOS) initiative, in association with Mann
                Talks (Mental Health NGO), aims to break the silence around
                debt-driven stress and mental health struggles. This initiative
                focuses on providing safe spaces, practical tools, empathetic
                listening and support by mental health professionals to help
                individuals cope with the emotional and psychological weight of
                financial burdens.
              </p>
            </div>
            <div className="movement-img rounded overflow-hidden">
              <img src={sample} alt="" />
            </div>
            <div>
              <h2 className="mb-2">Through this initiative, we aim to:</h2>
              <ul className="mb-2">
                <li>
                  Provide free financial-mental health counselling to
                  individuals silently struggling with debt.
                </li>
                <li>
                  Share a dedicated helpline for free and confidential mental
                  health support by professionals, where people can openly talk
                  about their debt-related stress without fear or judgment.
                </li>
                <li>
                  Offer access to a “Mindfulness Mann Se” a free mindfulness and
                  meditation audio series designed to reduce stress, anxiety,
                  and improve overall well-being.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2">
                By joining the Sounds of Silence (SOS) movement, individuals
                can:
              </h2>
              <ul>
                <li>
                  Find relief from isolation by realizing they're not alone in
                  their struggles.
                </li>
                <li>
                  Gain emotional strength to face creditors, EMIs, and financial
                  uncertainty with dignity.
                </li>
                <li>
                  Build mental resilience and learn coping strategies to manage
                  anxiety, shame, and stress.
                </li>
                <li>
                  Reclaim their voice and peace of mind in the journey toward
                  financial and emotional freedom.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-4 px-2 my-4 background">
        <div className="container p-0">
          <div className="mann-talk-flex">
            <div>
              <h2 className="mb-2">About Mann Talks</h2>
              <p>
                Mann Talks is a mental health NGO dedicated to empowering
                individuals to prioritize their psychological well-being. With a
                mission to normalize conversations around mental health, Mann
                Talks offers counselling, resources, and awareness programs that
                make emotional support accessible to all. Their collaboration in
                the Sounds of Silence initiative ensures that debt-driven mental
                health struggles receive the empathy, care, and professional
                guidance they deserve.
              </p>
            </div>
            <div>
              <div className="mann-talk-intro rounded overflow-hidden">
                <video controls playsInline>
                  <source src={mannTalksIntro} type="video/mp4" />
                </video>
              </div>
              <div className="text-center">
                <a
                  href="https://www.youtube.com/watch?v=CrDEtB0KFPM&list=PLMMPLX-QoD5vpgbZSuvQQbnpG36th3C_k"
                  target="_blank"
                  className="button d-inline-block text-decoration-none mt-2"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4 p-2">
        <div className="text-center">
          <h2>Take the First Step - Reach Out Today</h2>
          <p>
            You don't have to carry this silent burden of debt alone. Whether
            it's missed EMIs or sleepless nights, help is here. Get free
            financial & mental health counselling.
          </p>
        </div>
        <div className="form-container">
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Farid Ansari"
            />
            <label htmlFor="fullName">Full Name</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              placeholder="XXXXX XXXXX"
            />
            <label htmlFor="phoneNumber">Phone Number</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="email"
              className="form-control"
              id="emailAddress"
              placeholder="farid@ansari.com"
            />
            <label htmlFor="emailAddress">Email address</label>
          </div>
          <div className="form-floating mb-4">
            <select
              className="form-select"
              id="missedEMI"
              aria-label="Floating label select example"
            >
              <option selected></option>
              <option value="1">1-2 lakhs</option>
              <option value="2">2-5 Lakh</option>
              <option value="3">5-10 Lakh</option>
              <option value="3">More than 10 lakhs</option>
            </select>
            <label htmlFor="missedEMI">Debt Level : Missed EMI</label>
          </div>
          <div className="mb-4">
            <label className="text-white">
              Are you in need of mental health support?
            </label>
            <div className="input-flex">
              <input type="radio" name="support" id="support-yes" />
              <label className="text-white" htmlFor="support-yes">
                Yes, I'd like to speak with a counsellor
              </label>
            </div>
            <div className="input-flex">
              <input type="radio" name="support" id="support-no" />
              <label className="text-white" htmlFor="support-no">
                No, financial counselling only
              </label>
            </div>
            <div className="input-flex">
              <input type="radio" name="support" id="support-maybe" />
              <label className="text-white" htmlFor="support-maybe">
                Not sure yet
              </label>
            </div>
          </div>
          <div className="mb-4">
            <div className="input-flex">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                className="mt-1"
              />
              <label className="text-white" htmlFor="consent">
                I agree to be contacted by SingleDebt and its partner, Mann
                Talks, for counselling and support.
              </label>
            </div>
          </div>
          <div className="text-center">
            <button className="button">Break the silence</button>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-center mb-4">
            FAQs - Sounds of Silence (SOS) Initiative
          </h2>

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
                  What is the Sounds of Silence (SOS) campaign about?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    The Sounds of Silence (SOS) campaign is an initiative by
                    SingleDebt, in association with Mann Talks - a leading
                    mental health support NGO. The campaign is dedicated to
                    breaking the silence around debt-related stress and its
                    profound impact on mental health. Through this initiative,
                    we aim to create a safe space where individuals can share,
                    heal, and access both financial guidance and psychological
                    support without stigma.
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
                    Mann Talks is a respected mental health support NGO known
                    for its compassionate approach and strong professional
                    network of trained psychologists, counsellors, and wellness
                    experts. With years of experience in addressing emotional
                    well-being, they bring their expertise to the SOS campaign
                    by offering free counselling sessions, audio resources, and
                    empathetic guidance. Their legacy lies in helping
                    individuals break the stigma around mental health and
                    ensuring no one has to fight silent battles alone.
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
                    Anyone experiencing stress, anxiety, or mental strain due to
                    debt, EMIs, or financial pressure can reach out. Whether
                    you're a student, professional, entrepreneur, or homemaker —
                    you are not alone.
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
                      Free financial-mental counselling through our association
                      with Mann Talks.
                    </li>
                    <li>
                      Dedicated calling line for confidential conversations
                      about debt-related stress.
                    </li>
                    <li>
                      "Mann Ki Therapy" audio courses to build resilience and
                      reduce anxiety.
                    </li>
                    <li>
                      Trained staff who listen with empathy and guide you
                      towards practical relief.
                    </li>
                    <li>
                      Additional financial counselling, plus for our enrolled
                      clients:
                      <ul>
                        <li>
                          Legal and paralegal support to handle creditor
                          harassment.
                        </li>
                        <li>
                          1:1 face-to-face or video call therapy session (first
                          session free).
                        </li>
                      </ul>
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
                    this campaign are kept strictly confidential. Your trust and
                    privacy are our top priority.
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
  );
};

export default Contents;
