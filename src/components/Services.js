import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt
  
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "PROJECTS",
    subHeading: "My Projects",
   
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      icon1: <FaExternalLinkAlt className ="commonIcons" />,
      heading: "Creatures WebApp",
      Link:"https://creature-s.herokuapp.com/",
      Github:"https://github.com/Himanshu-180875/creatures",
      
      image:"https://raw.githubusercontent.com/Himanshu-180875/Himanshu-Website/master/public/images/3.png"
    },
    {
      id: 2,
      icon1: <FaExternalLinkAlt className ="commonIcons" />,
      icon: <FaGithub className="commonIcons" />,
      heading: "Crwn-Clothing",
      Link:"https://c-clothing.herokuapp.com/",
      Github:"https://github.com/Himanshu-180875/crwn-clothing",
     
        image:"https://raw.githubusercontent.com/Himanshu-180875/Himanshu-Website/master/public/images/4.png"
    },
    {
      id: 3,
      icon: <FaGithub className="commonIcons" />,
      icon1: <FaExternalLinkAlt className ="commonIcons" />,
      heading: "MusicWiki",
      Link:"https://himanshu-180875.github.io/musicwiki/",
      Github:"https://github.com/Himanshu-180875/musicwiki",
     
        image:"https://raw.githubusercontent.com/Himanshu-180875/Himanshu-Website/master/public/images/5.png"
    },
    {
      id: 4,
      icon: <FaGithub className="commonIcons" />,
      icon1: <FaExternalLinkAlt className ="commonIcons" />,
      heading: "Squad Performers",
        Link:"https://squadperformers3.000webhostapp.com/",
        Github:"https://github.com/Himanshu-180875/Squadperformers",
        image:"https://raw.githubusercontent.com/Himanshu-180875/Himanshu-Website/master/public/images/6.png"
    },
    {
      id: 5,
      icon: <FaGithub className="commonIcons" />,
      icon1: <FaExternalLinkAlt className ="commonIcons" />,
      heading: "Ordermania",
      Link:"https://ordermania.000webhostapp.com/",
      Github:"https://github.com/Himanshu-180875/Ordermania",
     
        image:"https://raw.githubusercontent.com/Himanshu-180875/Himanshu-Website/master/public/images/7.png"
    },
    {
      id: 6,
      icon: <FaGithub className="commonIcons" />,
      icon1: <FaExternalLinkAlt className ="commonIcons" />,
      heading: "Monsters Rolodex",
      Link:"https://himanshu-180875.github.io/monsters-rolodex/",
      Github:"https://github.com/Himanshu-180875/monsters-rolodex",
     
        image:"https://raw.githubusercontent.com/Himanshu-180875/Himanshu-Website/master/public/images/8.png"
    },
    {
      id: 7,
      icon: <FaGithub className="commonIcons" />,
      icon1: <FaExternalLinkAlt className ="commonIcons" />,
      heading: "Image Searcher",
      Link:"https://image--searcher.herokuapp.com/",
      Github:"https://github.com/Himanshu-180875/image-searcher",
     
        image:"https://raw.githubusercontent.com/Himanshu-180875/Himanshu-Website/master/public/images/2.png"
    },
    {
      id: 8,
      icon: <FaGithub className="commonIcons" />,
      icon1: <FaExternalLinkAlt className ="commonIcons" />,
      heading: "ClinicSpots",
      Link:"https://himanshu-180875.github.io/Clinicspots-website/",
      Github:"https://github.com/Himanshu-180875/Clinicspots-website",
     
        image:"https://raw.githubusercontent.com/Himanshu-180875/Himanshu-Website/master/public/images/1.png"
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
           
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              
              <div className="col-6 bgMain">
              
                <div className="services__box" >
                <img className="image" src={info.image} />
                <div className="middle">
                  <a href={info.Github}>{info.icon}</a>
                  <div className="services__box-header">{info.heading}</div>
                  <a href = {info.Link}>{info.icon1}</a>
                  <div className="services__box-p">{info.text}</div>
                </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
