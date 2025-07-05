import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import arrow from '../assets/Images/arrowIcon.png';
import locationIcon from '../assets/Images/icons/location.svg';
import phone from '../assets/Images/icons/telephone.svg';
import emailIcon from '../assets/Images/icons/emailIcon.svg';
import bgPattern from '../assets/Images/contactDesign.png';
import contactImg from '../assets/Images/contactImg.jpg';

function Contact() {
  const form = useRef();

  // ✅ New state to track message and button visibility
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const serviceId = "service_6khgvya";
  const tempId = "template_wqla8ez";
  const publicKey = "XYqPNAKVxyILNqOe1";

  emailjs.sendForm(serviceId, tempId, form.current, { publicKey })
    .then(() => {
      console.log('Form submitted successfully!');
      form.current.reset();
      setShowMessage(true);
      setIsSubmitting(false);
      setTimeout(() => setShowMessage(false), 3000);
    })
    .catch((error) => {
      console.log('Submission failed:', error.text);
      setIsSubmitting(false);
    });
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
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Right Side - Form */}
          <div>
            <h1 className="font-saira text-4xl md:text-5xl font-bold text-center md:text-left mb-12">
              <span className="text-gray-700">Get in touch </span>
              <span className='text-blue-950'>with us.</span>
            </h1>

            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <input name='name' type="text" placeholder="Your Name" required className="border border-gray-300 p-4 rounded-md font-cabin" />
                <input name='address' type="text" placeholder="Address" required className="border border-gray-300 p-4 rounded-md font-cabin" />
                <input name='email' type="email" placeholder="Email" required className="border border-gray-300 p-4 rounded-md font-cabin" />
              </div>

              <input name="phone" type="text" placeholder="Phone" required className="w-full border border-gray-300 p-4 rounded-md font-cabin" />
              <textarea name="message" placeholder="Message" rows="4" required className="w-full border border-gray-300 p-4 rounded-md font-cabin resize-none" />

              <div className="text-center md:text-left">
                {!showMessage && (

 <button
  type="submit"
  disabled={isSubmitting}
  className={`group font-quicksand font-semibold px-4 py-2 rounded-xl border transition-all duration-200 hover:bg-slate-200 ${
    isSubmitting
      ? 'bg-slate-200 text-black cursor-not-allowed border border-black'
      : 'text-black border-gray-700  border-b-4  '
  }`}
>

{isSubmitting ? 'Sending...' : 'Submit'}
<img
  src={arrow}
  alt="arrow"
  className={`w-3 h-3 transition-transform inline ml-2 ${
    isSubmitting ? 'rotate-45' : 'group-hover:rotate-45'
  }`}
/>

</button>
                )}

                {showMessage && (
                  <p className="text-center text-gray-600 font-semibold font-saira">Thank you! Your message has been sent to Aakar!</p>
                )}

              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Detail Section */}
      <section className="bg-cover bg-center py-10 px-4" style={{ backgroundImage: `url(${bgPattern})` }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-cabin text-gray-700 text-base font-medium mb-2">Our Contact Detail</p>
          <h2 className="font-saira text-3xl md:text-5xl font-bold mb-12 text-blue-950">Have a <span className='text-gray-700'>Question?</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center ">
              <img src={locationIcon} alt="Location" className="w-8 h-8 mb-3" />
              <p className="font-quicksand font-semibold ">Aakar Graphics</p>
              <p className="font-quicksand font-semibold">Padawa, Khandwa</p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <img src={phone} alt="Phone" className="w-7 h-7 mb-1" />
              <p className="font-semibold font-quicksand">9977303707 <span className='block'>8839662908</span> </p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <img src={emailIcon} alt="Website" className="w-7 h-7 mb-1" />
              <p className="font-semibold font-quicksand">aakarkhandwa21@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
