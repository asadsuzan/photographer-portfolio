import React from "react";
import { BsFillTelephoneForwardFill, BsFacebook } from "react-icons/bs";
import {
  AiFillMail,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";

const Footer = () => {
  return (
    <footer
      className="footer container mt-5 bg-light shadow-sm"
      style={{ minHeight: "300px" }}
    >
      <div className="row gy-3 align-items-center classnam">
        <div className="col-lg-5 col-md-4 col-sm-5 col-12">
          <div>
            <span className="fs-3 d-block mb-2">LEGEND</span>
          </div>
          <div>
            <p>
              Photography inila miss uman saten eliten finus vivera alacus miss
              the drudean seneice miss notumane tonec a fermen.
            </p>
          </div>
        </div>

        <div className="col-lg-5 col-md-4 col-sm-5 col-12">
          <div>
            <span className="fs-4 d-block mb-2 text-uppercase">contact</span>
          </div>
          <div>
            <BsFillTelephoneForwardFill className="text-info me-2" />
            <span>+1 123-456-0606</span>
          </div>
          <div>
            <AiFillMail className="text-info me-2" />
            <span>xyz@gamil.com</span>
          </div>
          <div>
            <ImLocation2 className="text-info me-2" />
            <span>120 King St, Charleston SC 29401, USA</span>
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-12  ">
          <div>
            <span className="fs-4 d-block mb-2 text-uppercase">
              Quick Links
            </span>
          </div>
          <div className="list-unstyled">
            <li>
              <a href="#about" className="text-info">
                About
              </a>
            </li>
            <li>
              <a href="#Services" className="text-info">
                Services
              </a>
            </li>
            <li>
              <a href="#work" className="text-info">
                Work
              </a>
            </li>
            <li>
              <a href="#blog" className="text-info">
                Blog
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-5">
        <div>
          <p>Copyright © 2022 by LEGEND STUDIO. All rights reserved.</p>
        </div>
        <div
          className="d-flex  align-items-center fs-3"
          style={{ gap: "10px" }}
        >
          <BsFacebook />
          <AiFillTwitterCircle />
          <AiFillLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
