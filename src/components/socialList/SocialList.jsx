import React from "react";
import { Link } from "react-router-dom";
import { socials } from "../../data/data";
import "./SocailList.scss";

const SocialList = () => {
  return (
    <ul className="social-list">
      {socials.map((social, index) => {
        return (
          <li className="social-list__item" key={index}>
            <Link
              to={social.path}
              className={`social-list__link ${social.text}`}
            >{social.icon}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialList;
