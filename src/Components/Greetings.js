import React,{useState, useEffect} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
import AnimatedWave from "../Assets/26-layer.359127373eb4aa25995f.png";
import AnimatedWave3 from "../Assets/31-layer.bd3ad793025af083f084.png";
import AnimatedWave1 from "../Assets/24-layer.8eb07b2c7441e3ee1c10.png";
import AnimatedGift from "../Assets/GiftContainer.021292d382905b880cbb.png";
import AnimatedGiftTop from "../Assets/GiftTop.89e441526fae2b99eccb.png";
import AnimatedRide1 from "../Assets/rideElement01.805c28fa6ff65904888b.png";
import AnimatedRide2 from "../Assets/rideElement02.0697f036a36413a4c63a.png";
import AnimatedRide3 from "../Assets/rideElement03.797ae4ea1119cf5f4898.png";
import AnimatedRide4 from "../Assets/rideElement04.836127a4e9d1e9c63fa9.png";
import AnimatedViolin from "../Assets/greetingElement04.3bddc3909327b77246aa.png";
import AnimatedBaloon1 from "../Assets/fairkite0.3c406662647b9e43972d.png";
import AnimatedBaloon2 from "../Assets/fairkite03.d7116226c0d5b57400b8.png";
import AnimatedBaloon3 from "../Assets/fairkite04.85ddec41d197152eb3e1.png";
import Layer1 from "../Assets/01-layerbg.16ceb555ed6574441506.png";
import Layer2 from "../Assets/01-layerbga.85f7d5397320919ba777.png";
import house1 from "../Assets/13-layer.2a73234a8f702bd55c01.png";
import house2 from "../Assets/17-layer.237658ca14d51e662145.png";
import tree from "../Assets/16-layer.56f013876cf8f0d101c1.png";
import Animatedgift from "../Assets/36-layer.8ed45987f408a9db0c21.png";
import Sun from "../Assets/03-sun.e4dc49edc03c64559054.png";
import Moon from "../Assets/03-moon.dd0120fec04248243001.png";


import IconImage from "../Assets/unnamed.webp"; // Adjust the path as needed
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
import './Greetings.css';
import './Home.css';
import { BsTreeFill } from 'react-icons/bs';

