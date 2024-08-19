import React, { useState, useRef, useEffect } from 'react';
import PopupModal from './PopupModal'; 
import LoaderImage from '../Assets/Loading.bb93b243b1ec87da17b4.png';
import MainIconImage from "../Assets/EGA_Logo.18f055533874f177ab7c.png";
import MainIconImageNight from "../Assets/EGA_Logo_Night.a4a935c9fcf0f2de8375.png";
import NavBackround from "../Assets/nav-bg.ab1ac9cb33f668303066.png";
import NavBackroundNight from "../Assets/nightOverlay.8d73d967be2b8afb26bf.png";
import BannerImageEn from "../Assets/preparationEnTxt.2d96cd86c782a7c44799.png";
import BannerImageAr from "../Assets/preparationArTxt.9922ff11ba2262c8c8da.png";
import BannerImageEnNight from "../Assets/preparationEnTxtNight.cd6ca912ad87279915ef.png";
import BannerImageArNight from "../Assets/preparationArTxtNight.67645e5f9f7d414ec9a6.png";
import RibbonBackround1 from "../Assets/flag.e8c36325290517b3d84b.png";
import RibbonBackround2 from "../Assets/flag1.a91fb9aca7cfb61a6585.png";
import popupImages from "../Assets/toolkitThumbnail.5ade9be29760ed33570e.png";
import popupImage1 from "../Assets/bookletElement01.d0a6df4502b87d63bf55.png";
import popupImage2 from "../Assets/greetingElement02EN.e2d085079bdb3ca51f10.png";
import popupImage3 from "../Assets/house_thumb.0c01dfc948fc2ec415ea.png";
import popupImage4 from "../Assets/companies_thumb.a77d7d3ce586cc87958b.png";
import AnimatedImage1 from "../Assets/21-layer.abfb20da12b83805b6b1.png";
import AnimatedImage2 from "../Assets/22-layer.a90f71c610b64a2be7b3.png";
import AnimatedImageSmoke from "../Assets/Smoke.7c3ff80d303113864f33.png";
import AnimatedImage3 from "../Assets/23-layer.c6801fbef1a4f83cc0a7.png";
import AnimatedImageLeft from "../Assets/Machine.3d5f7cf7280ea0ef524e.png";
import AnimatedImageRight from "../Assets/moneyBaloon.63e071aaf271cb6139b9.png";
import NormalImage1 from "../Assets/greetingElement02EN.e2d085079bdb3ca51f10.png";
import NormalImage2 from "../Assets/greetingElement01EN.e9ac88548a7ab96112be.png";
// english images
import AnimationTakbeerLightEn from "../Assets/TakbeerENLight.6297cc1e0f17c4408a1a.png";
import AnimationTakbeerDarkEn from "../Assets/TakbeerENDark.cf5fc5b1d3d056560a3b.png";
import AnimationQuoteLightEn from "../Assets/quoteDayEn.32d9e01712b6522db652.png";
import AnimationQuoteDarkEn from "../Assets/quoteNightEn.540aeb8856ddf91d1291.png";


// arabic images
import AnimationTakbeerLightAr from "../Assets/TakbeerARLight.6abbb247e70e91643aff.png";
import AnimationTakbeerDarkAr from "../Assets/TakbeerARDark.a9a573bb495474e82440.png";
import AnimationQuoteLightAr from "../Assets/quoteDay.32937cd27ef559780a05.png";
import AnimationQuoteDarkAr from "../Assets/quoteNight.8ee711dbd8df2e4c68a8.png";
import IconImage from "../Assets/unnamed.webp"; // Adjust the path as needed

import backgroundAudio from "../Assets/1-morning-with-birds.e3ab105037e40d750f38.mp3";
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';
import './Homepage.css';
import './Greetings.css';


