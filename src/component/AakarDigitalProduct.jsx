import React from "react";

import bgImg from '../assets/Images/digitalProduct/bgImg.png'

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
            className="font-quicksand text-base sm:text-base lg:text-lg text-slate-200"
            data-aos="fade-up" >

            Turning ideas into powerful digital experiences.
          </p>
        </div>
      </section>




    </>
  );
}

export default AakarDigitalProduct;