const Greetings = ({ language }) => {
    const [isNightMode, setIsNightMode] = useState(false); 
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

  // Use transform to create a range of movement based on scroll
  const yLeft = useTransform(scrollY, [0, 500], [0, -100]);
//   const yLeft = useTransform(scrollY, [0, 300], [0, 100]); // Transform for the left animated image
  const yRight = useTransform(scrollY, [0, 300], [0, -100]); // Transform for the right animated image
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
  const imagePosition = -scrollPosition * 0.1;
  const imagePosition1 = -scrollPosition * 0.2;

  // Define content for different languages
  const content = {
    en: {
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
   // Define images based on language and mode
   const images = {
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
  
    light: isNightMode ? Moon : Sun,
    Layer: isNightMode ? Layer2 : Layer1,
  };
  
   // Button and Text Styles Based on Night Mode
   const textStyle = { // Adjust this value as needed
    color: isNightMode ? '#FFF' : '#000',
    color: isNightMode ? '#FFF !important' : '#000 !important',

  };
  
  
  const buttonStyle = {
    backgroundColor: isNightMode ? '#dcd436' :'#931bde', // Purple in night mode, yellow in day mode
    color: isNightMode ? '#000' : '#FFF', // Black text in night mode, white text in day mode
    backgroundColor: isNightMode ?  '#dcd436': '#931bde' ,
    color: isNightMode ? '#000' : '#FFF',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };
  

  return (
    
    <div className='home-container'>
      {/* <div className="animated-images-container"> */}
      <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    left: '15%', // Maintain vertical position
    top:  `calc(150vh + ${imagePosition}px)`, // Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
<img src={AnimatedImageSmoke} alt="Animated Object 2" style={{ width: '18vw', height: 'auto' }} />
        </motion.div>
      
        <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '140vh', // Maintain vertical position
    left:  `calc(25% + ${imagePosition}px)`, // Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>

          <img src={AnimatedImageLeft} alt="Animated Object 2" style={{ width: '20vw', height: 'auto' }} />
        </motion.div>
        <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '140vh', // Maintain vertical position
    right:  `calc(20% + ${imagePosition}px)`, // Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
          <img src={AnimatedImageRight} alt="Animated Object 2" style={{ width: '20vw', height: 'auto' }} />
        </motion.div>
        {/* </div> */}
        <div className="text-container"  style={{ marginBottom: '60px'}}>
        <div >
        <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '200vh', // Maintain vertical position
    left:  `calc(10% + ${imagePosition}px)`, // Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={AnimatedWave} alt="Animated Object 1" style={{ width: '50vw', height: 'auto' }} />
  </motion.div>
        <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '250vh', // Maintain vertical position
    right:  `calc(35% + ${imagePosition}px)`, // Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={AnimatedWave3} alt="Animated Object 1" style={{ width: '70vw', height: 'auto' }} />

        </motion.div>
        <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '200vh', // Maintain vertical position
    right:  `calc(25% + ${imagePosition}px)`, // Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={images.Takbeer} alt="Animated Object 1" style={{ width: '30vw', height: 'auto' }} />

        </motion.div>
</div>
        <p style={textStyle}>
          {content[language].intro}
        </p>

<div className='button-group'  style={{ marginBottom: '40px', marginTop: '40px' }}>
<button onClick={() => openPopup(popupImages)} className="button-element" style = {buttonStyle} >
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


   
      
      <div className="text-container"  style={{ marginBottom: '100px', marginTop: '100px' }}>
        <p style={textStyle}>
          {content[language].eventReminder}
        </p>
        <div className="button-group" style={{ marginBottom: '80px', marginTop: '80px' }}>
          <button onClick={() => openPopup(popupImage1)} className="button-element"  style = {buttonStyle}>
            {content[language].eidEventBooklets}
          </button>
          <button onClick={() => openPopup(popupImage2)} className="button-element"  style = {buttonStyle}>
            {content[language].greetingCards}
          </button>
          <button onClick={() => openPopup(popupImage3)} className="button-element"  style = {buttonStyle}>
            {content[language].housesDecorations}
          </button>
          <button onClick={() => openPopup(popupImage4)} className="button-element"  style = {buttonStyle}>
            {content[language].companiesDecorations}
          </button>
        </div>
      </div>
      
      <div className="text-container" style={{ marginBottom: '70px', marginTop: '70px' }}>
        <p style={textStyle}>
          {content[language].familyTime}
        </p>
        <div style={{ marginBottom: '100px', marginTop: '100px' }}>
        <motion.div
          className='animated-image-object'
          style={{
            position: 'absolute',
            top: '320vh', // Maintain vertical position
            left:  `calc(32% + ${imagePosition}px)`, // Center horizontally
            transform: 'translate(-50%, -10%)', // Adjust centering
            width: '10vw',
            marginTop: '500px'
          }}
          transition={{ duration: 0.5 }}
        >
          <img src={AnimatedImage1} alt="" style={{ width: '20vw', height: 'auto' }} />

        </motion.div>
        <motion.div
          className='animated-image-object'
          style={{
            position: 'absolute',
            top: '320vh', // Maintain vertical position
            left:  `calc(20% + ${imagePosition}px)`, // Center horizontally
            transform: 'translate(-50%, -10%)', // Adjust centering
            width: '10vw',
            marginTop: '500px'
          }}
          transition={{ duration: 0.5 }}
        >
          <img src={AnimatedImage2} alt="" style={{ width: '17vw', height: 'auto' }} />

        </motion.div>
        <motion.div
          className='animated-image-object'
          style={{
            position: 'absolute',
            top: '335vh', // Maintain vertical position
            left:  `calc(30% + ${imagePosition}px)`, // Center horizontally
            transform: 'translate(-50%, -10%)', // Adjust centering
            width: '10vw',
            marginTop: '500px'
          }}
          transition={{ duration: 0.5 }}
        >
          <img src={AnimatedImage3} alt="" style={{ width: '17vw', height: 'auto' }} />

        </motion.div>
        <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '360vh', // Maintain vertical position
    left:  `calc(10% + ${imagePosition}px)`, // Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={AnimatedWave1} alt="Animated Object 1" style={{ width: '60vw', height: 'auto' }} />

        </motion.div>

<motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top:  `calc(345vh + ${imagePosition}px)`, // Center horizontally
    right: '0%', // Maintain vertical position
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '20vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={AnimatedGiftTop} alt="Animated Object 1" style={{ width: '10vw', height: 'auto' }} />

        </motion.div>
        <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '330vh', // Maintain vertical position
    right:  '10%', // Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={AnimatedGift} alt="Animated Object 1" style={{ width: '10vw', height: 'auto' }} />

        </motion.div>
</div>
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
            
            <button onClick={() => openPopup(NormalImage2)} className="button-element"  style = {buttonStyle}>
            {content[language].yourGreetings}
          </button>
          <button className="button-element"  style = {buttonStyle}>{content[language].CreateYourOwn}</button>
        </div>
      </div>

      <div className="text-container" style={{ marginBottom: '40px', marginTop: '40px' }}>
      <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    // top: '500vh',
    top:  `calc(500vh + ${imagePosition}px`, // Maintain vertical position
    left:  '10%', // Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={AnimatedRide1} alt="Animated Object 1" style={{ width: '30vw', height: 'auto' }} />

        </motion.div>
        <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '420vh', // Maintain vertical position
    right:  `calc(30% + ${imagePosition}px` ,// Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={AnimatedRide2} alt="Animated Object 1" style={{ width: '20vw', height: 'auto' }} />

        </motion.div>
        <p style={textStyle}>
          {content[language].eidLunch}
        </p>
        <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '490vh', // Maintain vertical position
    right:  `calc(50% + ${imagePosition}px` ,// Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={AnimatedRide3} alt="Animated Object 1" style={{ width: '50vw', height: 'auto' }} />
  </motion.div>
  <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '490vh', // Maintain vertical position
    right:  `calc(70% + ${imagePosition}px` ,// Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={AnimatedRide4} alt="Animated Object 1" style={{ width: '70vw', height: 'auto' }} />
  </motion.div>
      </div>

      <br />

      <div className="text-container" style={{ marginBottom: '50px', marginTop: '40px' }}>
        <p style={textStyle}>
          {content[language].eidOutings}
        </p>
      </div>

      <br />

      <div className="button-group" style={{ marginBottom: '40px', marginTop: '40px' }}>
        <button className="button-element"  style = {buttonStyle}>{content[language].discoverEvents}</button>
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
    <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '520vh', // Maintain vertical position
    left:  `calc(50% + ${imagePosition}px`,// Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={AnimatedBaloon1} alt="Animated Object 1" style={{ width: '10vw', height: 'auto' }} />

  </motion.div>
       <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '600vh', // Maintain vertical position
    left:  '10%' ,// Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={AnimatedViolin} alt="Animated Object 1" style={{ width: '15vw', height: 'auto' }} />
  </motion.div>
  <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '550vh', // Maintain vertical position
    right:  `calc(50% + ${imagePosition}px`,// Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  {/* <img src={AnimatedBaloon1} alt="Animated Object 1" style={{ width: '10vw', height: 'auto' }} /> */}
  <img src={AnimatedBaloon2} alt="Animated Object 1" style={{ width: '10vw', height: 'auto' }} />
  <img src={AnimatedBaloon3} alt="Animated Object 1" style={{ width: '15vw', height: 'auto' }} />

  </motion.div>
  <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '700vh', // Maintain vertical position
    left:  `calc(60% + ${imagePosition}px`,
    bottom:  `calc(${imagePosition}px`,// Center horizontally
    // Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={images.Quote} alt="Animated Object 1" style={{ width: '40vw', height: 'auto' }} />
</motion.div>
  <motion.div
          className='home-bannerImage-container'
          style={{ display: 'flex', justifyContent: 'center',marginTop:'50vh' }}
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={images.Layer} alt="" style={{ width: '100vw', height: '100vh' }} />
          {/* <img src={Layer2} alt="" style={{ width: '25vw', height: 'auto' }} /> */}

        </motion.div>
       
        <motion.div className='animated-image-object' style={{
            position: 'absolute',
            top: '810vh', // Maintain vertical position
            left: '60%', // Center horizontally
            transform: 'translate(-50%, -10%)', // Adjust centering
            width: '10vw',
            marginTop: '500px',
    justifyContent: 'center'

          }}
          transition={{ duration: 0.5 }}
        >
          <img src={house1} alt="" style={{ width: '18vw', height: 'auto' }} />
          </motion.div>

          <motion.div className='animated-image-object' style={{
            position: 'absolute',
            top: '810vh', // Maintain vertical position
            left: '60%', // Center horizontally
            transform: 'translate(-50%, -10%)', // Adjust centering
            width: '10vw',
            marginTop: '500px',
    justifyContent: 'center'

          }}
          transition={{ duration: 0.5 }}
        >
          <img src={house2} alt="" style={{ width: '18vw', height: 'auto' }} />

        </motion.div>
        <motion.div className='animated-image-object' style={{
            position: 'absolute',
            top: '780vh', // Maintain vertical position
            left: '50%', // Center horizontally
            transform: 'translate(-50%, -10%)', // Adjust centering
            width: '10vw',
            marginTop: '500px',
    justifyContent: 'center'

          }}
          transition={{ duration: 0.5 }}
        >
          <img src={tree} alt="" style={{ width: '18vw', height: 'auto' }} />

        </motion.div>
        <motion.div className='animated-image-object' style={{
            position: 'absolute',
            top: '780vh', // Maintain vertical position
            left: '15%', // Center horizontally
            transform: 'translate(-50%, -10%)', // Adjust centering
            width: '10vw',
            marginTop: '500px',
    justifyContent: 'center'

          }}
          transition={{ duration: 0.5 }}
        >
          <img src={AnimatedRide1} alt="" style={{ width: '35vw', height: 'auto' }} />


        </motion.div>
        <motion.div className='animated-image-object' style={{
            position: 'absolute',
            top: '790vh', // Maintain vertical position
            left: '30%', // Center horizontally
            transform: 'translate(-50%, -10%)', // Adjust centering
            width: '10vw',
            marginTop: '500px',
    justifyContent: 'center'

          }}
          transition={{ duration: 0.5 }}
        >
          {/* <img src={AnimatedRide1} alt="" style={{ width: '18vw', height: 'auto' }} /> */}
          <img src={AnimatedRide2} alt="" style={{ width: '15vw', height: 'auto' }} />


        </motion.div>
        <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '800vh', // Maintain vertical position
    left:  `calc(50% + ${imagePosition}px`,// Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={AnimatedBaloon1} alt="Animated Object 1" style={{ width: '10vw', height: 'auto' }} />

  </motion.div> <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '770vh', // Maintain vertical position
    right:  `calc(50% + ${imagePosition}px`,// Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={AnimatedBaloon2} alt="Animated Object 1" style={{ width: '10vw', height: 'auto' }} />

  </motion.div>
  <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '800vh', // Maintain vertical position
    right:  `calc(60% + ${imagePosition}px`,// Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={AnimatedBaloon3} alt="Animated Object 1" style={{ width: '20vw', height: 'auto' }} />

  </motion.div>
  <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '820vh', // Maintain vertical position
    left:  `calc(60% + ${imagePosition}px`,// Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={AnimatedImageLeft} alt="Animated Object 1" style={{ width: '20vw', height: 'auto' }} />

  </motion.div>
  <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '820vh', // Maintain vertical position
    right:  `calc(60% + ${imagePosition}px`,// Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={Animatedgift} alt="Animated Object 1" style={{ width: '10vw', height: 'auto' }} />

  </motion.div>
        {/* <motion.div
          className='home-bannerImage-container'
          style={{ display: 'flex', justifyContent: 'center' }}
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={images.BannerImage} alt="" style={{ width: '25vw', height: 'auto' }} />
        </motion.div> */}
    <motion.div className='animated-image-object' style={{
            position: 'absolute',
            top: '810vh', // Maintain vertical position
            left: '55%', // Center horizontally
            transform: 'translate(-50%, -10%)', // Adjust centering
            width: '10vw',
            marginTop: '500px',
    justifyContent: 'center'

          }}
          transition={{ duration: 0.5 }}
        >
          <img src={AnimatedImage1} alt="" style={{ width: '18vw', height: 'auto' }} />

        </motion.div>
        <motion.div
          className='animated-image-object'
          style={{
            position: 'absolute',
            top: '800vh', // Maintain vertical position
            // left:  `calc(50% + ${imagePosition}px)`, // Center horizontally
            transform: 'translate(-50%, -10%)', // Adjust centering
            width: '10vw',
            marginTop: '500px',
    justifyContent: 'center'

          }}
          transition={{ duration: 0.5 }}
        >
          <img src={AnimatedImage2} alt="" style={{ width: '17vw', height: 'auto' }} />

        </motion.div>
        <motion.div
          className='animated-image-object'
          style={{
            position: 'absolute',
            top: '820vh', // Maintain vertical position
            left:  '50%', // Center horizontally
            transform: 'translate(-50%, -10%)', // Adjust centering
            width: '10vw',
            marginTop: '500px',
    justifyContent: 'center'

          }}
          transition={{ duration: 0.5 }}
        >
          <img src={AnimatedImage3} alt="" style={{ width: '17vw', height: 'auto' }} />

        </motion.div>
        <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '760vh', // Maintain vertical position
    left:  `calc(50% + ${imagePosition}px`,// Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={AnimatedBaloon3} alt="Animated Object 1" style={{ width: '15vw', height: 'auto' }} />

  </motion.div>
  <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '780vh', // Maintain vertical position
    left:  '40%',// Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={images.light} alt="" style={{ width: '15vw', height: 'auto' }} />

  </motion.div>
        <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '850vh', // Maintain vertical position
    // left:  `calc(50% + ${imagePosition}px)`, // Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px',
    justifyContent: 'center'
  }}
  transition={{ duration: 0.5 }}
>
  {/* <img src={AnimatedWave1} alt="Animated Object 1" style={{ width: '40vw', height: 'auto' }} /> */}
  
  {/* <img src={AnimatedWave} alt="Animated Object 1" style={{ width: '50vw', height: 'auto',left:'10%' }} /> */}
  <img src={AnimatedWave3} alt="Animated Object 1" style={{ width: '60vw', height: 'auto',top:'90%' }} />
  {/* <img src={AnimatedWave4} alt="Animated Object 1" style={{ width: '40vw', height: 'auto' }} /> */}


        </motion.div>
        <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '850vh', // Maintain vertical position
    left:  `calc(50% + ${imagePosition}px`,// Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={AnimatedWave1} alt="Animated Object 1" style={{ width: '70vw', height: 'auto' }} />

  </motion.div>
        <motion.div
  className='animated-image-object'
  style={{
    position: 'absolute',
    top: '850vh', // Maintain vertical position
    right:  `calc(60% + ${imagePosition}px`,// Center horizontally
    transform: 'translate(-50%, -10%)', // Adjust centering
    width: '10vw',
    marginTop: '500px'
  }}
  transition={{ duration: 0.5 }}
>
  <img src={AnimatedWave} alt="Animated Object 1" style={{ width: '50vw', height: 'auto' }} />

  </motion.div>
    </div>
  );
};

export default Greetings;