// Header.js
import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      {/* <h1>{title}</h1> */}
      <div className="min-height-Header">
        <div className="title-img-header ms-5">
          <img src="./assets/pinki-Header.png" alt="Myda" className="text-image" />
          <h2 className="intro-title-header">
            <span className="span-header">{title}</span>
          </h2>
        </div>
      </div>
      {/* Additional header content can go here */}
    </header>
  );
};

export default Header;
