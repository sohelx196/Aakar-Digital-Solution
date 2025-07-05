import React from 'react';
import logo from '../assets/Images/aakarFinalLogo.png';
import instagram from '../assets/Images/icons/instagram.svg';
import facebook from '../assets/Images/icons/facebook.svg'; 
import whatsapp from '../assets/Images/icons/whatsapp.svg';


function Footer() {
  return (
    <footer className=" text-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
   
        <div className="flex-1">
          <img src={logo} alt="Aakar Logo" className="w-36 mb-2 brightness-110 contrast-125" />
          <p className="ml-3 font-quicksand font-bold text-sm text-gray-700 leading-loose max-w-xs">
            Crafting smart, creative, and reliable digital solutions to grow your business.
          </p>
        </div>

        
        <div className="font-cabin text-black grid grid-cols-2 sm:grid-cols-3 gap-14 text-sm w-full lg:w-auto">
          <div className='text-center'>
            <h4 className="mb-3 font-medium text-gray-500 font-cabin text-base">Company</h4>
            <ul className=" space-y-4 mt-4">
              <li className="hover:text-gray-400  cursor-pointer text-base  font-cabin ">Home</li>
              <li className="hover:text-gray-400  cursor-pointer text-base  font-cabin ">About</li>
            </ul>
          </div>
          <div className='text-center'>
            <h4 className="mb-3 font-medium text-gray-500 font-cabin text-base">Services</h4>
            <ul className="space-y-4 mt-4">
              <li className="hover:text-gray-400 cursor-pointer text-base  font-cabin">Graphics</li>
              <li className="hover:text-gray-400 cursor-pointer text-base  font-cabin">Services</li>
            </ul>
          </div>
          <div className='text-center'>
            <h4 className="mb-3 font-medium text-gray-500 font-cabin text-base">Support</h4>
            <ul className="space-y-4 mt-4">
              {/* <li className="hover:text-gray-400 cursor-pointer text-base">Career</li> */}
              <li className="hover:text-gray-400 cursor-pointer text-base  font-cabin">Contact</li>
            </ul>
          </div>
        </div>
      </div>

     
      <div className="text-black mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs    gap-4">
        <p className="font-quicksand text-center">
          © 2025 <span className=" font-semibold">Aakar Digital Solution</span>. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#">
            <img src={instagram} alt="Instagram" className=" w-5 h-5 cursor-pointer hover:opacity-70 transition" />
          </a>

          <a href="#">
          <img src={facebook} alt="Facebook" className=" w-5 h-5 cursor-pointer hover:opacity-70 transition" />
          </a>


          <a href="https://wa.me/919131440488?text=Hello%20Aakar%2C%20what%20services%20do%20you%20offer%3F"
          target="_blank"
          rel="noopener noreferrer">
          <img src={whatsapp} alt="WhatsApp" className=" w-5 h-5 cursor-pointer hover:opacity-70 transition" />
          </a>


        </div>
      </div>

    </footer>
  );
}

export default Footer;
