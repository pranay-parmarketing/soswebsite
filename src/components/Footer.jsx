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
          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>
          <div>
            <div className="mb-5">
              <p>It's time to be heard.</p>
              <p>Let's Talk.</p>
            </div>
            <p className="red-text">#SoundsOfSilence</p>
            <p className="red-text">#DebtFreeIndia</p>
            <p className="red-text">#BreakTheSilence</p>
          </div>
        </div>
        <div className="footer-bottom-flex mt-5">
          <div>
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
          <div className="footer-top-right">
            <div className="text-end">
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
        <div className="mt-5">
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
        className="px-2 py-3 mt-5 text-center"
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
