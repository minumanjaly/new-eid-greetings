import React, { useState, useRef, useEffect } from 'react';
import Greetings from './Greetings';
import Animation from './Animation';
import PopupModal from './PopupModal'; 

// Import Images
import LoaderImage from '../Assets/Loading.bb93b243b1ec87da17b4.png';
import MainIconImage from "../Assets/EGA_Logo.18f055533874f177ab7c.png";
import MainIconImageNight from "../Assets/EGA_Logo_Night.a4a935c9fcf0f2de8375.png";
import NavBackround from "../Assets/nav-bg.ab1ac9cb33f668303066.png";
import NavBackroundNight from "../Assets/nightOverlay.8d73d967be2b8afb26bf.png";
import RibbonBackround1 from "../Assets/flag.e8c36325290517b3d84b.png";
import RibbonBackround2 from "../Assets/flag1.a91fb9aca7cfb61a6585.png";
import BannerImageEn from "../Assets/preparationEnTxt.2d96cd86c782a7c44799.png";
import AnimatedObject1 from "../Assets/preparationJug.1698288d79715908e659.png";
import AnimatedObject2 from "../Assets/preparationCupCoffee.da595c0d3459dc820af8.png";
import AnimatedObject3 from "../Assets/preparationCup.6c07522b1da6102d6642.png";
import AnimatedObject4 from "../Assets/shine01.7705d396efb447290480.png";
import AnimatedObject5 from "../Assets/BiscuitHalf.99411dabe1cd1477970c.png";


// Import Arabic Images
import BannerImageAr from "../Assets/preparationArTxt.9922ff11ba2262c8c8da.png";
import BannerImageEnNight from "../Assets/preparationEnTxtNight.cd6ca912ad87279915ef.png";
import BannerImageArNight from "../Assets/preparationArTxtNight.67645e5f9f7d414ec9a6.png";

import backgroundAudio from "../Assets/1-morning-with-birds.e3ab105037e40d750f38.mp3";
import backgroundAudioScroll from "../Assets/3-Takbeerat.3c32a70d52fd1feb49bf.mp3";
import { motion, useViewportScroll, useTransform ,useAnimation, useScroll} from 'framer-motion';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNightMode, setIsNightMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isModalOpen, setIsModalOpen] = useState(true);
  const audioRef = useRef(null);
  const [currentAudio, setCurrentAudio] = useState(backgroundAudio); // Current audio state


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScrollChange = () => {
      const scrollThreshold = 200; // Change the threshold as needed
      if (window.scrollY > scrollThreshold) {
        setCurrentAudio(backgroundAudioScroll); // Switch audio
      } else {
        setCurrentAudio(backgroundAudio); // Revert to original audio
      }
    };

    window.addEventListener('scroll', handleScrollChange);

    return () => {
      window.removeEventListener('scroll', handleScrollChange);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pause current audio
      audioRef.current.src = currentAudio; // Update source
      audioRef.current.play().catch(error => console.log('Error playing audio:', error)); // Play new audio
    }
  }, [currentAudio]);

  const handleOk = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.log('Error playing audio:', error));
      setIsPlaying(true);
    }
    setIsModalOpen(false); // Close the popup
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    // Simulate loading time with a timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time, adjust as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  
  // const ribbonAnimation = useAnimation();
