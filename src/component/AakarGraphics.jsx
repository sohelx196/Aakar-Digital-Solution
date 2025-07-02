  import React, { useEffect } from 'react';
  import { Link } from 'react-router-dom';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import poster from '../assets/Images/poster.jpg';
  import bgImage from '../assets/Images/otherImages/bgGraphics.jpg';
  import graphicImg from '../assets/Images/aakarGraphics/graphicsImg.png';

  import pulvamaAttack from '../assets/Images/aakarGraphics/pulvamaAttack.jpg'
  import kadaiPartner from '../assets/Images/aakarGraphics/kadaiPartner.jpg'
  import vasantPanchami from '../assets/Images/aakarGraphics/vasantPanchami.jpg'
  import nirmalBike from '../assets/Images/aakarGraphics/nirmalBike.jpg'
  import shivji from '../assets/Images/aakarGraphics/shivji.jpg'


  const AakarrGraphics = () => {
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

    const services = [
      {
        title: "Pulvama Attack",
        description: "Design for Luxewash",
        image: pulvamaAttack,
      },
      {
        title: "Social Media",
        description: "Eye-catching posts and ads for Facebook, Instagram, and more.",
        image: kadaiPartner,
      },
      {
        title: "Marketing",
        description: "Billboard and flyer designs optimized for maximum impact.",
        image: vasantPanchami,
      },
      {
        title: "Digital Products",
        description: "Tailored digital products that fit your branding needs.",
        image: nirmalBike,
      },
      {
        title: "Digital Products",
        description: "Tailored digital products that fit your branding needs.",
        image: shivji,
      }
    ];

    return (
      <section className="flex flex-col bg-white text-gray-800 my-20">

        {/*  Hero Section */}
        <section
          style={{ backgroundImage: `url(${bgImage})` }}
          className="bg-cover bg-center bg-no-repeat py-20 px-6 text-center relative">

          <div className=" p-6 rounded-xl max-w-3xl mx-auto backdrop-blur-md shadow-lg">
            <h2 className="text-5xl sm:text-5xl lg:text-7xl font-saira font-bold text-white mb-4" data-aos="zoom-in">
              <span className="text-white">AAKAR</span> GRAPHICS
            </h2>
            <p className="font-quicksand text-base sm:text-base lg:text-lg text-slate-200" data-aos="fade-up">
              Transforming ideas into striking visuals across various platforms.
            </p>
          </div>

        </section>


{/* Overview Section */}
<section className="py-16 px-4 sm:px-10 lg:px-24 bg-gray-100">
  <div className="flex flex-col-reverse md:flex-row items-center gap-10">
    
    {/* Text content */}
    <div className="md:w-1/2 text-center">
      <h3 className="text-3xl lg:text-5xl font-bold text-gray-600 mb-4 font-saira"><span className='text-blue-950'>About</span> Aakar Graphics </h3>
      <p  data-aos="fade-out" className="text-gray-700 font-quicksand text-base sm:text-lg leading-relaxed">
        Aakar Graphics is a creative powerhouse dedicated to delivering impactful visual content.
        We specialize in branding, social media creatives, marketing assets, and digital product designs.
        Our mission is to turn your ideas into beautifully crafted designs that resonate.
      </p>
    </div>

    {/* Image */}
    <div className="md:w-1/2 " data-aos="fade-left">
      <img
        src={graphicImg} // Replace with a different overview image if needed
        alt="Aakar Overview"
        className="rounded-xl w-full  md:h-80 object-contain"
      />
    </div>

  </div>
</section>



        {/*  Services Grid */}
        <section className=" px-4 sm:px-10 lg:px-24 space-y-16">

<div data-aos="fade-up" className='h-screen flex justify-center item-center flex-col text-center'>
  <h1 className='font-saira font-bold text-4xl lg:text-6xl  '>See <span className='text-blue-950 '> Our Work</span></h1>
</div>

          {services.map((service, index) => (
            <>
            <div
              key={index}
              className={`flex  flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              data-aos="fade-up">

              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-1/2 border border-yellow-300 rounded-xl shadow-lg  h-64 md:h-80"
              />

              <div className="md:w-1/2 ">
                <h3 className="font-saira font-extrabold  text-2xl sm:text-3xl lg:text-6xl  mb-1 text-gray-600">{service.title}</h3>
                <p className="text-blue-950 font-quicksand font-black  text-lg sm:text-lg ">
                  {service.description}
                </p>
              </div>
          
            </div>
            <div className="lg:hidden w-20 h-1 bg-gray-600 mx-auto my-6 rounded-full"></div>
            </>
          ))}
        </section>

        {/*  Button to More Products */}
        {/* <div className="text-center mb-20">
          <Link to="/aakarDigitalProduct">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
              Explore More Products
            </button>
          </Link>
        </div> */}

      </section>
    );
  };

  export default AakarrGraphics;
