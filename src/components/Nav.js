import React, {Component} from "react";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Banner from "./Banner";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";


import { FaAlignJustify } from "react-icons/fa";
class Nav extends Component {
 
  constructor(){
    super();
    this.state ={
      value: true,
    }
    this.scrollToTop=this.scrollToTop.bind(this);
    this.scrollToServices=this.scrollToServices.bind(this);
    this.scrollToAbout=this.scrollToAbout.bind(this);
    this.scrollToContact=this.scrollToContact.bind(this);
   
  }
  scrollToTop=()=>{
    scroll.scrollToTop();

  }
  scrollToServices=()=>{scroller.scrollTo('services', {
    duration: 1000,
    
    smooth: true,
  })}
  scrollToAbout = () => {scroller.scrollTo('about', {
    duration: 1000,
    
    smooth: true,
  })

  }
  scrollToContact = () => {scroller.scrollTo('contact', {
    duration: 1000,
    
    smooth: true,
  })

  }
  

  render(){
  
  return (
    <div>
    <nav className="navbar" >
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo" onClick={this.scrollToTop}  style={{cursor:'pointer'}} >
              <img src="https://raw.githubusercontent.com/Himanshu-180875/Himanshu-website/main/public/images/logo1.png" alt="logo" />
            </div>
          </ul>
          {this.state.value ? (
            <ul className="navbar__right">
              <li onClick={this.scrollToTop} style={{cursor:'pointer'}}  duration={500} >
              
                <a>Home</a>
              
              </li>
              <li onClick={this.scrollToServices} style={{cursor:'pointer'}}>
              
                <a >Projects</a>
              </li>
              <li onClick={this.scrollToAbout} style={{cursor:'pointer'}}>
                <a >About</a>
              </li>
              <li onClick={this.scrollToContact} style={{cursor:'pointer'}}>
                <a>Contact</a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => this.setState({value : !this.state.value})}>
        <FaAlignJustify />
      </div>
    </nav>
    <Banner />
    <Services name="services" />
    <About name="about" />
    <Contact name="contact" />
    </div>
  );
          }
};

export default Nav;
