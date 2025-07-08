import React from 'react'

const Footer = () => {
  return (
    <div className='bg-deeppurple'>
      <div className='mx-4 sm:mx-14 py-14 sm:py-20 flex justify-between sm:justify-between'>
        <div className='text-white basis-1/3'>
            <h1 className='playfair text-xl sm:text-2xl font-bold mb-3 sm:mb-7'>RAPXTAR</h1>
            <img src="/images/image-10.png" alt="" className='mb-3 w-24 h-8 sm:w-40 sm:h-12' />
            <img src="/images/image-11.png" alt="" className='mb-7 sm:mb-10 w-24 h-8 sm:w-40 sm:h-12' />
            <p className='font-poppins'>Follow us</p>
            <div className='flex mt-2 sm:pt-4'>
              <img src="/images/instagram.png" alt="" className='w-5 h-5' />
              <img src="/images/twitter.png" alt="" className='w-5 h-5 ml-1.5 sm:ml-3'/>
              <img src="/images/facebook.png" alt="" className='w-5 h-5 ml-1.5 sm:ml-3'/>
              <img src="/images/youtube.png" alt="" className='w-5 h-5 ml-1.5 sm:ml-3'/>
            </div>
        </div>
        <div className='text-white basis-1/3' >
            <h1 className='font-semibold pb-3 sm:pb-4 text-lg'>Help</h1>
            <p className='uppercase pb-2 sm:pb-4 font-thin text-sm'>Faq</p>
            <p className='pb-2 sm:pb-4 text-sm'>Privacy Policy</p>
            <p className='pb-2 sm:pb-4 text-sm'>Streaming Platforms</p>
            <p className='pb-2 sm:pb-4 text-sm'>Competitions</p>
            <p className='pb-2 sm:pb-4 texxt-sm'>Promotions</p>
            <p className='text-sm'>Terms and Conditions</p>
        </div>
        <div className='text-white basis-1/3'>
          <h1 className='font-bold text-lg mb-3 sm:mb-4'>Stay up to date</h1>
          <p className='mb-3 sm:mb-4 text-sm leading-6'>Stay Informed On How You Can Make a Difference</p>
          <input type="email" placeholder='Your email address' className='bg-white text-sm px-2 sm:px-4 text-black border-transparent h-10 w-36 sm:w-64'/>
        </div>
      </div>
      <p className='text-white text-center text-sm italic pb-12 sm:pb-20 '>© 2025 Copyright GospelXtar, All rights reserved.</p>
    </div>
  )
}

export default Footer
