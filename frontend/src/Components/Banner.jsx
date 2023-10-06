import React from 'react'

const Banner = () => {
  return (
    <div className='text-white bg-black'>
        <div className='max-w-[800px] mt-[10px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-green-400 font-bold p-2'>WELCOME</p>
            <h1 className='md:text-7xl sm:text-5xl text-4xl font-bold md:py-62 text-white'>Choose your Templetes</h1>
            <div className='p-2 my-5'>
                <p className='text-green-800 font-bold text-4xl'>Fast , Responsive Designs </p>
                <button className='bg-gray-500 text-white px-5 py-2 my-4 rounded-lg hover:text-black hover:bg-green-400'>Get started</button>
            </div>
        </div>
    </div>
  )
}

export default Banner
