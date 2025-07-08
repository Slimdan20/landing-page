import React from 'react'

const Homepage = () => {
    return (
        <div>
            <div className='mx-4 sm:mx-14 leading-11'>
                <h1 className='playfair text-white mt-28 text-4xl leading-10 sm:text-7xl sm:leading-20'>We are all about <br />The Music</h1>
                 <p className='mt-3 inter text-white font-extralight text-xl '>Stream and download the music of your favourite Rap Artists.</p>
                 <div className='mt-6 sm:mt-10'>
                    <button className='playfair w-32 sm:w-56 border border-white bg-white'>Discover Music</button>
                    <button className=' playfair w-32 sm:w-56 text-white border border-white ml-5'> Explore Artists</button>
                 </div>
            </div>
        </div>
    )
}

export default Homepage
