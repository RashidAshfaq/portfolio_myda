import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="name-dev">
        <h3 className="name">
          <span className="name_span_dev">Myda Gilani</span>
        </h3>
      </div>
      <footer className="portfolio-footer">
        <p>
          © Myda Gilani 2024. Powered by{" "}
          <a className="footer-span" href="https://www.tabsgi.com/">
            TGI.
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
