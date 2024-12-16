import React from 'react';
import  { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Resume = () => {
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
   <>
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
       </section></>
  );
};

export default Resume;
