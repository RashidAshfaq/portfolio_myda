import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './component/HomeCom';
import Certificate from './component/CertificateCom';
import Passion from './component/PassionCom';
import Resume from './component/ResumeCom';
// import Services from './pages/Services';

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/passion" element={<Passion />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;