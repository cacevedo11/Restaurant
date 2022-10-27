 import React from 'react'
import Typewriter from 'typewriter-effect';
import Restaurant from '../Images/restaurant.jpg'
import Bar from '../Images/bar.jpg'


function Welcome() {
  return (
  <div className='bg-slate-800 min-h-screen flex flex-col  gap-6 pt-[20%]  lg:pt-[5%]'>

      <div className=' h-40 text-3xl font-semibold p-10 text-center text-white font-poppins lg:text-5xl md:text-4xl sm:text-4xl'>
      <Typewriter
      onInit={(typewriter)=>{
        typewriter.typeString('Bienvenido, ¿Que Deseas Ordenar Hoy?')
        .pauseFor(2000)
        .start();
      }}
      />
      </div>
 
    <div className='items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-12  '>

        <div className='flex flex-col items-center m-auto w-2/4 rounded-lg lg:w-[60%] '>
          <img className='rounded-lg' src={Restaurant} alt=''/>
            <h3 className='my-[0] text-white font-poppins text-2xl font-normal'>Restaurante</h3>
        </div>

        <div className='flex flex-col items-center m-auto w-2/4 rounded-lg lg:w-[60%]' >
          <img className='rounded-lg' src={Bar} alt=''/>
          <h3 className='my-[0] text-white font-poppins text-2xl  font-normal z-10'>Bar</h3>
        </div>
    </div>

  </div>
    
  )
}

export default Welcome

