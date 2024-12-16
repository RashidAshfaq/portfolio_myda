import "../App.css";
import  { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Footer from "./FooterCom";

const Portfolio = () => {
  
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);
    const [leftArrowImage, setLeftArrowImage] = useState('./assets/maki-arrow-2.svg'); // Initial left arrow image
    const [fileUrl, setFileUrl] = useState("./assets/resume.pdf");
    const [images, setImages] = useState([
      './assets/mask-group-5.svg',
      './assets/mask-group-9.svg',
      './assets/mask-group-10.svg', // add more images here
    ]);
    const [sports_images, setSportImages] = useState([
      './assets/sport_image_1.png',
      './assets/sport_image_2.png',
      './assets/sport_image_3.png', // add more images here
    ]);
    const [leadership_images, setLeadershipImages] = useState([
      './assets/leadership_image.png',
      './assets/leadership_image.svg',
      './assets/mask-group-7.svg', // add more images here
    ]);
    const [community_images, setCommunityImages] = useState([
      // './assets/mask-group-6.svg',
      './assets/mask-group-11.svg',
      './assets/mask-group-12.svg', // add more images here
      './assets/make_community_1.svg',
      './assets/make_community_2.svg',
      // './assets/make_community_2.svg',
    ]);
    const [sports_videos, setSportVideo] = useState([
      './assets/updated_video.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    ]);
    const [music_video, setMusicVideo] = useState([
      './assets/updated_video.mp4',
    ]);
    const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing
    const [isSportPlaying, setIsSportPlaying] = useState(false); 
    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause(); // Pause the video
        } else {
            videoRef.current.play(); // Play the video
        }
        setIsPlaying(!isPlaying); // Toggle the playing state
    };
    const handlePlayMusicPause = () => {
      if (isSportPlaying) {
          firstVideoRef.current.pause();
      } else {
          firstVideoRef.current.play();
      }
      setIsSportPlaying(!isSportPlaying); // Toggle the playing state
  };

  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // update every 2s
      return () => clearInterval(intervalId);
    }, [images.length, community_images.length]);

 
     // Create a ref for the video element
  const videoRef = useRef(null);
  const firstVideoRef = useRef(null);
  const handleCircleVideoClick = (index) => {
    setActiveVideoIndex(index);
    videoRef.current.load(); // Reload the video when index changes
  };
    const handleCircleClick = (index) => {
      setActiveIndex(index);
    };

   // State to hold all certificates
   const allCertificates = [
    './assets/certificate-3.svg',
    './assets/mask-group-8.svg',
    './assets/certificate_01.svg',
    './assets/certificate_02.svg',
    './assets/certificate_03.svg',
    './assets/certificate-3.svg',
  ];

  /// State to keep track of the currently visible images
  const [visibleCertificates, setVisibleCertificates] = useState([
    allCertificates[0],
    allCertificates[1],
  ]);

  // State to keep track of the index for the first visible image
  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  // Handle right arrow click
  const handleRightClick = () => {
    if (currentStartIndex < allCertificates.length - 2) {
      const newStartIndex = currentStartIndex + 1;
      setCurrentStartIndex(newStartIndex);
      setVisibleCertificates([allCertificates[newStartIndex], allCertificates[newStartIndex + 1]]);
      setLeftArrowImage('./assets/maki_arrow.png'); // Change left arrow image
    }
  };

  // Handle left arrow click
  const handleLeftClick = () => {
    if (currentStartIndex > 0) {
      const newStartIndex = currentStartIndex - 1;
      setCurrentStartIndex(newStartIndex);
      setVisibleCertificates([allCertificates[newStartIndex], allCertificates[newStartIndex + 1]]);
    }

    if (currentStartIndex === 1) {
      setLeftArrowImage('./assets/maki-arrow-2.svg'); // Restore original left arrow image
    }
  };
  // State to toggle menu visibility
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
    <div className="portfolio">
      {/* <header className="portfolio-header">
        <h1 className="name"  onClick={() => window.location.reload()}>
          <span className="name_span"  onClick={() => window.location.reload()}>Myda</span>Gilani
        </h1>
        <div className="nav-container" ref={menuRef}>
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
         
        </div>
      </header> */}

      <main className="main-content">
      <section className="intro" id="home">
        <div className="row ">
          <div className="intro-content col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-lg d-flex justify-content-center align-items-center align-items-md-start align-items-sm-start">
          <div  className="title-img">
          <img src="./assets/ellipse-4.svg" alt="Myda" className="text-image" />
          <h2 className="intro-title"><span  className="span">Myda</span> Gilani</h2>
          </div>
          <div className="d-flex flex-column justify-content-start header-p-btn">
          <p className="intro-description">
          I am a natural leader. I thrive in the company of friends and my family. I enjoy crocheting, music, community engagement, sports and languages. Each of these experiences has shaped who I am and continues to fuel my creativity and personal growth.          </p>
           {/* Portfolio Button with Scroll to Passion Section */}
        <Link to="passion" smooth={true} duration={500}>
          <button className="portfolio-button">My Portfolio</button>
        </Link>
        </div>
          </div>
          <div className="intro-img col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-lg d-flex justify-content-center align-items-center ">
          <img src="./assets/group_intro.svg" alt="Myda" className="intro-image" />
          </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="about-me" id="about">
          <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-lg order-last order-sm-last order-lg-first d-flex justify-content-center">
          
          <img
            src="./assets/aboutImg.png"
            alt="About Me"
            className="crocheting-image"
          />
         
          </div>
          <div className="about-content col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-lg d-flex justify-content-center align-items-center align-items-md-start align-items-sm-start order-first order-sm-first order-lg-last">
            <div className="about-padding"
            >
            <div className="about-icon">
          <img src="./assets/frame-4.svg" alt="Quote" className="quote-icon" />
          <h3 className="section-title">About Me</h3>
            </div>
            <div className="about-margin-lft">
          <p className="section-description">
          I started my creative journey early, from learning crocheting during the pandemic to playing the piano and actively engaging in my community. Whether it's through sports or volunteering, I find joy in leadership and personal growth. Every experience has given me new perspectives, and I'm excited to learn and grow as an individual and a community member.          </p>
          {/* <blockquote className="quote">
           Follow me on:
          </blockquote> */}
          {/* <div className="social-icons-about">
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
          </div>
          </div>
          </div>
        </section>


      
       <Footer/>
      {/* navigation section  */}
      {/* <section className="footer-navigation">
       <dev className="nav-container col-12 col-sm-12 col-md-8 col-lg-8"  >
          <nav className="navigation">
            <ul style={{gap: 40, border: "none"}}>
            <li><Link className="link" to="home" smooth={true} duration={500}>Home</Link></li>
              <li><Link className="link" to="about" smooth={true} duration={500}>About</Link></li>
              <li><Link className="link" to="passion" smooth={true} duration={500}>Passion</Link></li>
              <li><Link className="link" to="certificates" smooth={true} duration={500}>Certificates</Link></li>
              <li><Link className="link" to="resume" smooth={true} duration={500}>Resume</Link></li>
            </ul>
          </nav>

    
        </dev>
    </section> */}
        {/* Other Sections like Crocheting, Music, etc. */}
        {/* Repeat similar structure as About Me for each section */}
      </main>

     
    </div>
  );
};

export default Portfolio;
