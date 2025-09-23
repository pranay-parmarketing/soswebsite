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
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import mannTalksLogo from "../images/mann-talks-logo.png";
import logo from "../images/logo.png";
import mindfull from "../video/mindfull.mp4";
import faqBanner from "../images/faq-banner.webp";
import media from "../data/media";

const Contents = () => {
  const { contentsRef } = useContext(AppContext);

  return (
    <div className="contents hide" ref={contentsRef}>
      <div className="container p-2 pt-5">
        <div className="text-center">
          {/* <h1 className="mb-2">
            Sounds of Silence (SOS) — An Initiative by SingleDebt
          </h1> */}
        </div>
        <div className="logo-div">
          <img src={logo} alt="" />
        </div>
        <div className="text-center">
          <p>
            Sounds of Silence is an initiative by SingleDebt to turn unspoken
            debt burdens into conversations of hope and healing.
          </p>
        </div>
      </div>
      <div className="container-fluid py-5 px-2 my-5 background">
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
            <div className="short-text-img rounded overflow-hidden">
              <img src={sample} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5 my-5 px-2">
        <h2 className="text-center mb-4">
          The Weight of Debt: How It Shows Up in Life
        </h2>
        <div className="key-char-grid">
          {keyChar.map((item, index) => {
            return (
              <div className="key-char-card" key={index}>
                <img src={item.img} alt="" className="icon" />
                <div>
                  <p className="red-text">{item.title}</p>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container py-5 mb-5 px-2">
        <h2 className="text-center mb-4">
          Debt Stress Leading to Mental Health Struggles
        </h2>
        <div>
          <Swiper
            style={{ height: "200px" }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={8}
            slidesPerView={3}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              1000: { slidesPerView: 3 },
            }}
          >
            {debtStress.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="debt-stress-card">
                  <p className="red-text">{item.title}</p>
                  <p>{item.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <div className="container px-2 py-5 my-5">
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
              <img src={sample} alt="" />
            </div>
            <div>
              <h2 className="mb-2">Through this initiative, we aim to:</h2>
              <ul className="mb-2">
                <li>
                  Free Counselling For All - Provide free financial and mental
                  health counselling to individuals silently struggling with
                  debt.
                </li>
                <li>
                  Free & Confidential Helpline - Speak openly with mental health
                  professionals and receive on-call help 24x7 without fear or
                  judgment.
                </li>
                <li>
                  Learning Mindfulness - Access self-help tool like Mindfulness
                  Mann Se, a free mindfulness and meditation audio series to
                  keep your calm and mind free from stress.
                </li>
                <li>
                  Free 1:1 therapy sessions - Video call sessions with
                  therapists (first session free for enrolled clients during the
                  initiative duration) to share your troubles and devise your
                  path to peace with trained psychologists (master's degree in
                  Clinical (non-RCI) or Counselling Psychology from premier
                  educational institutions)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 px-2 my-5 background">
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
      <div className="container py-5 p-2">
        <div className="text-center">
          <h2>Take the First Step - Reach Out Today</h2>
          <p>
            You don't have to carry this silent burden of debt alone. Whether
            it's missed EMIs or sleepless nights, help is here. Get free
            financial & mental health counselling.
          </p>
        </div>
        <div className="form-container my-5 mx-auto">
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
                I hereby consent to be contacted by SingleDebt and its
                counselling partner, Mann Talks, for the purpose of providing
                counselling and support services, and I confirm that I have read
                and accept the{" "}
                <a href="#" className="text-decoration-none red-text">
                  Terms and Conditions.
                </a>
              </label>
            </div>
          </div>
          <div className="text-center">
            <button className="button">Break the silence</button>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 px-2 my-5 background">
        <div className="container p-0">
          <div className="mindfull-grid">
            <div>
              <h2 className="mb-2">Mindfulness Audio Series</h2>
              <p>
                Mindfulness Mann Se is a self-help program built by Mann Talks,
                in collaboration with global experts and is rooted in scientific
                research, providing free access to comprehensive tools to
                enhance your well-being. This audio series offers interactive
                learning, guided practice, and insights that will deepen your
                understanding and application of mindfulness in real-life
                situations. Mindfulness practice has been proven to help have
                better self-regulation, improve our physical and psychological
                health, boost memory and focus, reduce stress, anxiety,
                reactivity, and restlessness and enhance our mood and general
                sense of peace, greater life satisfaction and overall
                well-being.
              </p>
            </div>
            <div>
              <div className="mindfull-video text-center">
                <video playsInline controls className="rounded overflow-hidden">
                  <source src={mindfull} type="video/mp4" />
                </video>
              </div>
              <div className="text-center">
                <a
                  href="https://www.youtube.com/watch?v=CrDEtB0KFPM&list=PLMMPLX-QoD5vpgbZSuvQQbnpG36th3C_k"
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
      <div className="container-fluid py-5 px-2 my-5 background">
        <h2 className="text-center mb-4">Media feature</h2>
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={20}
          slidesPerView={8}
          loop={true}
          freeMode={true}
          allowTouchMove={false} // disable dragging if you only want auto scroll
          speed={3000} // 👈 control smoothness (higher = slower scroll)
          autoplay={{
            delay: 0, // 👈 no delay between transitions
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 3, spaceBetween: 50 },
            576: { slidesPerView: 6, spaceBetween: 50 },
            1000: { slidesPerView: 8, spaceBetween: 50 },
          }}
        >
          {media.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="media-card">
                <img src={item} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container px-2 py-5 my-5">
        <h2 className="text-center mb-4">
          FAQs - Sounds of Silence (SOS) Initiative
        </h2>
        <div className="faq-grid">
          <div className="rounded overflow-hidden">
            <img src={faqBanner} alt="" />
          </div>
          <div>
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
                  className="accordion-collapse collapse"
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
    </div>
  );
};

export default Contents;