;
  // useEffect(() => {
  //   ribbonAnimation.start({
  //     y: [0, 50, 0], // Move down and back up
  //     transition: { duration: 1, repeat: Infinity, ease: "easeInOut" }, // Infinite loop
  //   });
  // }, [ribbonAnimation]);
  // Framer Motion scroll animations
  const { scrollY } = useScroll();
  const ribbonAnimation = {
    y: useTransform(scrollY, [0, 500], [0, -200]), // Adjust the movement range as needed
  }
  const y1 = useTransform(scrollY, [0, 300], [0, -300]);
  const y2 = useTransform(scrollY, [0, 300], [0, -150]);
  const y3 = useTransform(scrollY, [0, 300], [0, -150]);
  const y4 = useTransform(scrollY, [0, 300], [0, -150]);
  const y5 = useTransform(scrollY, [0, 300], [0, -150]);
  const ribbon1Y = useTransform(scrollY, [0, 300], [0, 100]);
  const ribbon2Y = useTransform(scrollY, [0, 300], [0, -100]);
    const [scrollPosition, setScrollPosition] = useState(0);
  
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    // Adjust the multiplier to control how much the image moves based on scroll
    const imagePosition = -scrollPosition * 0.5;
    const ribbonPosition = useTransform(scrollY, [0, 500], [0, -200]);

  const toggleTheme = () => setIsNightMode(!isNightMode);



  const toggleLanguage = () => setLanguage(prev => (prev === 'en' ? 'ar' : 'en'));

  const content = {
    en: {
      greeting: 'Hello, welcome!',
      dayMode: '🌞 Day Mode',
      nightMode: '🌜 Night Mode',
      turnOnSound: 'Turn On Sound',
      turnOffSound: 'Turn Off Sound',
      language: 'Arabic'
    },
    ar: {
      greeting: 'مرحبا، أهلاً وسهلاً!',
      dayMode: '🌞 وضع النهار',
      nightMode: '🌜 وضع الليل',
      turnOnSound: 'تشغيل الصوت',
      turnOffSound: 'إيقاف الصوت',
      language: 'English'
    }
  };

  const images = {
    BannerImage: isNightMode
      ? (language === 'en' ? BannerImageEnNight : BannerImageArNight)
      : (language === 'en' ? BannerImageEn : BannerImageAr),
    NavBackground: isNightMode ? NavBackroundNight : NavBackround,
    MainIconImage: isNightMode ? MainIconImageNight : MainIconImage,
    AnimatedObject1,
    AnimatedObject2,
    AnimatedObject3,
    AnimatedObject4,
    AnimatedObject5
  };

  if (isLoading) {
    return (
      <div className="loader-container">
        <img src={LoaderImage} alt="Loading..." className="loader-image" />
      </div>
    );
  }


  return (
    <div className={`home-container ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <PopupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="For better user experience enable the audio access."
        onOk={handleOk} // Pass the handleOk function to the modal
      />
      <div className='home-banner-container'>
        <div style={{ position: 'absolute', top: '5vh', left: '5vw', zIndex: 1000, display: 'flex', gap: '50px' }}>
          <button onClick={toggleLanguage} className="audio-toggle-button">
            {content[language].language}
          </button>

          <button onClick={toggleAudio} className="audio-toggle-button">
            {isPlaying ? (
              <>
                <FiVolume2 className="audio-toggle-icon" />
                {content[language].turnOffSound}
              </>
            ) : (
              <>
                <FiVolumeX className="audio-toggle-icon" />
                {content[language].turnOnSound}
              </>
            )}
          </button>
        </div>

        <div style={{ position: 'absolute', top: '5vh', right: '5vw', zIndex: 1000 }}>
          <button className="audio-toggle-button" onClick={toggleTheme}>
            {isNightMode ? content[language].dayMode : content[language].nightMode}
          </button>
        </div>

        <motion.div
          className='nav-bannerImage-container'
          style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={images.MainIconImage}
            alt="Main Icon"
            style={{
              width: '10vw',
              height: 'auto',
              position: 'absolute',
              top: '25%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <img
            src={images.NavBackground}
            alt="Nav Background"
            style={{ width: '100vw', height: 'auto' }}
          />
        </motion.div>

        <motion.div
          className='home-bannerImage-container'
          style={{ display: 'flex', justifyContent: 'center' }}
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={images.BannerImage} alt="" style={{ width: '25vw', height: 'auto' }} />
        </motion.div>
        <motion.div
      className='animated-image-object'
      style={{
        position: 'absolute',
        top: '55%',
        left: `calc(38% + ${imagePosition}px)`, // Move image left based on scroll
        transform: 'translate(-50%, -50%)',
        width: '15vw',
    height: 'auto',
      }}
    >
          <img src={images.AnimatedObject1} alt="Animated Object 1" style={{ width: '20vw', height: 'auto' }} />
        </motion.div>

        <motion.div
          className='animated-image-object'
          style={{
            position: 'absolute',
            top: '61%',
            right: `calc(35% + ${imagePosition}px)`, // Move image left based on scroll
            transform: 'translate(-50%, -50%)',
            width: '13vw'
          }}
          transition={{ duration: 0.8 }}
        >
          <img src={images.AnimatedObject3} alt="Animated Object 2" style={{ width: '22vw', height: 'auto' }} />
        </motion.div>
        <motion.div
          className='animated-image-object'
          style={{
            position: 'absolute',
            top: '60%',
            right: `calc(22% + ${imagePosition}px)`, // Move image left based on scroll
            transform: 'translate(-50%, -50%)',
          }}
          transition={{ duration: 0.8 }}
        >
          <img src={images.AnimatedObject2} alt="Animated Object 2" style={{ width: '20vw', height: 'auto' }} />
        </motion.div>

        <motion.div
          className='animated-image-object'
          style={{
            position: 'absolute',
            left: '15%',
            top: `calc(60vh + ${imagePosition}px)`,
          }}
          transition={{ duration: 0.8 }}
        >
          <img src={images.AnimatedObject4} alt="Animated Object 4" style={{ width: '8vw', height: 'auto' }} />
        </motion.div>

        <motion.div
          className='animated-image-object'
          style={{
            position: 'absolute',
            top: '80vh',
            right: `calc(15% + ${imagePosition}px)`,
          }}
          transition={{ duration: 0.8 }}
        >
          <img src={images.AnimatedObject5} alt="Animated Object 5" style={{ width: '8vw', height: 'auto' }} />
        </motion.div>

              {/* RibbonBackground1 */}
              <motion.div
        className='home-bannerImage-container'
        style={{ display: 'flex', justifyContent: 'center' }}
        animate={ribbonAnimation}
      >
        <img src={RibbonBackround1} alt="" style={{ width: '100vw', height: 'auto' }} />
      </motion.div>

      {/* RibbonBackground2 */}
      <motion.div
        className='home-bannerImage-container'
        style={{ display: 'flex', justifyContent: 'center' }}
        animate={ribbonAnimation}
      >
        <img src={RibbonBackround2} alt="" style={{ width: '100vw', height: 'auto' }} />
      </motion.div>

        {/* Animated Image Objects */}

      

        <Greetings language={language} />
        {/* <Animation /> */}
      </div>
      <audio ref={audioRef} src={backgroundAudio} loop />
    </div>
  );
};
export default Home;
