import "./App.css";
import  { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Portfolio = () => {
  
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);
    const [leftArrowImage, setLeftArrowImage] = useState('./assets/maki-arrow-2.svg'); // Initial left arrow image
    const [fileUrl, setFileUrl] = useState("./assets/myda_gelani.pdf");
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
      <header className="portfolio-header">
        <h1 className="name"  onClick={() => window.location.reload()}>
          <span className="name_span"  onClick={() => window.location.reload()}>Myda Gilani </span>
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

      <main className="main-content">
      <section className="intro" id="home">
        <div className="row ">
          <div className="intro-content col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-lg d-flex justify-content-center align-items-center align-items-md-start align-items-sm-start">
          <div  className="title-img">
          <img src="./assets/pinki.png" alt="Myda" className="text-image" />
          <h2 className="intro-title"><span  className="span">Myda Gilani</span></h2>
          </div>
          <div className="d-flex flex-column justify-content-start header-p-btn">
          <p className="intro-description">
          I am a natural leader. I thrive in the company of friends and my family. I enjoy crocheting, music, community engagement, sports and languages. Each of these experiences has shaped who I am and continues to fuel my creativity and personal growth.          </p>
           {/* Portfolio Button with Scroll to Passion Section */}
        <Link to="resume" smooth={true} duration={500}>
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

          {/* Crocheting Section */}
          <section className="crocheting" id="passion">
            <div className="row">
          <div className="crocheting-content col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="crocheting-icon">
          <img src="./assets/frame-4.svg" alt="Quote" className="quote-icon" />
          <h3 className="section-title">Crocheting</h3>
            </div>
            <div className="crocheting-margin">
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
          </div>
          
          <div className="right-section col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
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
          </div>
        </section>
        {/* Line Divider */}
        <img
            src="./assets/line-12.svg"
            alt="line-divider"
            className="line-divider"
          />

         {/* Music Section */}

         {/* testing com */}
            
         <section className="crocheting" id="passion">
            <div className="row">
        
       
          <div className="right-section col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 order-last order-sm-last order-lg-first" >
          <video
              className="sports-image"
              ref={firstVideoRef} 
              // muted 
              loop 
              onClick={handlePlayMusicPause}
            >
              <source src={music_video[activeVideoIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isSportPlaying && (
                <button className="play-button" onClick={handlePlayMusicPause}>
                  <img src='./assets/Group_28.svg' alt="Play Button" className="play-icon" />
                </button>
            )}
             
          </div>

          <div className="crocheting-content col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 order-first order-sm-first order-lg-last">
            <div className="crocheting-icon">
          <img src="./assets/frame-4.svg" alt="Quote" className="quote-icon" />
          <h3 className="section-title">Music</h3>
            </div>
            <div className="crocheting-margin">
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
          </div>
          </div>
        </section>
             {/* end */}


        {/* Line Divider */}
        <img
            src="./assets/line-12.svg"
            alt="line-divider"
            className="line-divider"
          />

        {/* Community Section */}
        <section className="crocheting" id="passion">
            <div className="row">
          <div className="crocheting-content col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="crocheting-icon">
          <img src="./assets/frame-4.svg" alt="Quote" className="quote-icon" />
          <h3 className="section-title">Community Engagement & Volunteerism</h3>
            </div>
            <div className="crocheting-margin">
          <blockquote className="crocheting-quote">
          “What you do has far greater impact than what you say.”
          </blockquote>
          <blockquote className="author-quote">
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
          <div className="right-section col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <img
              src={community_images[activeIndex]}
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
          </div>
        </section>
        {/* <section className="community">
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
          </div> */}
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
         {/* <div className="right-section">
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
        </section> */}

        {/* Line Divider */}
        <img
            src="./assets/line-12.svg"
            alt="line-divider"
            className="line-divider"
          />

{/* testing com */}
            
<section className="crocheting" id="passion">
            <div className="row">
        
       
          <div className="right-section col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 order-last order-sm-last order-lg-first" >
          {/* <video
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
            )} */}
            <img
              src={sports_images[activeIndex]}
              alt="crocheting-image"
              className="crocheting-image"
            />
            <div className="circles">
            {sports_images.map((_, index) => (
              <div
                key={index}
                alt="dot-image"
                className={`dot-image ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleCircleClick(index)}
              />
            ))}
            </div>
            {/* <div className="circles">
            {sports_videos.map((_, index) => (
              <div
                key={index}
                alt="dot-image"
                className={`dot-image ${index === activeVideoIndex ? 'active' : ''}`}
                onClick={() => handleCircleVideoClick(index)}
              />
            ))}
            </div> */}
          </div>

          <div className="crocheting-content col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 order-first order-sm-first order-lg-last">
            <div className="crocheting-icon">
          <img src="./assets/frame-4.svg" alt="Quote" className="quote-icon" />
          <h3 className="section-title">Sports</h3>
            </div>
            <div className="crocheting-margin">
          <blockquote className="crocheting-quote">
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
          </div>
          </div>
        </section>
             {/* end */}

      
       {/* Line Divider */}
       <img
            src="./assets/line-12.svg"
            alt="line-divider"
            className="line-divider"
        />
        
       {/* Leadership Section */}
       {/* <section className="leadership"> */}
       <section className="crocheting" id="passion">
            <div className="row">
          <div className="crocheting-content col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="crocheting-icon">
          <img src="./assets/frame-4.svg" alt="Quote" className="quote-icon" />
          <h3 className="section-title">Leadership</h3>
            </div>
            <div className="crocheting-margin">
          <blockquote className="crocheting-quote">
          “What you do has far greater impact than what you say.”
          </blockquote>
          <blockquote className="author-quote">
          <img
            src="./assets/line-10.svg"
            alt="line"
            className="line"
          />Unknown
          </blockquote>
          <p className="section-description">
          I was elected Student Representative in the spring of 7th grade. Taking the initiative, my co-rep and I planned out the last day of school events, bonding activities, food drives, and more fun things for our grade to participate in. I am able to take on a leadership position with ease and enjoy working with a team or leading projects on my own. I have attended several Model UN Leadership Conferences and camps over the past two years, have represented Turkey, Russia, Afghanistan and the Arctic Circle. I have outlined problems and proposed solutions and have won “ Best Position Paper Award” for my research on air pollution in Russia. Recently ( October 2024), I was elected as co-president in my school's Student Govrnment elections for 8th grade. I am humbled and excited at the same time and take my responsibilities seriously and will work with my class mates to make this a fantastic year          </p>
          </div>
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
          <div className="right-section col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
          
          <img
              src={leadership_images[activeIndex]}
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
            {/* <div className="circles">
            {images.map((_, index) => (
              <div
                key={index}
                alt="dot-image"
                className={`dot-image ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleCircleClick(index)}
              />
            ))}
            </div> */}
          </div>
          </div>
        </section>
        
          {/* <div className="leadership-content">
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
          </div> */}
        {/* </section> */}
      
      {/* Line Divider */}
      <img
            src="./assets/line-12.svg"
            alt="line-divider"
            className="line-divider"
      />

          {/* Languages Section */}

          <section className="crocheting" id="passion">
            <div className="row">
            <div className="right-section col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 order-last order-md-last order-lg-first">
          
          <img
          src="./assets/languages.png"
            alt="languages-image"
           className="crocheting-image"
      />
        {/* <div className="circles">
        {images.map((_, index) => (
          <div
            key={index}
            alt="dot-image"
            className={`dot-image ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleCircleClick(index)}
          />
        ))}
        </div> */}
      </div> 
          <div className="crocheting-content col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 order-first order-md-first order-lg-last">
            <div className="crocheting-icon">
          <img src="./assets/frame-4.svg" alt="Quote" className="quote-icon" />
          <h3 className="section-title">Languages</h3>
            </div>
            <div className="crocheting-margin">
          <blockquote className="crocheting-quote">
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
        
          </div>
        </section>
          
          {/* <section className="languages">
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
        </section> */}
        <section className="certificates" id="certificates">
        {/* <h3 className="section-title">Certifications</h3> */}
        <div className="certificates-icon">
          <img src="./assets/frame-8.svg" alt="Quote" className="quote-icon" />
          <h3 className="leadership-section-title" style={{color: "#fff"}}>Certificates</h3>
            </div>
       
      <div className="certificates-content">
      {visibleCertificates.map((src, index) => (
          <img key={index} src={src} alt={`Certificate ${index + 1}`} />
        ))}
      </div>
      {/* Arrow Controls */}
      <div className="arrows">
        <img
          src={leftArrowImage} // Use the leftArrowImage state
          alt="Left Arrow"
          onClick={handleLeftClick}
          className={`arrow ${currentStartIndex === 0 ? 'disabled' : ''}`}
        />
        <img
          src="./assets/maki-arrow.svg"
          alt="Right Arrow"
          onClick={handleRightClick}
          className={`arrow ${currentStartIndex >= allCertificates.length - 2 ? 'disabled' : ''}`}
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
        <div className="resume_dev">
       <blockquote className="resume-quote">
       “Do the best you can until you know better. Then when you know better, do better.”
        </blockquote>
        <blockquote className="author-quote">
          <img
            src="./assets/line-10.svg"
            alt="line"
            className="line"
          />Maya Angelou
        </blockquote>
        </div>
       <a href={fileUrl} download="My_Resume.pdf" className="resume-button">Download Resume</a>
       </div>
    </section>
      {/* navigation section  */}
      <section className="footer-navigation">
      <div className="name-dev col-12 col-sm-12 col-md-12 col-lg-4">
        <h3 className="name">
          <span className="name_span_dev">Myda Gilani</span>
        </h3>
       </div>
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

          {/* <div className="social-icons-footer" style={{gap: 15}}>
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
