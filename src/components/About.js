import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Himanshu Pahuja" },
    { id: 2, title: "Email:", text: "Himansh10b@gmail.com" },
    { id: 3, title: "Phone:", text: "+91-9050075569" },
    { id: 4, title: "Github:", text: "Himanshu-180875" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="https://raw.githubusercontent.com/Himanshu-180875/Himanshu-Website/master/public/images/man-05.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
              This is Himanshu Pahuja, Junior Year CSE Student at Central University of Haryana.
              I am proficient in Full Stack development, API's, MERN Stack, Frontend Development. 
              </div>
              <div className="about__info-p2">
              I am a Full Stack Developer with a vast array of knowledge in many different
              front end and back end languages, responsive frameworks, databases, 
              and best code practices. My objective is simply to be the best Full Stack 
              developer that I can be and to contribute to the technology industry 
              all that I know and can do.
              
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                     
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
