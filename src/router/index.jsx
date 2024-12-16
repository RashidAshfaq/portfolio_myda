import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../component/HomeCom";
import Passion from "../component/PassionCom";
import Certificates from "../component/CertificateCom";
import Resume from "../component/ResumeCom";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/passion" element={<Passion />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
