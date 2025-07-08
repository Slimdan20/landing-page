import React from 'react'
import Image from 'next/image'

const Interact = () => {
  return (
    <div className='bg-gray-200'>
      <div className='mx-4 sm:mx-14 py-16 sm:py-24'>
        <div className='flex justify-between sm:items-center mx-0  lg:mx-40'>
          <div className=' sm:basis-2/5'>
            <h1 className='uppercase playfair mb-5 text-2xl sm:text-5xl font-extrabold'>Interact</h1>
            <p className='inter w-36 sm:w-11/12 text-justify'>Be a part of the GospelXtar community where artists and listeners interact. Receive feedback and add your own take on other artists' tracks.</p>
          </div>
          <div className='mb-10 relative w-44 h-60 sm:w-72 sm:h-80'>
            <img src="/images/rectangle-1.png" alt="" className='absolute w-40 sm:w-64' />
            <img src="/images/rectangle-2.png" alt="" className='absolute w-40 sm:w-64 left-1.5 top-2 sm:left-5 sm:top-6' />
            <img src="/images/rectangle-3.png" alt="" className='absolute w-44 sm:w-80 left-2.5 top-6 sm:left-7 sm:top-9' />

          </div>
        </div>

        <div className='flex justify-between sm:items-center mt-16 sm:mt-24 lg:mx-40'>

          <div className='mb-0 sm:mb-10 relative w-44 h-60 sm:w-72 sm:h-80'>
            <img src="/images/rectangle-1.png" alt="" className='absolute w-40 sm:w-64' />
            <img src="/images/rectangle-2.png" alt="" className='absolute w-40 sm:w-64 left-1.5 top-2 sm:left-5 sm:top-6' />
            <img src="/images/rectangle-4.png" alt="" className='absolute w-44 sm:w-80 left-2.5 top-6 sm:left-7 sm:top-9' />

          </div>

          <div className=' sm:basis-2/5'>
            <h1 className='uppercase playfair mb-5 text-2xl sm:text-5xl font-extrabold'>ENGAGE</h1>
            <p className='w-36 sm:w-11/12 inter text-justify'>Share your music effectively, create a genuine fan base, and generate alternate streams of revenue in the process.</p>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Interact
