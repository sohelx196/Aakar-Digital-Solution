  import React, { useEffect } from 'react';
  import { Link } from 'react-router-dom';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import poster from '../assets/Images/poster.jpg';

  
  import bgImage from '../assets/Images/web&software/heroImg.png';
  import webAbout from '../assets/Images/web&software/webAboutImg.png';
  import megaviz from '../assets/Images/web&software/megaviz.png';



  import kadaiPartner from '../assets/Images/aakarGraphics/kadaiPartner.jpg'
  import vasantPanchami from '../assets/Images/aakarGraphics/vasantPanchami.jpg'
  import nirmalBike from '../assets/Images/aakarGraphics/nirmalBike.jpg'
  import shivji from '../assets/Images/aakarGraphics/shivji.jpg'
  import arvindKumar from '../assets/Images/aakarGraphics/arvindKumar.jpg'

  import aakarBg from '../assets/Images/otherImages/aakarBg.png'

  const AakarrGraphics = () => {
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

    const services = [
      {
        title: "MEGAVIZ",
        description: "We made our first website from Dubai,UAE.",
        image: megaviz,
      },
      {
        title: "Kadai Panner",
        description: "Designed for Amrit BLU veg family restaurant, sihada road",
        image: kadaiPartner,
      },
      {
        title: "Vasant Panchami",
        description: "Designed for Luxewash in Indore",
        image: vasantPanchami,
      },
      {
        title: "Nirmal bike decore",
        description: "Designed for bike accessories & decore , padawa khandwa",
        image: nirmalBike,
      },
      {
        title: "Marksheet Design",
        description: "Designed for Arvind Kumar Nitin Kumar School , Khandwa ",
        image: arvindKumar,
      },
      {
        title: "Shivlok Entry Gate",
        description: "Entry gate designed for festival pandal",
        image: shivji,
      }
    ];

    return (
      <>
      <section className="flex flex-col text-gray-800 my-20">

        {/*  Hero Section */}
        <section
          style={{ backgroundImage: `url(${bgImage})` }}
          className=" bg-contain bg-center bg-no-repeat  py-20 px-6 text-center relative">

          <div className=" p-6 rounded-xl max-w-3xl mx-auto  ">
            <h2 className="lg:mt-10 mt-5 text-3xl sm:text-4xl lg:text-8xl font-saira font-bold text-gray-600 mb-4" data-aos="zoom-in">
              <span className="text-blue-950">AAKAR</span> WEB & SOFTWARE
            </h2>
            <p className="font-quicksand text-sm sm:text-sm lg:text-lg text-black" data-aos="fade-up">
              Smart websites. Reliable software. Built for your growth.
            </p>
          </div>

        </section>


{/* Overview Section */}
<section className="py-16 px-4 sm:px-10 lg:px-24 bg-gray-100">
  <div className="flex flex-col-reverse md:flex-row items-center gap-10">
    
    {/* Text content */}
    <div className="md:w-1/2 text-center">
      <h3 className="text-3xl lg:text-5xl font-bold text-gray-600 mb-4 font-saira"><span className='text-blue-950'>About</span> Aakar Web <span className='block'>& Software </span> </h3>
      <p  data-aos="fade-out" className="text-gray-700 font-quicksand text-base sm:text-lg leading-relaxed">
          Aakar Web & Software crafts modern websites and custom software that are fast, user-friendly, and built to grow with your business.
      </p>
    </div>

    {/* Image */}
    <div className="md:w-1/2 " data-aos="zoom-out">
      <img
        src={webAbout}
        alt="Web Image"
        className="rounded-xl w-full h-52  md:h-96 object-contain"
      />
    </div>

  </div>
</section>



        {/*  Services Grid */}
        <section className=" px-4 sm:px-10 lg:px-24 space-y-20 lg:space-y-40">

<div data-aos="fade-up" className='mt-10 lg:mt-20 flex justify-center item-center flex-col text-center'>
  <h1 className='font-saira font-bold text-4xl lg:text-6xl  '>See <span className='text-blue-950 '>Our Work</span></h1>
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
                className="w-full md:w-1/2 border border-yellow-300 rounded-xl shadow-lg object-content h-48 md:h-80"
              />

              <div data-aos="zoom-in" className="md:w-1/2 text-center">
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

 <div
  data-aos="zoom-out"
  className="relative border   bg-center bg-cover p-10 rounded-xl text-blue-950 lg:my-28 text-center lg:mx-32 mx-7"
  style={{ backgroundImage: `url(${aakarBg})` }}>

  <p className="font-quicksand font-semibold text-2xl lg:text-4xl lg:leading-tight leading-relaxed">
    "We’ve helped many businesses go digital  and we’re just getting started."
  </p>
</div>


   </>  
    );
  };

  export default AakarrGraphics;
