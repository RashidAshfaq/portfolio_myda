import "./App.css";
// import "./main.css";
import  { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Portfolio = () => {
  
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);
    const [fileUrl, setFileUrl] = useState("https://drive.google.com/uc?export=download&id=1zaVr954RDx1eDEn_MDu8BfAW1t_fDf6P");
    const [images, setImages] = useState([
      './assets/mask-group-5.svg',
      './assets/mask-group-9.svg',
      './assets/mask-group-10.svg', // add more images here
    ]);
    const [community_images, setCommunityImages] = useState([
      './assets/mask-group-6.svg',
      './assets/mask-group-11.svg',
      './assets/mask-group-12.svg', // add more images here
    ]);
    const [sports_videos, setSportVideo] = useState([
      './assets/video_.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    ]);
    const [music_video, setMusicVideo] = useState([
      './assets/video_.mp4',
    ]);
    const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause(); // Pause the video
            firstVideoRef.current.pause();
        } else {
            videoRef.current.play(); // Play the video
            firstVideoRef.current.play();
        }
        setIsPlaying(!isPlaying); // Toggle the playing state
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // update every 2s
      return () => clearInterval(intervalId);
    }, [images.length, community_images.length]);

  //   useEffect(() => {
  //    const intervalVideoId = setInterval(() => {
  //      setActiveVideoIndex((prevIndex) => (prevIndex + 1) % sports_videos.length);
  //    }, 10000); // update every 2s
  //    return () => clearInterval(intervalVideoId);
  //  }, [sports_videos.length]);
    // Handle circle navigation click
     // Create a ref for the video element
  const videoRef = useRef(null);
  const firstVideoRef = useRef(null);
  const handleCircleVideoClick = (index) => {
    setActiveVideoIndex(index);
    videoRef.current.load(); // Reload the video when index changes
    // firstVideoRef.current.load();
    videoRef.current.play();  // Play the video
    firstVideoRef.current.play();
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

  // Handler for left arrow click
  const handleLeftClick = () => {
    if (currentStartIndex > 0) {
      const newStartIndex = currentStartIndex - 1;
      setCurrentStartIndex(newStartIndex);
      setVisibleCertificates([
        allCertificates[newStartIndex],
        allCertificates[newStartIndex + 1],
      ]);
    }
  };

  // Handler for right arrow click
  const handleRightClick = () => {
    if (currentStartIndex < allCertificates.length - 2) {
      const newStartIndex = currentStartIndex + 1;
      setCurrentStartIndex(newStartIndex);
      setVisibleCertificates([
        allCertificates[newStartIndex],
        allCertificates[newStartIndex + 1],
      ]);
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
          <img src="./assets/line-9.svg" alt="Myda" style={{margin: "30px"}} className="img-line"/>
          <div className="social-icons">
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
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="intro" id="home">
          <div className="intro-content">
          <div  className="title-img">
          <img src="./assets/ellipse-4.svg" alt="Myda" className="text-image" />
          <h2 className="intro-title"><span  className="span">Myda</span> Gilani</h2>
          </div>
          <p className="intro-description">
          Contrary to popular belief, Lorem Ipsum is not simply random text.
           It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
          </p>
           {/* Portfolio Button with Scroll to Passion Section */}
        <Link to="passion" smooth={true} duration={500}>
          <button className="portfolio-button">My Portfolio</button>
        </Link>
          </div>
          <div className="intro-img">
          <img src="./assets/mg-1.svg" alt="Myda" className="intro-image" />
          </div>
        </section>

        {/* About Me Section */}
        <section className="about-me" id="about">
          <img
            src="./assets/mask-group.svg"
            alt="About Me"
            className="section-image"
          />
          <div className="about-content">
            <div className="about-icon">
          <img src="./assets/frame-4.svg" alt="Quote" className="quote-icon" />
          <h3 className="section-title">About Me</h3>
            </div>
          <p className="section-description">
          You can express yourself however you want and whenever you want, for free. You can customize a template or make your own from scratch, with an immersive library at your disposal. You can express yourself however you want and whenever you free.
          You can customize a template or make your own from scratch, with an immersive library at your disposal.
          </p>
          <blockquote className="quote">
           Follow me on:
          </blockquote>
          <div className="social-icons-about">
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
          </div>
          </div>
        </section>

          {/* Crocheting Section */}
          <section className="crocheting" id="passion">
          <div className="crocheting-content">
            <div className="crocheting-icon">
          <img src="./assets/frame-4.svg" alt="Quote" className="quote-icon" />
          <h3 className="section-title">Crocheting</h3>
            </div>
          <blockquote className="crocheting-quote">
          “The finest thing about a hobby is that you can’t do any pretending about it. You either like it or you don’t.”
          </blockquote>
          <blockquote className="author-quote">
          <img
            src="./assets/line-10.svg"
            alt="line"
            className="line"
          />Dorothy Draper
          </blockquote>
          <p className="section-description">
          I started crocheting in 4th grade, during the Pandemic. My grandma used to live with us then, and around the house she would carry her knitting needles and her crocheting hooks, making new sweaters or hats for my siblings and I. I was very intrigued by how one small hook and yarn could create such a meaningful piece to wear, or even a stuffed animal. I learnt from her and now I am able to make blankets and hair ties, with a crochet hook! For me, crocheting is relaxing and very meaningful. Every piece counts, even the beginner ones to the advanced.
          </p>
          </div>
          {/* <div className="right-section">
          <img
            src="./assets/mask-group-5.svg"
            alt="crocheting-image"
            className="crocheting-image"
          />
          <img  
            src="./assets/group-21.svg"
            alt="dot-image"
            className="dot-image"
          />
          </div> */}
          <div className="right-section">
            <img
              src={images[activeIndex]}
              alt="crocheting-image"
              className="crocheting-image"
            />
            <div className="circles">
            {images.map((_, index) => (
              <div
                key={index}
                alt="dot-image"
                className={`dot-image ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleCircleClick(index)}
              />
            ))}
            </div>
          </div>
        </section>
        {/* Line Divider */}
        <img
            src="./assets/line-12.svg"
            alt="line-divider"
            className="line-divider"
          />

         {/* Music Section */}
         <section className="music">
          <div className="left-section">
          {/* <img
            src="./assets/mask-group-2.svg"
            alt="music-image"
            className="music-image"
          /> */}
           <video
              className="sports-image"
              ref={firstVideoRef} 
              // muted 
              loop 
              onClick={handlePlayPause}
            >
              <source src={music_video[activeVideoIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
                <button className="play-button" onClick={handlePlayPause}>
                  <img src='./assets/Group_28.svg' alt="Play Button" className="play-icon" />
                </button>
            )}
    
          </div>
          <div className="music-content">
            <div className="music-icon">
          <img src="./assets/frame-4.svg" alt="Quote" className="quote-icon" />
          <h3 className="section-title">Music</h3>
            </div>
          <blockquote className="crocheting-quote">
          “Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.”
          </blockquote>
          <blockquote className="author-quote">
          <img
            src="./assets/line-10.svg"
            alt="line"
            className="line"
          />Plato
          </blockquote>
          <p className="section-description">
          In 2nd grade, one of my closest friends played the piano beautifully at the school assembly. I was inspired. Shortly after that, the Covid 19 Pandemic started. It was the best time to learn a new skill. My dad bought a piano and I learnt to read sheet music and play many songs by watching YouTube tutorials. I still take piano lessons at a Conservatory and now I am developing a higher level of skills by learning to play difficult classical pieces. I have performed in the Rivers Conservatory Recital, playing an intermediate piece for an audience.
          </p>
          </div>
        </section>

        {/* Line Divider */}
        <img
            src="./assets/line-12.svg"
            alt="line-divider"
            className="line-divider"
          />

        {/* Community Section */}
        <section className="community">
          <div className="community-content">
            <div className="community-icon">
          <img src="./assets/frame-4.svg" alt="Quote" className="quote-icon" />
          <h3 className="community-section-title">Community Engagement & Volunteerism</h3>
            </div>
          <blockquote className="community-quote">
          “What you do has far greater impact than what you say.”
          </blockquote>
          <blockquote className="community-author-quote">
          <img
            src="./assets/line-10.svg"
            alt="line"
            className="line"
          />Stephen Covey, author & educator
          </blockquote>
          <p className="section-description">
          I grew up in a household where volunteering and giving charity was a given. I have always seen my mother giving out charity, and volunteering at local shelters, or even helping out people back home in Pakistan. In the summer of 2024, I volunteered at the migrant shelter in my town. I helped many young children who had been through trauma and separation. I read books to them, heard their stories, played soccer with them and gave them emotional support. All the while realizing how lucky I am. Community engagement is a huge part of my life, as I live in Acton, but receive education in Concord. Remaining close with my town and giving back is one of the many reasons why I love volunteering in Acton.
          </p>
          </div>
          {/* <div className="right-section">
          <img
            src="./assets/mask-group-6.svg"
            alt="community-image"
            className="community-image"
          />
          <img  
            src="./assets/group-21.svg"
            alt="dot-image"
            className="dot-image"
          />
          </div> */}
         <div className="right-section">
            <img
              src={community_images[activeIndex]}
              alt="community-image"
              className="community-image"
            />
            <div className="circles">
            {community_images.map((_, index) => (
              <div
                key={index}
                alt="dot-image"
                className={`dot-image ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleCircleClick(index)}
              />
            ))}
            </div>
          </div>
        </section>

        {/* Line Divider */}
        <img
            src="./assets/line-12.svg"
            alt="line-divider"
            className="line-divider"
          />


         {/* sports Section */}
         <section className="sports">
          {/* <div className="left-section">
          <img
            src="./assets/mask-group-3.svg"
            alt="sports-image"
            className="sports-image"
          />
          <img  
            src="./assets/group-23.svg"
            alt="dot-image"
            className="dot-image"
          />
          </div> */}
          <div className="left-section">
            {/* <img
              src={sports_videos[activeVideoIndex]}
              alt="sports-image"
              className="sports-image"
            /> */}
            <video
              className="sports-image"
              ref={videoRef} 
              // muted 
              loop 
              onClick={handlePlayPause}
            >
              <source src={sports_videos[activeVideoIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
                <button className="play-button" onClick={handlePlayPause}>
                    <img src='./assets/Group_28.svg' alt="Play Button" className="play-icon" />
                </button>
            )}
            <div className="circles">
            {sports_videos.map((_, index) => (
              <div
                key={index}
                alt="dot-image"
                className={`dot-image ${index === activeVideoIndex ? 'active' : ''}`}
                onClick={() => handleCircleVideoClick(index)}
              />
            ))}
            </div>
          </div>

          <div className="sports-content">
            <div className="sports-icon">
          <img src="./assets/frame-4.svg" alt="Quote" className="quote-icon" />
          <h3 className="section-title">Sports</h3>
            </div>
          <blockquote className="sports-quote">
          “Winning isn't everything, but wanting to win is”
          </blockquote>
          <blockquote className="author-quote">
          <img
            src="./assets/line-10.svg"
            alt="line"
            className="line"
          />Vince Lombardi
          </blockquote>
          <p className="section-description">
          I started playing tennis when I was six years old. I have been exposed to racquet sports all of my life, and was very honored to become the JV Tennis captain in 6th grade. I have been a constant leader in my main sport, although I enjoy playing soccer - as I have been in the Varsity Soccer team at Nashoba Brooks school for the past three years.
          </p>
          </div>
        </section>
      
       {/* Line Divider */}
       <img
            src="./assets/line-12.svg"
            alt="line-divider"
            className="line-divider"
        />
        
       {/* Leadership Section */}
       <section className="leadership">
          <div className="leadership-content">
            <div className="leadership-icon">
          <img src="./assets/frame-4.svg" alt="Quote" className="quote-icon" />
          <h3 className="leadership-section-title">Leadership</h3>
            </div>
          <blockquote className="leadership-quote">
          “Idealism sparks the dream. Determination sets it ablaze”
          </blockquote>
          <blockquote className="leadership-author-quote">
          <img
            src="./assets/line-10.svg"
            alt="line"
            className="line"
          />Unknown
          </blockquote>
          <p className="section-description">
          I was elected Student Representative in the spring of 7th grade. Taking the initiative, my co-rep and I planned out the last day of school events, bonding activities, food drives, and more fun things for our grade to participate in. I am able to take on a leadership position with ease and enjoy working with a team or leading projects on my own. I have attended several Model UN Leadership Conferences and camps over the past two years, have represented Turkey, Russia, Afghanistan and the Arctic Circle. I have outlined problems and proposed solutions and have won “ Best Position Paper Award” for my research on air pollution in Russia.
          </p>
          </div>
          <div className="right-section">
          <img
            src="./assets/mask-group-7.svg"
            alt="leadership-image"
            className="leadership-image"
          />
          </div>
        </section>
      
      {/* Line Divider */}
      <img
            src="./assets/line-12.svg"
            alt="line-divider"
            className="line-divider"
      />

          {/* Languages Section */}
          <section className="languages">
          <div className="left-section">
          <img
            src="./assets/languages.svg"
            alt="languages-image"
            className="languages-image"
          />
          </div>
          <div className="languages-content">
            <div className="languages-icon">
          <img src="./assets/frame-4.svg" alt="Quote" className="quote-icon" />
          <h3 className="section-title">Languages</h3>
            </div>
          <blockquote className="leadership-quote">
          “Knowledge of languages is the doorway to wisdom.”
          </blockquote>
          <blockquote className="author-quote">
          <img
            src="./assets/line-10.svg"
            alt="line"
            className="line"
          />Roger Bacon
          </blockquote>
          <p className="section-description">
          I belong to a multilingual home. My family can speak and/or understand English, Urdu, Arabic, Spanish and Latin. My parents speak Urdu with us and I take bi weekly Arabic classes online to learn to read the Quran. I have intermediate fluency in Spanish and I just took the National Latin Exam in the spring of 2024. I was one of the 12 students in my grade to receive an honorable mention and a Cum Laude Certificate for my performance. Languages are a means of connecting with other people and to understand them. I am very happy to be multilingual.
          </p>
          </div>
        </section>
        <section className="certificates" id="certificates">
        {/* <h3 className="section-title">Certifications</h3> */}
        <div className="certificates-icon">
          <img src="./assets/frame-8.svg" alt="Quote" className="quote-icon" />
          <h3 className="leadership-section-title" style={{color: "#fff"}}>Certifications</h3>
            </div>
        {/* <div className="certificates-content">
          <img src="./assets/certificate-3.svg" alt="Certificate 1" />
          <img src="./assets/mask-group-8.svg" alt="Certificate 2" />
        </div>
        <div className="arrows">
          <img src="./assets/maki-arrow-2.svg" alt="arrow 1" />
          <img src="./assets/maki-arrow.svg" alt="arrow 2" />
        </div> */}
      <div className="certificates-content">
      {visibleCertificates.map((src, index) => (
          <img key={index} src={src} alt={`Certificate ${index + 1}`} />
        ))}
      </div>

      {/* Arrow Controls */}
      <div className="arrows">
        <img
          src="./assets/maki-arrow-2.svg"
          alt="Left Arrow"
          onClick={handleLeftClick}
          className={`arrow ${currentStartIndex  === 0 ? 'disabled' : ''}`}
        />
        <img
          src="./assets/maki-arrow.svg"
          alt="Right Arrow"
          onClick={handleRightClick}
          className={`arrow ${currentStartIndex  >= allCertificates.length - 2 ? 'disabled' : ''}`}
        />
      </div>
      </section>
      {/* Resume SEction */}
      <section className="resume" id="resume">
      <div className="resume-icon">
        <img src="./assets/frame-4.svg" alt="Quote" className="quote-icon" />
        <h3 className="leadership-section-title">Resume</h3>
       </div>
       <div className="quote-button">
       <blockquote className="resume-quote">
       “The finest thing about a hobby is that you can’t do any pretending about it. You either like it or you don’t.”
          </blockquote>
       <a href={fileUrl} download="My_Resume.pdf" className="resume-button">Download Resume</a>
       </div>
    </section>
      {/* navigation section  */}
      <section className="footer-navigation">
      <div className="name-dev">
        <h3 className="name">
          <span className="name_span_dev">Myda</span>Gilani
        </h3>
       </div>
       <dev className="nav-container" style={{ marginLeft: "60px"}}>
          <nav className="navigation">
            <ul style={{gap: 40, border: "none"}}>
            <li><Link className="link" to="home" smooth={true} duration={500}>Home</Link></li>
              <li><Link className="link" to="about" smooth={true} duration={500}>About</Link></li>
              <li><Link className="link" to="passion" smooth={true} duration={500}>Passion</Link></li>
              <li><Link className="link" to="certificates" smooth={true} duration={500}>Certificates</Link></li>
              <li><Link className="link" to="resume" smooth={true} duration={500}>Resume</Link></li>
            </ul>
          </nav>

          <div className="social-icons-footer" style={{gap: 15}}>
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
          </div>
        </dev>
    </section>
        {/* Other Sections like Crocheting, Music, etc. */}
        {/* Repeat similar structure as About Me for each section */}
      </main>

      <footer className="portfolio-footer">
        <p>© Myda Gilani 2024. Powered by <a className="footer-span" href="https://www.tabsgi.com/">TGI.</a></p>
      </footer>
    </div>
  );
};

export default Portfolio;
