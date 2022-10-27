import React from 'react'


function Card({img, text}) {
  return (
    <div className='flex flex-col items-center m-auto w-2/4 rounded-lg lg:w-[60%] '>
          <img className='rounded-lg' src={img} alt=''/>
            <h3 className='my-[0] text-white font-poppins text-2xl font-normal'>{text}</h3>
    </div>
  )
}

export default Card
