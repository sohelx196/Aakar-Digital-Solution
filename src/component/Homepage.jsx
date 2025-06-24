import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import React from 'react'
import aboutImg from '../assets/Images/aboutImageFinal.png'
import heroImg from '../assets/Images/heroSecImg.png'

import graphicImage from '../assets/Images/GraphicDesignImg.png'
import webDesignImg from '../assets/Images/GraphicDesignImg.png'
import softwareImage from '../assets/Images/softwareSolution.png';
import mobileAppImage from '../assets/Images/softwareSolution.png';

function Homepage() {

  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true      
  });
}, []);

  return (
    <>
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-br from-[#2d4048] to-[#132a45] text-white">
     
      <div className="max-w-xl space-y-6 mt-10 md:mt-0">
        <h1 className="font-cabin text-4xl md:text-8xl font-bold leading-tight">
          AAKAR <span>DIGITAL</span> <span>SOLUTION</span>
        </h1>
        <p className="text-base sm:text-base md:text-lg lg:text-xl">The Exclusive printing shoppe</p>

<Link to='/Contact'>
        <button className="mt-8 font-quicksand hover:border border-white border-b-4 text-white font-semibold px-4 py-2 rounded-xl border hover:shadow-md hover:scale-105 transition-all duration-100">
          Contact Us
        </button>
</Link>

      </div>

   
      <div className="w-full md:w-1/2 md:mt-0 flex justify-center">
     <img
          src={heroImg}
          alt="Hero Section"
          className="w-[600px] md:w-[900px] rounded-xl"
        />  

      </div>
    </section>
     
     {/* about us start */}
<section className="min-h-screen bg-white text-white px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-center gap-12">
  {/* Image Left Side */}
  <div className="md:w-1/2 flex justify-center">
    <img
      src={aboutImg}
      alt="About us"
      className="rounded-[30px] w-[300px] md:w-[400px]"
    />
  </div>

  {/* Right Content */}
  <div className="md:w-1/2 space-y-6 text-center md:text-left ">
    <h2 className="font-saira text-4xl md:text-5xl font-bold text-gray-800 ">
      ABOUT US
    </h2>
    <p className="font-quicksand text-base sm:text-base md:text-base lg:text-lg leading-relaxed text-gray-600 text-pretty font-medium ">
      At Aakar Digital Solution, we believe every design tells a story. We specialize in high-quality graphic design and printing services that bring your brand to life with creativity, precision, and passion.
    </p>
    <p className="font-quicksand text-base sm:text-base md:text-base lg:text-lg leading-relaxed text-gray-600 text-pretty font-medium ">
      From business cards to banners, we deliver visually striking solutions tailored to your needs. Our goal is to make your ideas stand out with designs that speak louder than words.
    </p>

    <div className="flex gap-6 justify-center md:justify-start ">
      <Link to='aakarDigitalProduct'>
      <button className="text-xs sm:text-sm md:text-base lg:text-lg font-quicksand hover:border border-gray-700 border-b-4 text-black font-semibold px-4 py-2 rounded-xl border hover:shadow-md hover:scale-105 transition-all duration-100">
        SEE OUR PRODUCTS
      </button>
      </Link>

<Link to='/Contact'>
      <button className="text-xs sm:text-sm md:text-base lg:text-lg font-quicksand hover:border border-gray-700 border-b-4 text-black font-semibold px-4 py-2 rounded-xl border hover:shadow-md hover:scale-105 transition-all duration-100">
        GET IN TOUCH
      </button>
</Link>

    </div>
  </div>
</section>
     {/* about us end */}

{/* Service start */}
<section className="bg-gradient-to-br from-[#2d4048] to-[#132a45]  flex items-center justify-center px-6 py-16 m-5 rounded-3xl">
  <div className="text-center font-saira space-y-4" data-aos="fade-right">

    <h1
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-tight">
      THE<span className="block">SERVICES</span>
      <span className="block">WE OFFER</span>
    </h1>

    <p
      className="text-white text-sm sm:text-base md:text-lg max-w-xl mx-auto"
      data-aos="fade-left">
      Empowering Your Brand Through Design, Publishing & Digital Innovation
    </p>

  </div>
</section>


{/* graphic design service start */}
    <section className=" text-black px-6 py-16 md:py-24 h-screen ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-right">
          <img
            src={graphicImage}
            alt="Graphic Design"
            className="w-[300px] md:w-[450px] lg:w-[600px]"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left" data-aos="fade-left">
          <h2 className="text-gray-600 font-saira text-4xl sm:text-5xl lg:text-8xl font-extrabold leading-tight">
            GRAPHIC <span className='block'>DESGIN</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-quicksand">
            At Aakar Digital Solutions, we create visually compelling designs that capture your brand’s essence.
            From logos and brochures to digital creatives, our graphic design services blend creativity with
            strategy to make your brand stand out and connect with your audience.
          </p>
        </div>
      </div>
    </section>
{/* graphic design service end */}


{/* web design start */}

<section className="relative text-black px-6 py-16 md:py-24 h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
    
    {/* Left Content */}
    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left" data-aos="fade-right">
      <h2 className="text-gray-600 font-saira text-4xl sm:text-5xl lg:text-8xl font-extrabold leading-tight">
        WEB <span className="block">DESIGN</span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed font-quicksand text-gray-700 max-w-xl mx-auto md:mx-0">
        At Aakar Digital Solutions, we design modern, responsive websites that not only look great but also
        deliver smooth user experiences. Our web design solutions are tailored to reflect your brand, engage your
        audience, and drive results in the digital space.
      </p>
    </div>

    {/* Right Image */}
    <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
      <img
        src={webDesignImg}
        alt="Web Design Illustration"
        className="w-[300px] md:w-[450px] lg:w-[520px]"
      />
    </div>
  </div>
</section>

{/* web design end */}


{/* software solution start */}

   <section className="bg-white text-black px-6 py-16 md:py-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-right">
          <img
            src={softwareImage}
            alt="Software Solution"
            className="w-[280px] md:w-[400px] lg:w-[550px]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left" data-aos="fade-left">
          <h2 className="text-gray-600 font-saira text-4xl sm:text-5xl lg:text-8xl font-extrabold leading-tight">
            SOFTWARE <span className="block">SOLUTION</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-quicksand text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
          At Aakar Digital Solutions, we craft smart, scalable software that simplifies your workflow and drives business growth. From web apps to enterprise tools, our solutions blend innovation, usability, and performance to deliver real results.
          </p>
        </div>
      </div>
    </section>

{/* software solution end */}


{/* Mobile app dev start */}
<section className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] text-white px-6 py-16 md:py-24 min-h-screen flex items-center">
  <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
    
    {/* Left Content */}
    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left" data-aos="fade-right">
      <h2 className="text-gray-600 font-saira text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
        MOBILE  APP <span className="block">DEVELOPMENT</span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-quicksand max-w-xl mx-auto md:mx-0">
        At Aakar Digital Solutions, we develop powerful, user-friendly mobile apps that deliver seamless experiences across all devices. From idea to launch, we ensure your app is innovative, efficient, and built to scale.
      </p>
    </div>

    {/* Right Image */}
    <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
      <img
        src={mobileAppImage}
        alt="Mobile App Illustration"
        className="w-[300px] md:w-[450px] lg:w-[520px]"
      />
    </div>
  </div>
</section>

{/* Mobile app dev end */}


{/* Service end */}

    </>
  );
}

export default Homepage