import React from "react";

import bgImg from '../assets/Images/digitalProduct/bgImg.png'
import digitalProductImg from '../assets/Images/digitalProduct/digitalProductImg.png'

function AakarDigitalProduct() {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${bgImg})` }}
        className="bg-cover bg-center bg-no-repeat py-32 px-6 text-center relative" >

        <div className=" p-6 rounded-xl max-w-3xl mx-auto backdrop-blur-md shadow-lg mt-10">
          <h2
            className="text-5xl sm:text-5xl lg:text-8xl font-saira font-bold text-white mb-4"
            data-aos="zoom-in"
          >
            <span className="text-white">AAKAR</span> DIGITAL PRODUCT
          </h2>
          <p
            className="font-quicksand text-base sm:text-base lg:text-lg text-white"
            data-aos="fade-up" >

            Turning ideas into powerful digital experiences.
          </p>
        </div>
      </section>


           {/* Overview Section */}
              <section className="py-16 px-4 sm:px-10 lg:px-24 bg-gray-100">
                <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                  
                  {/* Text content */}
                  <div className="md:w-1/2 text-center">
                    <h3 className="text-3xl lg:text-5xl font-bold text-gray-600 mb-4 font-saira"><span className='text-blue-950'>About</span> Aakar Digital Product </h3>
                    <p  data-aos="fade-out" className="text-gray-700 font-quicksand text-base sm:text-lg leading-relaxed">
                     Aakar Digital Product delivers creative and functional digital solutions designed to elevate your brand with smart design and reliable performance.
                    </p>
                  </div>
              
                  {/* Image */}
                  <div className="md:w-1/2 " data-aos="zoom-out">
                    <img
                      src={digitalProductImg} 
                      alt="Aakar Overview"
                      className="rounded-xl w-full md:h-80 h-48 object-contain"
                    />
                  </div>
              
                </div>
              </section>

    </>
  );
}

export default AakarDigitalProduct;
