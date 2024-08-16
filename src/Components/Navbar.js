import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
// import BannerBackround from "../Assets/EGA_Logo.18f055533874f177ab7c.png";
import NavBackround from "../Assets/nav-bg.ab1ac9cb33f668303066.png";
import RibbonBackround1 from "../Assets/flag.e8c36325290517b3d84b.png";
import RibbonBackround2 from "../Assets/flag1.a91fb9aca7cfb61a6585.png";
import BannerImage from "../Assets/preparationEnTxt.2d96cd86c782a7c44799.png";
import backgroundAudio from "../Assets/1-morning-with-birds.e3ab105037e40d750f38.mp3";
import popupImage from "../Assets/toolkitThumbnail.5ade9be29760ed33570e.png"; // Import the image here
import { motion } from 'framer-motion';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';
import './Home.css'; // Import the CSS file

const Home = () => {
    const [isNightMode, setIsNightMode] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const toggleTheme = () => {
      setIsNightMode(!isNightMode);
    };

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    // <div className='home-container'>
       <div className={`home-container ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <Navbar/>
      <div className='home-banner-container'>
        {/* On/Off Audio Button */}
        <div style={{ position: 'fixed', top: '10px', left: '10px', zIndex: 1000 }}>
          <button onClick={toggleAudio} className="audio-toggle-button">
            {isPlaying ? (
              <>
                <FiVolume2 className="audio-toggle-icon" />
                Turn Off Sound
              </>
            ) : (
              <>
                <FiVolumeX className="audio-toggle-icon" />
                Turn On Sound
              </>
            )}
          </button>
        </div>
 {/* Day/Night Mode Toggle Button */}
 <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
          <button 
            onClick={toggleTheme}
            style={{
              fontSize: '30px',
              padding: '10px 20px',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: isNightMode ? '#fff' : '#333',
              color: isNightMode ? '#333' : '#fff',
              border: 'none',
            }}
          >
            {isNightMode ? '🌞 Day Mode' : '🌜 Night Mode'}
          </button>
        </div>
        {/* Animated Components */}
        {/* <motion.div 
          className='home-bannerImage-container' 
          style={{ display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={BannerBackround} alt="" style={{ width: '15%' }}/>
        </motion.div> */}

        <motion.div 
          className='nav-bannerImage-container' 
          style={{ display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={NavBackround} alt="" style={{ width: '100%', height: 'auto' }}/>
        </motion.div>

        <motion.div 
          className='home-bannerImage-container' 
          style={{ display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={BannerImage} alt="" style={{ width: '30%', height: 'auto' }}/>
        </motion.div>

        <motion.div 
          className='home-bannerImage-container' 
          style={{ display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={RibbonBackround1} alt="" style={{ width: '100%', height: 'auto' }}/>
        </motion.div>

        <motion.div 
          className='home-bannerImage-container' 
          style={{ display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={RibbonBackround2} alt="" style={{ width: '100%', height: 'auto' }}/>
        </motion.div>
         {/* Add the text here */}
         <div className="text-container">
            <p style={{ fontSize: '80px', color: isNightMode ? '#fff' : '#000' }}>
              After a whole year of patiently, but eagerly waiting, Eid is finally here! Hands up everyone who missed the license smells, the outfits and the delicious food? But first, let's get Eid-ready with our outfits.
            </p>
            <button onClick={openPopup} className="popup-button">
              Eid Identity
            </button>
          </div>
                {/* Popup Component */}
                {isPopupOpen && (
            <div className="popup-overlay" onClick={closePopup}>
              <div className="popup-content" onClick={e => e.stopPropagation()}>
                <img src={popupImage} alt="Popup Image" className="popup-image"/>
                <a href={popupImage} download="downloaded-image.png" className="download-button">Download</a>
                <button onClick={closePopup} className="close-popup-button">Close</button>
              </div>
            </div>
          )}

          <div className="text-container">
            <p style={{ fontSize: '80px', color: isNightMode ? '#fff' : '#000' }}>
             Now that we're ready in our new Eid outfits,
             its time for Takbeer or Eid prayers. Let's join the fdamily gathering and exchange warm greetings with loved ones.
            </p>
            <div className="button-container">
            <button onClick={openPopup} className="popup-button">
              Eid Events Booklet
            </button>
            <button onClick={openPopup} className="popup-button">
              Greeting Cards
            </button>
            <button onClick={openPopup} className="popup-button">
              Houses Decorations
            </button>
            <button onClick={openPopup} className="popup-button">
              Companies Decorations
            </button>
            </div>
          </div>
                {/* Popup Component */}
                {isPopupOpen && (
            <div className="popup-overlay" onClick={closePopup}>
              <div className="popup-content" onClick={e => e.stopPropagation()}>
                <img src={popupImage} alt="Popup Image" className="popup-image"/>
                <a href={popupImage} download="downloaded-image.png" className="download-button">Download</a>
                <button onClick={closePopup} className="close-popup-button">Close</button>
              </div>
            </div>
          )}
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} loop>
        <source src={backgroundAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Home;

