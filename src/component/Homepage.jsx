import AOS from 'aos';
import 'aos/dist/aos.css';

import  { useState , useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

import poster from '../assets/Images/poster.jpg'
import businessCard from '../assets/Images/businessCard.jpg'
import report from '../assets/Images/report.jpg'
import banner from '../assets/Images/banner.jpg'


function Homepage() {

  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true      
  });
}, []);

const products = [
  { title: 'BUSINESS CARDS', img: businessCard },
  { title: 'FLYERS', img: productImg2 },
  { title: 'BANNER', img: banner },
  { title: 'SOCIAL MEDIA', img: productImg1 },
  { title: 'POSTERS', img: poster },
  { title: 'Report Card', img: report },
];

const testimonials = [
  {
    name: "Sacha Dubois",
    title: "Social media influencer",
    image: "https://i.pravatar.cc/100?img=1", 
    text:   " lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  },
  {
    name: "Itsuki Takahashi",
    title: "Founder, KNJ Label",
    image: "https://i.pravatar.cc/100?img=2",
    text: " lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  },
  {
    name: "Vanna Trinh",
    title: "President, The Plew",
    image: "https://i.pravatar.cc/100?img=3",
    text: " lorem20 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
  }
];

 const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const handleNext = () => setIndex((index + 1) % total);
  const handlePrev = () => setIndex((index - 1 + total) % total);

  const { name, title, image, text } = testimonials[index];




  // Faq's
  const faqs = [
  {
    question: "What services does Aakar Digital Solution offer?",
    answer:
      "We specialize in graphic design, digital marketing, publication, web development, and custom software solutions — all designed to elevate your brand.",
  },
  {
    question: "Can I get a custom design tailored to my brand?",
    answer:
      "Absolutely! We work closely with clients to create unique, brand-specific designs for logos, posters, social media, and more.",
  },
  {
    question: "Do you build websites for small businesses?",
    answer:
      "Yes, we offer affordable and professional website design and development tailored for startups and growing businesses.",
  },
  {
    question: "What’s the process to get started with a project?",
    answer:
      "Just contact us with your requirements. We’ll schedule a consultation, understand your needs, and provide a clear quote and timeline.",
  },
  {
    question: "Do you offer social media marketing services?",
    answer:
      "Yes! We provide strategic social media content, design, and marketing campaigns to help you grow your online presence.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Timelines vary by project scope, but most design work is completed in 3–7 days. Websites and software solutions may take 2–4 weeks.",
  },
];

 const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Close if same index clicked
    } else {
      setActiveIndex(index); // Open new, close previous
    }
  };
// faq end

