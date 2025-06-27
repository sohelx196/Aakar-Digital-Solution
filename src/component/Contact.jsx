

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import arrow from '../assets/Images/arrowIcon.png';
 import locationIcon from '../assets/Images/icons/location.svg';
 import phone from '../assets/Images/icons/telephone.svg';
import website from '../assets/Images/icons/website.svg';
import bgPattern from '../assets/Images/contactDesign.png';
import contactImg from '../assets/Images/contactImg.jpg';



function Contact() {

const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6khgvya', 'template_wqla8ez', form.current, {
        publicKey: 'XYqPNAKVxyILNqOe1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <>
<section className="bg-white py-20 px-6 md:px-12">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Left Side - Image */}
    <div>
      <img
        src={contactImg}
        alt="Contact illustration"
        className="w-full h-auto rounded-xl  "
      />
    </div>

    {/* Right Side - Form */}
    <div>
      <h1 className="font-saira text-4xl md:text-5xl font-bold  text-center md:text-left mb-12">
        <span className="text-gray-700">Get in touch </span>
        <span className='text-blue-950'>with us.</span>
      </h1>

      <form ref={form} onSubmit={sendEmail} action="#" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <input
            name='name'
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-4 rounded-md font-cabin focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />

          <input
            name='address'
            type="text"
            placeholder="Address"
            className="border border-gray-300 p-4 rounded-md font-cabin focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
          <input
            name='email'
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-4 rounded-md font-cabin focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        <input
          name="phone"
          type="text"
          placeholder="Phone"
          className="w-full border border-gray-300 p-4 rounded-md font-cabin focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          className="w-full border border-gray-300 p-4 rounded-md font-cabin resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
        />

        <div className="text-center md:text-left">
          <button
            type="submit"
            className="group font-quicksand hover:border border-gray-700 border-b-4 text-black font-semibold px-4 py-2 rounded-xl border transition-all duration-100"
          >
            Submit
            <img
              src={arrow}
              alt="arrow"
              className="w-3 h-3 transition-transform duration-300 group-hover:rotate-45 inline ml-2"
            />
          </button>
        </div>
      </form>
    </div>
  </div>
</section>


 <section
      className="bg-cover bg-center py-10 px-4 "  
      style={{ backgroundImage: `url(${bgPattern})` }}>

      <div className="max-w-4xl mx-auto text-center">
        <p className="font-cabin text-gray-700 text-base font-medium mb-2">Our Contact Detail</p>
        <h2 className="font-saira text-3xl md:text-5xl font-bold mb-12 text-blue-950">Have a <span className='text-gray-700'>Question?</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="flex flex-col items-center ">
            <img src={locationIcon} alt="Location" className="w-8 h-8 mb-3 sm:mb-3 lg:mb-4" />
            <p className="font-quicksand font-semibold ">Aakar Graphics</p>
            <p className="font-quicksand font-semibold">Padawa, Khandwa</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center space-y-2">
            <img src={phone} alt="Phone" className="w-7 h-7 mb-1 sm:mb-2 lg:mb-4" />
            <p className="font-semibold font-quicksand">9009239011</p>
          </div>

          {/* Website */}
          <div className="flex flex-col items-center space-y-2">
            <img src={website} alt="Website" className="w-7 h-7 mb-1 sm:mb-2 lg:mb-4" />
            <p className="font-semibold font-quicksand ">aakargraphics.com</p>
          </div>
        </div>
      </div>
    </section>


    </>

    
  );
}

export default Contact;
