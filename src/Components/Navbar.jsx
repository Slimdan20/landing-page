import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between text-white border-b border-gray-200 playfair py-5 px-4 sm:px-14 '>
            <h1 className=' font-extrabold text-2xl sm:text-3xl'>RAPXTAR</h1>
            <div className=''>
                <button className='text-md mr-5 cursor-pointer'>Login</button>
                <button className='border cursor-pointer border-gray-200 py-1.5 sm:py-2.5 px-3 sm:px-5'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
