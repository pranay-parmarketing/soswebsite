import React from "react";
import "../css/footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="container-fluid background p-0">
      <div className="container p-2 pt-5">
        <div className="footer-top-flex">
          <div className="footer-logo mx-auto">
            <img src={logo} alt="" />
          </div>
          <div className="d-lg-block d-none">
            <p>
              Join the #SoundsOfSilence initiative by SingleDebt. For too long,
              debt has stolen voices, sleep, and dignity—forcing millions of
              middle class Indians to suffer in silence. This initiative is not
              just awareness, it is care in action. A collective stand for hope,
              healing, and support — where financial struggles meet compassion
              for mental health. <br />
              <br />
              Together, we can shatter the stigma, give power back to silenced
              voices, and build a future where no one drowns alone in quiet
              despair.
            </p>
          </div>
          <div className="mx-auto">
            <div className="text-sm-end text-center">
              <p className="red-text">#SoundsOfSilence</p>
              <p className="red-text">#DebtFreeIndia</p>
              <p className="red-text">#BreakTheSilence</p>
            </div>
            <div className="footer-top-right mt-4">
              <div className="text-sm-end text-center">
                <button className="button">Visit forum</button>
              </div>
              <ul className="social-links">
                <li>
                  <a href="#">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-lg-none mt-4">
          <p>
            Join the #SoundsOfSilence initiative by SingleDebt. For too long,
            debt has stolen voices, sleep, and dignity—forcing millions of
            middle class Indians to suffer in silence. This initiative is not
            just awareness, it is care in action. A collective stand for hope,
            healing, and support — where financial struggles meet compassion for
            mental health. <br />
            <br />
            Together, we can shatter the stigma, give power back to silenced
            voices, and build a future where no one drowns alone in quiet
            despair.
          </p>
        </div>
        <div className="footer-divider"></div>
        <div className="mt-4">
          <p>
            Disclaimer: The statistics and information shared on this platform
            are derived from credible studies, mental health research, and
            financial reports. While every effort has been made to ensure
            accuracy, we encourage readers to verify details through updated,
            authoritative sources.
          </p>
        </div>
      </div>
      <div
        className="px-2 py-3 mt-4 text-center"
        style={{ background: "#000" }}
      >
        <p className="text-uppercase">
          &copy; COPYRIGHT 2025 ALL RIGHTS RESERVED | SINGLEDEBT | DEBT-FREE
          INDIA
        </p>
      </div>
    </footer>
  );
};

export default Footer;
