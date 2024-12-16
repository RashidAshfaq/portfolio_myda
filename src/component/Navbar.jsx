import React from 'react';
import  { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);
      // Ref for the hamburger menu
      const menuRef = useRef(null);
    
      // Function to handle the click event on the hamburger menu
      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
      // Function to handle clicks outside the menu
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false); // Close menu if clicked outside
        }
      };
    
      useEffect(() => {
        if (isOpen) {
          // Add event listener when the menu is open
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          // Remove event listener when the menu is closed
          document.removeEventListener("mousedown", handleClickOutside);
        }
    
        // Cleanup function to remove the event listener
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [isOpen]);
  return (
    <header className="portfolio-header">
    <h1 className="name"  onClick={() => window.location.reload()}>
      <span className="name_span"  onClick={() => window.location.reload()}>Myda</span>Gilani
    </h1>
    <div className="nav-container" ref={menuRef}>
   {/* Hamburger Icon for Mobile */}
   <div className="hamburger" onClick={toggleMenu}>
      <span className={`bar ${isOpen ? 'open' : ''}`}></span>
      <span className={`bar ${isOpen ? 'open' : ''}`}></span>
      <span className={`bar ${isOpen ? 'open' : ''}`}></span>
    </div>

     <nav className={`navigation ${isOpen ? 'show' : ''}`}>
        <ul>
        <li><Link className="link" to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link className="link" to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link className="link" to="passion" smooth={true} duration={500}>Passion</Link></li>
          <li><Link className="link" to="certificates" smooth={true} duration={500}>Certificates</Link></li>
          <li><Link className="link" to="resume" smooth={true} duration={500}>Resume</Link></li>
        </ul>
      </nav>
      {/* <img src="./assets/line-9.svg" alt="Myda" style={{margin: "30px"}} className="img-line"/> */}
      {/* <div className="social-icons">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/group-10.svg" alt="Facebook Icon" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/group-8.svg" alt="linkedin Icon" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/group-9.svg" alt="twitter Icon" />
        </a>
      </div> */}
    </div>
  </header>
  );
};

export default Navbar;
