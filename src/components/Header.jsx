import React, { useState } from 'react';
import "../styles/Header.css";
import "../styles/Hero.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openMobileNav = () => {
    setIsNavOpen(true);
  };

  const closeMobileNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="site-main-wrapper">
      {/* Hamburger Icon Button */}
      <button className="hamburger" onClick={openMobileNav}>
        <RxHamburgerMenu />
      </button>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isNavOpen ? 'open' : ''}`}>
        <button className="times" onClick={closeMobileNav}>
          <MdOutlineClose />
        </button>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Resume">Resume</a></li>
          <li><a href="#Projects">Projects</a></li>
        </ul>
      </div>

      {/* Main Header & Navigation */}
      <header>
        <div className="container">
          <h1 className='header-mobile-logo'>MUSTAFA</h1>
          <nav id='main-nav' className='flex items-center justify-between'>
            <div className="left flex items-center">
              <div className="branding">Mustafa</div>
              <div>
                <a href="#">Home</a>
                <a href="#About">About</a>
                <a href="#Skills">Skills</a>
                <a href="#Resume">Resume</a>
                <a href="#Projects">Projects</a>
              </div>
            </div>
            <div className="right">
              <a href="#Contact"><button className='btn btn-primary'>Contact</button></a>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="hero flex items-center justify-between">
            <div className="left flex-1/2 flex justify-center">
              <img src="./myImage.jpg.jpg" alt="Profile" />
            </div>
            <div className="right flex-1/2">
              <h6>Mustafa Shaikh</h6>
              <h1>I'm Web  <span>Developer</span></h1>
              <p>Your trusty Full Stack Companion! Whether it's crafting seamless user experiences or fine-tuning server-side magic, I'm here to guide you through the tech jungle. Let's embark on this journey together!</p>
              <div>
                <a href="./MustafaShaikh_Resume.pdf "
                download="./MustafaShaikh_Resume.pdf ">
                <button className='btn btn-secondary'>DOWNLOAD CV</button></a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
