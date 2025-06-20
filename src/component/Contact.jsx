import React from 'react'
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <> 
     <section className=''>
         <div className='ml-20'>
          <h1 className='font-cabin text-4xl md:text-5xl font-medium mt-20 mb-10'> 
            <span className='text-gray-700'>Get in touch </span>
            <span>with us.</span>
            </h1>
         </div>

      <div className='ml-20'>
         <form action="#">
          <div className='flex flex-row gap-20 mb-10'>
            <div>
              <input type="text" placeholder="Your Name" className="border p-3 font-cabin" required/>
            </div>
            <div>
              <input type="text" placeholder="Address" className="border p-3 font-cabin" required/>
            </div>
            <div>
              <input type="text" placeholder="Email" className="border p-3 font-cabin" required/>
            </div>
          </div>

     <div className='flex flex-row gap-20 mb-10'>
            <div>
              <input type="text" placeholder="Phone" className="border p-3 font-cabin" required/>
            </div>
            <div>
              <textarea  placeholder="Message" cols={62} rows={1} className="border p-3 font-cabin" required/>
            </div>
      </div>

<button className='font-quicksand block hover:border border-gray-700 border-b-4 border-r-4  text-black  font-semibold px-4 py-2 rounded-xl border hover:shadow-md  transition-all duration-100 '>  
            Submit
</button>

         </form>
      </div>
     </section>
    </>
  )
}

export default Contact