const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollPos = 0;
    const interval = setInterval(() => {
      if (!container) return;
      const cardWidth = container.firstChild?.offsetWidth || 300;
      scrollPos += cardWidth;
      if (scrollPos >= container.scrollWidth) scrollPos = 0;
      container.scrollTo({ left: scrollPos, behavior: "smooth" });
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
<section className="pt-28  lg:pt-32  lg:min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-br from-[#2d4048] to-[#132a45] text-white py-12 overflow-x-hidden">
  
  {/* Left Content */}
  <div className="w-full md:w-1/2 text-center md:text-left space-y-6 mt-8 md:mt-0">
    <h1 className="font-saira text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
      AAKAR <span className=''>DIGITAL</span> <span>SOLUTION</span>
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
      className="w-[240px] sm:w-[300px] md:w-[500px] lg:w-[600px] rounded-xl
       scale-95 transition duration-700 hover:scale-100"
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
<section className="bg-[#f9fafb]  flex items-center justify-center px-6 py-16 m-5 rounded-3xl">
  <div className="text-center font-saira space-y-4" >

    <h1
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-600 font-bold leading-tight">
      <span data-aos="fade-left"  >THE </span><span data-aos="fade-right" className="text-blue-950 ">SERVICES</span>
      <span  data-aos="fade-left" className="block"><span>WE</span> OFFER</span>
    </h1>

    <p
      className="text-gray-800 text-sm sm:text-base md:text-lg max-w-xl mx-auto"
      data-aos="fade-right">
      Empowering Your Brand Through Design, Publishing & Digital Innovation
    </p>

    <div className="w-20 h-1 bg-gray-600 mx-auto my-6 rounded-full"></div>
  </div>
</section>


{/* graphic design service start */}
    <section className=" text-black px-6 py-16 md:py-24 lg:h-screen ">
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
            GRAPHIC <span className='block text-blue-950'>DESIGN</span>
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

<section className="relative text-black px-6 py-16 md:py-24 lg:h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
    
    {/* Left Content */}
    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left" data-aos="fade-right">
      <h2 className="text-gray-600 font-saira text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight">
        WEB <span className="block text-blue-950">DESIGN</span>
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

   <section className="bg-white text-black px-6 py-16 md:py-24 lg:h-screen flex items-center">
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
            SOFTWARE <span className="block text-blue-950">SOLUTION</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-quicksand text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
          At Aakar Digital Solutions, we craft smart, scalable software that simplifies your workflow and drives business growth. From web apps to enterprise tools, our solutions blend innovation, usability, and performance to deliver real results.
          </p>
        </div>
      </div>
    </section>

{/* software solution end */}


{/* Mobile app dev start */}
<section className="bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] text-white px-6 py-16 md:py-24 lg:h-screen flex items-center">
  <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
    
    {/* Left Content */}
    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left" data-aos="fade-right">
      <h2 className="text-gray-600 font-saira text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight">
        MOBILE &nbsp;APP <span className="block text-blue-950">DEVELOPMENT</span>
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

   <section className="bg-white text-black px-6 py-16 md:py-24 lg:h-screen flex items-center">
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
            DIGITAL <span className="block text-blue-950">MARKETING</span>
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
    
 <section className="bg-[#1e1145] py-16 px-4 sm:px-10 lg:px-20">
  {/* Heading without underline */}
  <h2 className="text-center text-white font-saira font-extrabold text-4xl sm:text-5xl md:text-6xl">
    OUR PRODUCTS
  </h2>

  {/* Auto-scrollable card container */}
  <div
    ref={scrollRef}
    className="mt-16 flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
    style={{ scrollBehavior: "smooth" }}
  >
    {products.map((product, index) => (
      <div
        key={index}
        className="min-w-full snap-center flex justify-center px-4"
      >
        {/* Card */}
        <div className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-300 group hover:shadow-purple-500">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-[400px] "
          />

          <div className="p-8">
            <h3 className="text-center text-3xl font-bold text-[#1e1145] mb-4 font-quicksand">
              {product.title}
            </h3>
            <div className="flex justify-center">
              <Link to="/aakarDigitalProduct">
                <button className="px-6 py-3 text-lg rounded-lg bg-[#1e1145] text-white hover:bg-white hover:text-[#1e1145] border border-[#1e1145] transition-all duration-200 font-semibold">
                  View More
                </button>
              </Link>
            </div>

          </div>
          
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
            <div data-aos="fade-left" className="bg-white border  shadow-xl rounded-2xl p-10 text-gray-600 mt-5 lg:absolute lg:left-[-110px] lg:w-[550px] z-20">

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
    <section className="w-full lg:min-h-screen flex items-center justify-center px-6 py-10  relative">
      <div className="max-w-3xl w-full mx-auto bg-white rounded-3xl border border-gray-600 shadow-2xl p-10 md:p-16 transition-all duration-500 ease-in-out">
        <h2 className="font-saira text-4xl sm:text-5xl font-bold text-center text-gray-600 mb-10">
          “ WHAT OUR CLIENTS SAY ”
        </h2>

        <p className="font-cabin text-gray-600 text-lg leading-relaxed text-center mb-10"> {`"${text}"`}</p>

        <div className="flex items-center justify-center space-x-4">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded-full object-cover shadow-md"
          />

          <div className="text-left">
            <h4 className="font-cabin text-2xl font-semibold text-gray-600">{name}</h4>
            <p className="font-quicksand text-sm italic text-gray-600">{title}</p>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        className="absolute left-4 lg:left-10 top-1/2 transform -translate-y-1/2 sm:bg-transparent lg:bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
        onClick={handlePrev}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 lg:right-10 top-1/2 transform -translate-y-1/2 sm:bg-transparent lg:bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
        onClick={handleNext}
      >
        <ChevronRight size={24} />
      </button>
    </section>
{/* what our client say end */}


{/* FAQ START */}

 <section className="py-16 px-4 sm:px-6 lg:px-24 bg-white ">
      <div className=" text-center mb-12">
        <p className="font-cabin text-xs lg:text-base text-gray-600  font-semibold uppercase mb-2">
          Frequently Asked Questions
        </p>
        <h2 className="text-blue-950 font-saira text-4xl lg:text-6xl font-bold">
          Your Questions, <span className=" text-gray-600">Answered!</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl  z-20 ">
        {faqs.map((faq, index) => (
          <div  
            key={index}
            className={`rounded-xl p-6 shadow-md transition border ${
              activeIndex === index
                ? " border-gray-600 bg-gray-50" 
                : "bg-white border"
            }`}
          >
            
            <div className="flex justify-between items-center ">
              <p
                className={`font-cabin text-base lg:text-base font-medium ${
                  activeIndex === index ? " text-blue-950" : "text-blue-950"
                }`}
              >
                {faq.question}
              </p>
              <button
                onClick={() => handleToggle(index)}
                className="text-xl lg:text-2xl font-extrabold text-gray-600"
              >
                {activeIndex === index ? "-" : "+"}
              </button>
            </div>

            {/* Only render answer if active */}
            {activeIndex === index && (
              <p className="font-cabin mt-4 text-sm text-gray-700">{faq.answer}</p>
            )}

          </div>
        ))}
      </div>
 </section>

{/* FAQ END */}



    </>
  );
}

export default Homepage