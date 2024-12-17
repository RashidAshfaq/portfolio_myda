import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
// import Footer from './components/Footer';
import Home from './pages/HomePage';
import Certificate from './pages/CertificatePage';
import Passion from './pages/PassionPage';
import Resume from './pages/ResumePage';
// import Services from './pages/Services';

const App = () => {
  return (
    <Router>
      <Navbar />
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