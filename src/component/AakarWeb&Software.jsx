import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import poster from '../assets/Images/poster.jpg';
import bgImage from '../assets/Images/otherImages/bgGraphics.jpg';
// import additionalImage1 from '../assets/Images/otherImages/service1.jpg'; // Add your images
// import additionalImage2 from '../assets/Images/otherImages/service2.jpg'; // Add your images

function AakarWebAndSoftware() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      title: "Branding",
      description: "Logo design, stationery, and business identity creation that stands out.",
      image: poster,
    },
    {
      title: "Social Media",
      description: "Eye-catching posts and ads for Facebook, Instagram, and more.",
      image: poster,
    },
    {
      title: "Marketing",
      description: "Billboard and flyer designs optimized for maximum impact.",
      image: poster,
    },
    {
      title: "Digital Products",
      description: "Tailored digital products that fit your branding needs.",
      image: poster,
    },
  ];

  return (
    <section className="flex flex-col bg-white text-gray-800 my-20">

      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url(${bgImage})" }}
        className="bg-cover bg-center bg-no-repeat py-20 px-6 text-center relative"
      >
        <div className="p-6 rounded-xl max-w-3xl mx-auto backdrop-blur-md shadow-lg">
          <h2 className="text-5xl sm:text-5xl lg:text-7xl font-saira font-bold text-white mb-4" data-aos="zoom-in">
            <span className="text-white">AAKAR</span> WEB <span className=''> & SOFTWARE</span>
          </h2>
          <p className="font-quicksand text-lg sm:text-xl text-slate-200" data-aos="fade-up">
            Transforming ideas into striking visuals across various platforms.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-10 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full rounded-lg object-cover h-64"
            />
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-900">{service.title}</h3>
            <p className="text-gray-600 font-quicksand text-base sm:text-lg leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </section>

      {/* Button to More Products */}
      <div className="text-center mb-20">
        <Link to="/aakarDigitalProduct">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
            Explore More Products
          </button>
        </Link>
      </div>

    </section>
  );
}

export default AakarWebAndSoftware;