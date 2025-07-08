import React from 'react'

const Discover = () => {
  return (
    <div className='mx-4 sm:mx-14 py-16 sm:py-24'>
      <h1 className='text-center playfair text-2xl sm:text-4xl font-bold mb-14 sm:mb-20'>Discover the trending Playlists and our talented Artists</h1>
      <div className='flex justify-between my-3'>
        <p className='font-bold'>All Genres</p>
        <p className='text-sm font-extralight cursor-pointer'>Show all</p>
      </div>
      <div className='grid grid-cols-3 gap-1 sm:flex sm:justify-between'>
        <div className='border bg-deeppurple text-white p-2 sm:p-4 rounded-sm'>
            <img src="/images/image-1.png" alt="" className='m-auto'/>
            <h1 className='py-2 font-bold'>Peaceful Piano</h1>
            <p className='font-extralight text-sm text-lightwhite'>Relax and indulge with <br /> beautiful piano pieces</p>
        </div>
                <div className='border bg-deeppurple text-white p-2 sm:p-4 rounded-sm'>
            <img src="/images/image-2.png" alt="" className='m-auto'/>
            <h1 className='py-2 font-bold'>Deep Focus</h1>
            <p className='font-extralight text-sm text-lightwhite'>Keep calm and focus <br /> with ambient and post-rock music.</p>
        </div>
                <div className='border bg-deeppurple text-white p-2 sm:p-4 rounded-sm'>
            <img src="/images/image-3.png" alt="" className='m-auto'/>
            <h1 className='py-2 font-bold'>Instrumental Study</h1>
            <p className='font-extralight text-sm text-lightwhite'>Focus with soft study <br /> music in the background.</p>
        </div>
                <div className='border bg-deeppurple text-white p-2 sm:p-4 rounded-sm'>
            <img src="/images/image-4.png" alt="" className='m-auto'/>
            <h1 className='py-2 font-bold'>Jazz Vibes</h1>
            <p className='font-extralight text-sm text-lightwhite'>The original chill <br /> instrumental beats playlist.</p>
        </div>
                <div className='border bg-deeppurple text-white p-2 sm:p-4 rounded-sm'>
            <img src="/images/image-5.png" alt="" className='m-auto'/>
            <h1 className='py-2 font-bold'>Focus Flow</h1>
            <p className='font-extralight text-sm text-lightwhite'>Uptempo instrumental <br /> hip hop beats.</p>
        </div>
      </div>

      <div className='flex justify-between mt-20 mb-8'>
        <p className='font-bold'>Recently Uploaded</p>
        <p className='text-sm font-extralight cursor-pointer'>Show all</p>
      </div>
      <div className='grid grid-cols-3 gap-1 sm:flex sm:justify-between'>
        <div className='border bg-deeppurple text-white p-2 sm:p-4 rounded-sm'>
            <img src="/images/image-6.png" alt="" className='m-auto'/>
            <h1 className='py-2 font-bold'>Peaceful Piano</h1>
            <p className='font-extralight text-sm text-lightwhite'>Relax and indulge with <br /> beautiful piano pieces</p>
        </div>
                <div className='border bg-deeppurple text-white p-2 sm:p-4 rounded-sm'>
            <img src="/images/image-7.png" alt="" className='m-auto'/>
            <h1 className='py-2 font-bold'>Deep Focus</h1>
            <p className='font-extralight text-sm text-lightwhite'>Keep calm and focus <br /> with ambient and post-rock music.</p>
        </div>
                <div className='border bg-deeppurple text-white p-2 sm:p-4 rounded-sm'>
            <img src="/images/image-8.png" alt="" className='m-auto'/>
            <h1 className='py-2 font-bold'>Instrumental Study</h1>
            <p className='font-extralight text-sm text-lightwhite'>Focus with soft study <br /> music in the background.</p>
        </div>
                <div className='border bg-deeppurple text-white p-2 sm:p-4 rounded-sm'>
            <img src="/images/image-9.png" alt="" className='m-auto'/>
            <h1 className='py-2 font-bold'>Jazz Vibes</h1>
            <p className='font-extralight text-sm text-lightwhite'>The original chill <br /> instrumental beats playlist.</p>
        </div>
                <div className='border bg-deeppurple text-white p-2 sm:p-4 rounded-sm'>
            <img src="/images/image-4.png" alt="" className='m-auto'/>
            <h1 className='py-2 font-bold'>Focus Flow</h1>
            <p className='font-extralight text-sm text-lightwhite'>Uptempo instrumental <br /> hip hop beats.</p>
        </div>
      </div>
    </div>
  )
}

export default Discover