const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNightMode, setIsNightMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isModalOpen, setIsModalOpen] = useState(true);
  const audioRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [popupImage, setPopupImage] = React.useState(null);

  const openPopup = (imageSrc) => {
    setPopupImage(imageSrc);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupImage(null);
  };
  const downloadImage = (imageSrc) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = 'downloaded-image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // Scroll-based animation setup
  const { scrollY } = useScroll();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer); 
  }, []);

  const toggleTheme = () => setIsNightMode(!isNightMode);

  const handleOk = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.log('Error playing audio:', error));
      setIsPlaying(true);
    }
    setIsModalOpen(false); 
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleLanguage = () => setLanguage(prev => (prev === 'en' ? 'ar' : 'en'));
  const yAnimatedImages = useTransform(scrollY, [0, 300], [0, -50]); // Transform for other animated images
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
  const content = {
    en: {
      greeting: 'Hello, welcome!',
      dayMode: '🌞 Day Mode',
      nightMode: '🌜 Night Mode',
      turnOnSound: 'Volume On',
      turnOffSound: 'Volume Off',
      language: 'Arabic',
      intro: "After a whole year of patiently, but eagerly waiting, Eid is finally here! Hands up everyone who missed the license smells, the outfits and the delicious food? But first, let's get Eid-ready with our outfits.",
      eventReminder: "Now that we're ready in our new Eid outfits, it's time for Takbeer or Eid prayers. Let's join the family gathering and exchange warm greetings with loved ones.",
      familyTime: "After that much-needed family time, it's the kids' favourite part, Eideyah! Time for them to engage in friendly banter as to who received the most.",
      greetingCards: "Greeting Cards",
      subheading: "To share with your loved ones.",
      discoverEvents: "Discover our Eid Events",
      eidLunch: "Next up, a treat for the eyes and a feast for the belly, it's 'Eid Lunch' with family. Although we might be missing a few due to food coma, there's plenty of room for laughter and fun.",
      eidOutings: "After we emerge from our Eid coma, everyone's excited about Eid outings. Where do we go? What adventures can await? Don't worry, we have you covered, with Eid events.",
      eidIdentity: "Eid Identity",
      eidEventBooklets: "Eid Events Booklet",
      housesDecorations: "Houses Decorations",
      companiesDecorations: "Companies Decorations",
      yourGreetings:"Your Greetings",
      CreateYourOwn: "Create Your Own"
    },
    ar: {
      greeting: 'مرحبا، أهلاً وسهلاً!',
      dayMode: '🌞 وضع النهار',
      nightMode: '🌜 وضع الليل',
      turnOnSound: 'تشغيل الصوت',
      turnOffSound: 'إيقاف الصوت',
      language: 'English',
      intro: "بعد عام كامل من الانتظار بصبر ولكن حماس، عيد الفطر أخيرًا هنا! من الذي افتقد رائحة الرخص، الملابس والطعام اللذيذ؟ لكن أولاً، دعونا نتجمل لعيد الفطر بملابسنا.",
      eventReminder: "الآن بعد أن أصبحنا جاهزين بملابس العيد الجديدة، حان الوقت للتكبير أو صلاة العيد. دعونا نلتقي بالعائلة ونتبادل التحيات الحارة مع أحبائنا.",
      familyTime: "بعد تلك اللحظات العائلية التي كنا بحاجة إليها، يأتي الجزء المفضل للأطفال، العيدية! حان الوقت لهم للتفاعل في مناقشات ودية حول من حصل على أكثر.",
      greetingCards: "بطاقات التهاني",
      subheading: "لمشاركتها مع أحبائك.",
      discoverEvents: "اكتشف فعاليات العيد لدينا",
      eidLunch: "التالي هو متعة للعيون وعيد للأمعاء، إنه 'غداء العيد' مع العائلة. على الرغم من أننا قد نفتقد بعض الأشخاص بسبب غيبوبة الطعام، هناك الكثير من المجال للضحك والمرح.",
      eidOutings: "بعد أن نخرج من غيبوبة العيد، الجميع متحمس للذهاب في رحلات العيد. إلى أين نذهب؟ ما هي المغامرات التي قد تنتظر؟ لا داعي للقلق، نحن هنا لتغطيتك، بفعاليات العيد.",
      eidIdentity: "هوية العيد",
      eidEventBooklets: "كتيب فعاليات العيد",
      housesDecorations: "تزيين المنازل",
      companiesDecorations: "تزيين الشركات",
      yourGreetings: "تهانيك",
       CreateYourOwn: "أنشئ خاصتك"
    }
  };

  const images = {
    BannerImage: isNightMode
      ? (language === 'en' ? BannerImageEnNight : BannerImageArNight)
      : (language === 'en' ? BannerImageEn : BannerImageAr),
    NavBackground: isNightMode ? NavBackroundNight : NavBackround,
    MainIconImage: isNightMode ? MainIconImageNight : MainIconImage,
    Takbeer: isNightMode
    ? language === 'en'
      ? AnimationTakbeerDarkEn
      : AnimationTakbeerDarkAr
    : language === 'en'
    ? AnimationTakbeerLightEn
    : AnimationTakbeerLightAr,
  Quote: isNightMode
    ? language === 'en'
      ? AnimationQuoteDarkEn
      : AnimationQuoteDarkAr
    : language === 'en'
    ? AnimationQuoteLightEn
    : AnimationQuoteLightAr,
  };
   // Button and Text Styles Based on Night Mode
   const textStyle = {
    fontSize: '1.5vw',  // Adjust this value as needed
    color: isNightMode ? '#FFF' : '#000',

  };
  
  
  const buttonStyle = {
    backgroundColor: isNightMode ? '#dec71b' : '#5215a7' ,
    color: isNightMode ? '#000' : '#FFF',
    fontSize: '1.5rem',  // Scales with the root font size
    padding: '1rem 2rem',  // Padding scales with font size
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
        onOk={handleOk}
      />
<div className="button-container" >
  <button onClick={toggleLanguage} className="audio-toggle-button" >
    {content[language].language}
  </button>

  <button onClick={toggleAudio} className="audio-toggle-button" style={{ position: 'absolute', left: '150px', zIndex: 1000 }}>
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
          <img src={images.BannerImage} alt="" style={{ width: '30vw', height: 'auto' }} />
        </motion.div>


        {/* <motion.div
          className='home-bannerImage-container'
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={images.BannerImage} alt="Banner" className="banner-image" />
        </motion.div> */}
 <motion.div
        className='home-bannerImage-container'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <img src={RibbonBackround1} alt="" style={{ width: '100vw', height: 'auto' }} />
      </motion.div>

      <motion.div
        className='home-bannerImage-container'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <img src={RibbonBackround2} alt="" style={{ width: '100vw', height: 'auto' }} />
      </motion.div>
        {/* </div> */}
        <div className="text-container">
        <p style={textStyle}>
          {content[language].intro}
        </p>

<div className='button-container1'>
<button onClick={() => openPopup(popupImages)} className="button-element1" style={buttonStyle}>
          {content[language].eidIdentity}
        </button>
</div>
     
        </div>


 {/* Popup Component */}
{isPopupOpen && (
  <div className="popup-overlay" onClick={closePopup}>
    <div className="popup-content" onClick={e => e.stopPropagation()}>
      <img src={popupImage} alt="Popup Image" className="popup-image" />
      <button onClick={() => downloadImage(popupImage)} className="download-button">Download</button>
    </div>
  </div>
)}
    {/* Animated Images */}
      {/* <div className="animated-images-container"> */}
      <div>
      <motion.div
          className='animated-image-object'
          style={{
            // y: yAnimatedImages, // Move vertically based on scroll
            position: 'absolute',
            display:'flex',
            left: '21%', // Center horizontally
            // top: `calc('70%'+ ${imagePosition}px)`,
            top: '300vh', // Adjust top position based on scroll
            transform: 'translate(-50%, -50%)',
            width: '17vw',
          }}
          transition={{ duration: 0.8 }}
        >
          {/* <img src={AnimatedImage2} alt="" style={{ width: '100%', height: 'auto' }} /> */}
          <img src={AnimatedImage1} alt="" style={{ width: '20vw', height: '50vh' }} />
          {/* <img src={AnimatedImage3} alt="" style={{ width: '50%', height: '50%' }} /> */}

        </motion.div>
      <motion.div
          className='animated-image-object'
          style={{
            // y: yAnimatedImages, // Move vertically based on scroll
            position: 'absolute',
            display:'flex',
            left: '10%', // Center horizontally
            // top: `calc('70%'+ ${imagePosition}px)`,
            top: '300vh', // Adjust top position based on scroll
            transform: 'translate(-50%, -50%)',
            width: '15vw',
          }}
          transition={{ duration: 0.8 }}
        >
          <img src={AnimatedImage2} alt="" style={{ width: '20vw', height: 'auto' }} />

        </motion.div>
        <motion.div
          className='animated-image-object'
          style={{
            // y: yAnimatedImages, // Move vertically based on scroll
            position: 'absolute',
            display:'flex',
            left: '15%', // Center horizontally
            // top: `calc('70%'+ ${imagePosition}px)`,
            top: '310vh', // Adjust top position based on scroll
            transform: 'translate(-50%, -50%)',
            width: '15vw',
          }}
          transition={{ duration: 0.8 }}
        >
          <img src={AnimatedImage3} alt="" style={{ width: '20vw', height: '20vw' }} />

        </motion.div>
      </div>

      <div className="text-container">
        <p style={{ textStyle }}>
          {content[language].eventReminder}
        </p>
        <div className="button-container1">
          <button onClick={() => openPopup(popupImage1)} className="button-element1">
            {content[language].eidEventBooklets}
          </button>
          <button onClick={() => openPopup(popupImage2)} className="button-element1">
            {content[language].greetingCards}
          </button>
          <button onClick={() => openPopup(popupImage3)} className="button-element1">
            {content[language].housesDecorations}
          </button>
          <button onClick={() => openPopup(popupImage4)} className="button-element1">
            {content[language].companiesDecorations}
          </button>
        </div>
      </div>
  
      <div className="text-container">
        <p style={{textStyle }}>
          {content[language].familyTime}
        </p>
      </div>

  

      {/* Normal Images */}
      <div className="normal-images-container">
        <img src={NormalImage1} alt="Normal 1" className="normal-image" />
        <img src={NormalImage2} alt="Normal 2" className="normal-image" />
      </div>

      {/* Heading, Subheading, and Buttons */}
      <div className="heading-section">
        <h2 className="section-heading">{content[language].greetingCards}</h2>
        <p className="section-subheading">{content[language].subheading}</p>
        <div className="button-group">
            
            <button onClick={() => openPopup(NormalImage2)} className="button-element1">
            {content[language].yourGreetings}
          </button>
          <button className="button-element1">{content[language].CreateYourOwn}</button>
        </div>
      </div>

      <div className="text-container">
        <p style={{textStyle }}>
          {content[language].eidLunch}
        </p>
      </div>

      <br />

      <div className="text-container">
        <p style={{ textStyle}}>
          {content[language].eidOutings}
        </p>
      </div>

      <br />

      <div className="button-group">
        <button className="button-element1">{content[language].discoverEvents}</button>
      </div>

      <div className="icon-container">
        <img src={IconImage} alt="Icon" className="icon-image" />
      </div>
      {/* <motion.img
        src={images.Takbeer}
        alt="Takbeer"
        className="popup-image-2"
        style={{ y: yAnimatedImages }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      /> */}
      <motion.img
        src={images.Quote}
        alt="Quote"
        className="popup-image-2"
        style={{ y: yAnimatedImages }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* </div> */}
      <audio ref={audioRef} src={backgroundAudio} loop />
    </div>
  );
};

export default Homepage;
