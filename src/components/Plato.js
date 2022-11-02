import React from 'react'

function Plato({title, text, price,}) {
  return (
    <div className='md:hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>
        <div className='rounded-md bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>
            <h2 className='p-2 text-[20px] px-4'><strong>{title}</strong></h2>
            <hr/>
        <div className='grid grid-cols-[2fr,_1fr] '>
        <div className='p-2 m-2 rounded-md text-[14px] min-h-[100px] md:min-h-[200px]'>
          <p>   
          {text}
          </p>
        </div>

        <div className='flex flex-col justify-evenly items-center space-y-0 '>
          <span className='rounded-full bg-white drop-shadow-md shadow-black px-5 py-1'><strong>{price}</strong></span>
          <div className='rounded-full bg-white drop-shadow-md shadow-black px-1'>
            <button className='px-3 bg-white-500 hover:rounded-full active:rounded-full hover:bg-white-600 active:bg-gray-300 focus:outline-none focus:ring focus:ring-violet-300'>-</button>
            <span className='px-1'> 0 </span>
            <button className='px-3 bg-white-500 hover:rounded-full active:rounded-full hover:bg-white-600 active:bg-gray-300 focus:outline-none focus:ring focus:ring-violet-300'>+</button>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Plato