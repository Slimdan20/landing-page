import React from 'react'

const Contact = () => {
  return (
    <div className='mx-4 sm:mx-14'>
      <div className='flex justify-between sm:items-center mx-0 lg:mx-40 py-20' >
        <div className=''>
            <img src="/images/image-12.png" alt="" className=' pb-3 h-48 w-72 sm:w-96 sm:h-96' />
        </div>
        <div className='ml-4 w-44 sm:w-96'>
            <h1 className='playfair text-2xl sm:text-4xl font-semibold mb-3 sm:mb-7'>Get in Touch with Us</h1>
            <p className='inter cursor-pointer text-sm sm:text-lg text-justify mb-3 sm:mb-7 leading-5 sm:leading-6'>To be always updated with all our activities, you can follow us  and subscribe on all our social media platforms by visiting our contact page</p>
            <p className='border bg-deeppurple w-40 py-3 sm:w-60 sm:py-5 playfair text-white text-center text-sm'>Visit Our Contact Page</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
