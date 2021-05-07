import React, {Component} from "react";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import Services from "./Services";
import About from "./About";
// import { Link } from 'react-router-dom';

import { FaAlignJustify } from "react-icons/fa";
class Nav extends Component {
 
  constructor(){
    super();
    this.state ={
      value: true,
    }
  }

  render(){
  
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src="https://raw.githubusercontent.com/Himanshu-180875/Himanshu-website/main/public/images/logo1.png" alt="logo" />
            </div>
          </ul>
          {this.state.value ? (
            <ul className="navbar__right">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
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
  );
          }
};

export default Nav;
