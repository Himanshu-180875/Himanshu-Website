import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaInstagram,

} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "I'm Himanshu Pahuja",
    text:
      "Observant and Innovative Full Stack Developer & Problem-Solver, Eager to learn new skills and help the \
      organization in development and deployment of websites ​",
    image: "https://raw.githubusercontent.com/Himanshu-180875/Himanshu-website/main/public/images/man-05.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                <a href="https://www.facebook.com/himansh.pahuja.7/"><li>
                    <FaFacebookF className="headerIcon" />
                  </li></a>
                  <a href="https://twitter.com/himansh10b"><li>
                   <FaTwitter className="headerIcon" />
                  </li></a>
                  <a href="https://github.com/Himanshu-180875"><li>
                   <FaGithub className="headerIcon" />
                  </li></a>
                  <a href="https://www.instagram.com/himanshu_pahuja_/"><li>
                    <FaInstagram className="headerIcon" />
                  </li></a>
                </ul>
                <h1 className="banner-heading">{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="https://drive.google.com/file/d/1W2pZcpQAMWEHu-lA7GKUDmKFAWFfO3fA/view" className="btn btn-outline">
                    Download Resume
                  </a>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
