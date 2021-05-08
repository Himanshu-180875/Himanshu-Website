import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  
} from "react-icons/fa";
function openWhatsapp(){
  return(
  'https://api.whatsapp.com/send?phone=+91-9050075569'
  )
}
const Contact = () => {
  
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src="https://raw.githubusercontent.com/Himanshu-180875/Himanshu-website/main/public/images/logo1.png" alt="" />
              </div>
              <p>
                Please feel free to reach out to me directly.
                I look forward to getting to know all of you!
              </p>
              <a  href="https://api.whatsapp.com/send?phone=+91-9050075569">9050075569</a>
              <h1 className="follow">Follow Me On</h1>
              <ul className="contactCircles">
                <a href="https://www.facebook.com/himansh.pahuja.7/"><li>
                  <FaFacebookF className="contactIcon" />
                </li></a>
                <a href="https://twitter.com/himansh10b"><li>
                  <FaTwitter className="contactIcon" />
                </li></a>
                <a href="https://www.linkedin.com/in/himanshu-pahuja-980542186/"><li>
                  <FaLinkedin className="contactIcon" />
                </li></a>
                <a href="https://www.instagram.com/himanshu_pahuja_/"><li>
                  <FaInstagram className="contactIcon" />
                </li></a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
