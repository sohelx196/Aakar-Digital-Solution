import AOS from 'aos';
import 'aos/dist/aos.css';


import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import React from 'react'
import aboutImg from '../assets/Images/officeImg.jpeg'
import heroImg from '../assets/Images/heroBg.gif'

import graphicImage from '../assets/Images/GraphicDesignImg.png'
import webDesignImg from '../assets/Images/webDesign.png'
import softwareImage from '../assets/Images/softwareSolution.png';
import mobileAppImage from '../assets/Images/mobileAppDev.png';
import digitalMarketing from '../assets/Images/digitalMarketing.png';

import productImg1 from '../assets/Images/officeImg.jpeg'; 
import productImg2 from '../assets/Images/officeImg.jpeg';
import productImg3 from '../assets/Images/officeImg.jpeg';

import whyChooseImg from '../assets/Images/officeImg.jpeg';
function Homepage() {

  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true      
  });
}, []);

const products = [
  { title: 'BUSINESS CARDS', img: productImg1 },
  { title: 'FLYERS', img: productImg2 },
  { title: 'BANNER', img: productImg3 },
  { title: 'SOCIAL MEDIA', img: productImg1 },
  { title: 'POSTERS', img: productImg2 },
  { title: 'BANNER', img: productImg3 },
];



  return (
    <>
<section className="lg:min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-br from-[#2d4048] to-[#132a45] text-white py-12">
  
  {/* Left Content */}
  <div className="w-full md:w-1/2 text-center md:text-left space-y-6 mt-8 md:mt-0">
    <h1 className="font-saira text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
      AAKAR <span>DIGITAL</span> <span>SOLUTION</span>
    </h1>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-quicksand">
      The Exclusive printing shoppe
    </p>
   <Link to='/Contact'>
        <button className="mt-8 font-quicksand hover:border border-white border-b-4 text-white font-semibold px-4 py-2 rounded-xl border hover:shadow-md hover:scale-105 transition-all duration-100">
          Contact Us
        </button>
  </Link>
  </div>

  {/* Right Image (Shown First on Mobile) */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={heroImg}
      alt="Hero Section"
      className="w-[240px] sm:w-[300px] md:w-[500px] lg:w-[600px] rounded-xl"
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
      className="rounded-[30px] w-[300px] md:w-[370px]"
    />
  </div>

  {/* Right Content */}
  <div className="md:w-1/2 space-y-6 text-center md:text-left ">
    <h2 className="font-saira text-4xl md:text-5xl lg:text-7xl font-bold text-gray-600 ">
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
<section className=" flex items-center justify-center px-6 py-16 m-5 rounded-3xl">
  <div className="text-center font-saira space-y-4" data-aos="fade-right">

    <h1
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-800 font-bold leading-tight">
      THE<span className="block">SERVICES</span>
      <span className="block">WE OFFER</span>
    </h1>

    <p
      className="text-gray-800 text-sm sm:text-base md:text-lg max-w-xl mx-auto"
      data-aos="fade-right">
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
          <h2 className="text-gray-600 font-saira text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight">
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
      <h2 className="text-gray-600 font-saira text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight">
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
        className="w-[300px] md:w-[450px] lg:w-[560px] bg-none"
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
          <h2 className="text-gray-600 font-saira text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight">
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
      <h2 className="text-gray-600 font-saira text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight">
        MOBILE &nbsp;APP <span className="block">DEVELOPMENT</span>
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
        className="w-[300px] md:w-[450px] lg:w-[570px]"
      />
    </div>
  </div>
</section>

{/* Mobile app dev end */}

{/* software solution start */}

   <section className="bg-white text-black px-6 py-16 md:py-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-right">
          <img
            src={digitalMarketing}
            alt="Software Solution"
            className="w-[280px] md:w-[400px] lg:w-[580px]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left" data-aos="fade-left">
          <h2 className="text-gray-600 font-saira text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight">
            DIGITAL <span className="block">MARKETING</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-quicksand text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
          At Aakar Digital Solutions, our digital marketing services are designed to boost your online presence and connect you with the right audience. From social media management to targeted ad campaigns and SEO strategies, we combine creativity with data-driven insights to help your brand grow in the digital world.
          </p>
        </div>
      </div>
    </section>

{/* software solution end */}

{/* Service end */}


{/* our product start */}




    <section className="bg-[#1e1145] py-16 px-6 sm:px-10 lg:px-20 h-content">
      <h2 className="mb-24 font-saira text-center text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl  ">
        OUR PRODUCTS
      </h2>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center">
        {products.map((product, index) => (
          
          <div
            data-aos="fade-up"
            key={index}
            className="hover:rotate relative w-72 h-96 rounded-[20px] overflow-hidden  group shadow-sm shadow-white hover:shadow-md hover:transition-all " >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-full object-cover "/>

            <div className="absolute inset-0 bg-gradient-to-t from-[#000000bb] via-[#00000055] to-transparent flex flex-col justify-end items-center p-6">

              <h3 className="text-white font-bold text-2xl tracking-wide text-center mb-4 font-quicksand">
                {product.title}
              </h3>

              <button className="text-xs sm:text-sm md:text-base lg:text-sm font-cabin hover:bg-transparent hover:text-white   font-semibold px-4 py-2 rounded-xl border hover:shadow-md transition-all bg-gray-200 text-black duration-100 ">
                <Link to='/aakarDigitalProduct'>View More</Link>
              </button>

            </div>

          </div>
          
        ))}
      </div>
    </section>

{/* our product end */}



{/* why choose start */}

      <section className="bg-white py-20 px-4 relative lg:ml-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start relative">

          {/* Left Image */}
       <div className="w-full md:w-1/2 flex justify-center md:justify-start relative z-0">
  <img
    src={whyChooseImg}
    alt="Team Working"
    className="rounded-[30px] max-h-[600px] object-cover w-[80%] h-[400px]
    lg:w-[80%] lg:h-[550px]
    xl:w-[80%] xl:h-[520px] lg:ml-20"
  />

</div>



          {/* Right Content */}
          <div className="w-full md:w-1/2 pl-0 md:pl-4 mt-2 md:mt-0 relative z-10">

                     <p className="font-cabin text-gray-600 font-semibold lg:text-xl md:text-lg sm:text-base mb-2 text-center md:text-left mt-3">
            Why Clients Choose Us?
            </p>
            <h2 className="font-saira font-semibold text-4xl sm:text-5xl lg:text-6xl text-[#0F2B59]  text-center md:text-left">
              We promise high
              <span className="block  lg:mt-3">
                quality <span className="text-gray-600">It Solution</span>
              </span>
            </h2>

            {/* Overlapping Box */}
            <div data-aos="fade-left" className="bg-white border border-black shadow-xl rounded-2xl p-10 text-gray-600 mt-5 lg:absolute lg:left-[-110px] lg:w-[550px] z-20">
              
              {/* <h3 className="font-cabin text-2xl font-semibold mb-4 text-[#000000]">
               
              </h3> */}

              <p className="font-cabin text-base font-normal text-[#696969] mb-4">
                Clients trust Aakar Digital Solution for our creative designs, reliable service, and commitment to quality. We understand each brand is unique, and we deliver personalized solutions that help businesses stand out and succeed in today’s digital world.
              </p>
              <p className="font-cabin text-base font-normal text-[#696969] mb-4">
               At Aakar, we listen, understand, and build around your needs. Our client-first approach ensures you get more than just a service — you get a partner in your growth.
              </p>
            </div>
          </div>

        </div>
      </section>

{/* why choose end */}



{/* what our client say start */}

<section className='lg:px-20'>
<div>
  <h1 className='text-8xl font-saira text-center'>What Our <span className='block '>Clients Say </span></h1>
  <p>working...</p>
</div>
</section>

{/* what our client say end */}




    </>
  );
}

export default Homepage