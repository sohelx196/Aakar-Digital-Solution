import React from 'react'
import aakarHero from '../assets/Images/aakarHeroImg.png'

function Homepage() {
  return (
    <>
      <section className=' h-full w-full text-center item-center justify-center flex flex-col'>
        <h1 className='text-4xl md:text-5xl font-medium mt-20 mb-10 text-center font-quicksand'>Homepage</h1>
        <img src={aakarHero} alt="aakar hero img" className='w-max h-40' />
      </section>
    </>
  )
}

export default Homepage