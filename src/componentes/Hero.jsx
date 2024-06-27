import React from 'react';
import profilepic0 from '../assets/profilepic0.png';
import { TypeAnimation } from 'react-type-animation';
import ShinyEffect from './ShinyEffect';
const Hero = () => {
  return (
    <div className='grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto bg-white  bg-opacity-0 mb-8 md:mb-32 mt-14'>
      <div className='max-w-[800px]'>
        <p className='text-white md:text-6xl text-3xl tracking-tight'>
          HEY, I AM <br/>
          <span className='text-white'>BRANDON DOE</span> <br/>
          <TypeAnimation
            sequence={[
              "Developer",
              1000,
              "Webdesigner",
              1000,
              "Consultant",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className='font-bold italic'
          />
        </p>
        <h2 className='text-white'>Con 0+ years of experience</h2>

        <div className='flex flex-row gap-4 mb-4 md:mb-0'>
   <a href='https://drive.google.com/uc?export=download&id=1qfUty0Yhv3166pwRoYFoG9Thrsf7ouhl'
      className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-xl'>
      Download CV
    </a>

   <button className='transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 border border-gray-400 rounded-xl'>
    Soon
    </button>
    </div>

      
      </div>
            <div className='absolute inset-0 overflow-hidden md:overflow-visible'> 
              <div className='hidden md:block'>
                <ShinyEffect left={100} top={200} size={1400} />
              </div>
            <ShinyEffect left={-100} top={0} size={1200} />
            </div>

      <img src={profilepic0} className='w-[300px] md:w-[500px]' alt='Profile' />
    </div>
  );
}

export default Hero;
