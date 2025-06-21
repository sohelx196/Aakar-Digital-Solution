import React from 'react';
import arrow from '../assets/Images/arrowIcon.png';

function Contact() {
  return (
    <>
    <section className="bg-white py-20 px-6 md:px-12 ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium font-cabin text-center mb-12">
          <span className="text-gray-700">Get in touch </span>
          <span className=''>with us.</span>
        </h1>

        <form action="#" className="space-y-8">
     
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

         
          <div className=" text-center">
            <button
              type="submit"
              className=" group font-quicksand hover:border border-gray-700 border-b-4  text-black  font-semibold px-4 py-2 rounded-xl border transition-all duration-100"
            >
              Submit
              <img src={arrow} alt="arrow" className="w-3 h-3 transition-transform duration-300 group-hover:rotate-45 inline ml-2" />
            </button>
          </div>

        </form>
      </div>
    </section>

    <section>
         
    </section>
    </>

    
  );
}

export default Contact;
