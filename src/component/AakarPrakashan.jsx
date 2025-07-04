import React from 'react'
import book from '../assets/Images/otherImages/bgGraphics.jpg'


function AakarPrakashan() {
  return (
    <>
             <section
                  style={{ backgroundImage: `url(${book})` }}
                  className="bg-cover bg-center bg-no-repeat py-20 px-6 text-center relative">
        
                  <div className=" p-6 rounded-xl max-w-3xl mx-auto backdrop-blur-md shadow-lg mt-10">
                    <h2 className="text-5xl sm:text-5xl lg:text-8xl font-saira font-bold text-white mb-4" data-aos="zoom-in">
                      <span className="text-white">AAKAR</span> PRAKASHAN
                    </h2>
                    <p className="font-quicksand text-base sm:text-base lg:text-lg text-slate-200" data-aos="fade-up">
                     Empowering minds through knowledge and meaningful publications.
                    </p>
                  </div>
        
                </section>
        
    </>
  )
}

export default AakarPrakashan