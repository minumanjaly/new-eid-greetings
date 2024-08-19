import React from 'react';
import AnimatedBackground1 from "../Assets/01-layerbg.16ceb555ed6574441506.png";
import AnimatedBackground2 from "../Assets/01-layerbga.85f7d5397320919ba777.png";
import AnimatedImage1 from "../Assets/21-layer.abfb20da12b83805b6b1.png";
import AnimatedImage2 from "../Assets/22-layer.a90f71c610b64a2be7b3.png";
import AnimatedImage3 from "../Assets/23-layer.c6801fbef1a4f83cc0a7.png";
import AnimatedImageLeft from "../Assets/Machine.3d5f7cf7280ea0ef524e.png";
import AnimatedImageRight from "../Assets/moneyBaloon.63e071aaf271cb6139b9.png";
import AnimatedImage4 from "../Assets/FamilywavePurple.69df3cde11d6a651736c.png";
import AnimatedImageTak from "../Assets/TakbeerENLight.6297cc1e0f17c4408a1a.png";
import AnimatedGreenBalloon from "../Assets/fairkite03.d7116226c0d5b57400b8.png";
import AnimatedPinkBalloon from "../Assets/fairkite04.85ddec41d197152eb3e1.png";
import AnimatedPurpleBalloon from "../Assets/fairkite0.3c406662647b9e43972d.png";
import AnimatedOrangeRibbon from "../Assets/rideElement04.836127a4e9d1e9c63fa9.png";
import AnimatedGreenRibbon from "../Assets/FamilyWaveGreen.a81359460d3492f4e172.png";
import AnimatedPurpleRibbon from "../Assets/FamilywavePurple.69df3cde11d6a651736c.png";
import AnimatedGiftTop from "../Assets/GiftTop.89e441526fae2b99eccb.png";
import AnimatedGiftContainer from "../Assets/GiftContainer.021292d382905b880cbb.png";
import AnimatedCash1 from "../Assets/W_01.042cbd1772af70a99957.png";
import AnimatedCash2 from "../Assets/W_02.20f91fa4ebb0f671c7e6.png";
import AnimatedCash3 from "../Assets/W_03.5c4092a11cc9cc80e3f4.png";
import AnimatedCash4 from "../Assets/W_04.52333a4e24be0bf75474.png";
import AnimatedRide1 from "../Assets/rideElement01.805c28fa6ff65904888b.png";
import AnimatedRide2 from "../Assets/rideElement02.0697f036a36413a4c63a.png";
import AnimatedGuitar from "../Assets/greetingElement04.3bddc3909327b77246aa.png";
import AnimatedQuote from "../Assets/quoteDayEn.32d9e01712b6522db652.png";
import './Animation.css';
import { motion, useScroll, useTransform } from 'framer-motion';


const Animation = () => {
  return (
    <div >
      <motion.div
      className='animated-image-object'
      style={{
        position: 'absolute',
        top: '100vh',
        // top: `calc(38% + ${imagePosition}px)`,
        transform: 'translate(-50%, -50%)',
        width: '15vw',
    height: 'auto',
      }}
    >
          <img src={AnimatedBackground1} alt="Animated Object 1" style={{ width: '100vw', height: 'auto' }} />
          
        </motion.div>
        <motion.div
      className='animated-image-object'
      style={{
        position: 'absolute',
        // top: '55%',
        // left: `calc(38% + ${imagePosition}px)`,
        transform: 'translate(-50%, -50%)',
        width: '15vw',
    height: 'auto',
      }}
    >
          <img src={AnimatedBackground2} alt="Animated Object 1" style={{ width: '20vw', height: 'auto' }} />
          
        </motion.div> <motion.div
      className='animated-image-object'
      style={{
        position: 'absolute',
        // top: '55%',
        // left: `calc(38% + ${imagePosition}px)`,
        transform: 'translate(-50%, -50%)',
        width: '15vw',
    height: 'auto',
      }}
    >
          <img src={AnimatedImage1} alt="Animated Object 1" style={{ width: '20vw', height: 'auto' }} />
          <img src={AnimatedImage2} alt="Animated Object 1" style={{ width: '20vw', height: 'auto' }} />  
          <img src={AnimatedImage3} alt="Animated Object 1" style={{ width: '20vw', height: 'auto' }} />  
          <img src={AnimatedImage4} alt="Animated Object 1" style={{ width: '20vw', height: 'auto' }} /> 
           <img src={AnimatedImageLeft} alt="Animated Object 1" style={{ width: '20vw', height: 'auto' }} /> 
            <img src={AnimatedGiftTop} alt="Animated Object 1" style={{ width: '20vw', height: 'auto' }} />
            <img src={AnimatedGreenBalloon} alt="Animated Object 1" style={{ width: '20vw', height: 'auto' }} />
            <img src={AnimatedGreenRibbon} alt="Animated Object 1" style={{ width: '20vw', height: 'auto' }} />
            <img src={AnimatedGuitar} alt="Animated Object 1" style={{ width: '20vw', height: 'auto' }} />

          
        </motion.div>
    </div>
  );
};

export default Animation;
