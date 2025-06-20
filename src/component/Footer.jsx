import React from 'react'
import logo from "../assets/Images/aakarFinalLogo.png";



function Footer() {
  return (
    <>
    <footer className="bg-white text-[#0f0f2d] px-6 md:px-16 py-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-start gap-12">
        {/* Left: Logo + Description */}
        <div className="md:w-1/3">
          <img src={logo} alt="Aakar Logo" className="w-32 mb-4" />
          <p className="text-sm leading-relaxed">
            Crafting smart, creative, and reliable <br />
            digital solutions to grow your business.
          </p>
        </div>

        {/* Right: Navigation Links */}
        <div className="grid grid-cols-3 gap-6 text-sm font-semibold">
          <div className="space-y-2">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">About</p>
          </div>
          <div className="space-y-2">
            <p className="cursor-pointer">Services</p>
            <p className="cursor-pointer">Graphics</p>
          </div>
          <div className="space-y-2">
            <p className="cursor-pointer">Carrer</p>
            <p className="cursor-pointer">Contact</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <p>
          Copyright ©2025. Designed by{" "}
          <span className="font-bold">Aakar Digital Solution</span>
        </p>

        <div className="flex gap-4">
          <img src='' alt="Instagram" className="w-5 h-5 cursor-pointer" />
          <img src='' alt="Facebook" className="w-5 h-5 cursor-pointer" />
          <img src='' alt="WhatsApp" className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer