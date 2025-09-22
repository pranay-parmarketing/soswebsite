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
    <footer className="container-fluid background px-2 py-4">
      <div className="container p-0">
        <div className="footer-top-flex">
          <div>
            <div className="footer-logo">
              <img src={logo} alt="" />
            </div>
            <p className="mt-2">
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
            <div>
              <div className="mb-4">
                <p>It's time to be heard.</p>
                <p>Let's Talk.</p>
              </div>
              <h2>#SoundsOfSilence</h2>
              <h2>#DebtFreeIndia</h2>
              <h2>#BreakTheSilence</h2>
            </div>

            <div>
              <button className="button">Visit forum</button>
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
    </footer>
  );
};

export default Footer;
