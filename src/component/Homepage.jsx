import React from 'react'
import bgVideo from '../assets/video/bgVideo.mp4';

function Homepage() {
  return (
    <>
 <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-start  justify-center h-full px-6 md:px-20 bg-black/30">
        <h1 className="font-cabin text-4xl md:text-6xl font-bold text-lime-200 leading-tight ">
          Aakar <span className='block'> Digital</span><span className='block'> Solution</span>
        </h1>
        <p className="text-lime-100 mt-4 text-lg">The Exclusive Printing Shoppe</p>
        <button className="mt-6 px-6 py-3 bg-gray-700 text-white rounded-md  transition font-semibold text-sm tracking-wide">
         Contact Us
  
        </button>
      </div>

      {/* Optional: Overlay for dimming */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[5]" />
    </section>
    </>
  )
}

export default Homepage