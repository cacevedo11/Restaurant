 import React from 'react'
import Typewriter from 'typewriter-effect';
import Card from './Card';
import Beef from '../Images/beef.png'
import Cocktail from '../Images/cocktail.png'
import Aguardiente from '../Images/aguardiente.png'
import Aperitivo from '../Images/aperitivo.png'
import Cognac from '../Images/cognac.png'
import Comida from '../Images/comida.png'
import Ensalada from '../Images/ensalada.png'
import Gintonic from '../Images/gin-tonic.png'
import Postres from '../Images/magdalena.png'
import Entradas from '../Images/nuggets.png'
import Compartir from '../Images/reunion.png'
import Ron from '../Images/ron.png'
import Sangria from '../Images/sangria.png'
import Tequila from '../Images/tequila.png'
import Vino from '../Images/vino.png'
import Vodka from '../Images/vodka.png'
import Whisky from '../Images/whisky.png'
import Bebidas from '../Images/bebidas.png'
import { Link } from 'react-router-dom';




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
 
    <div className='items-center justify-center grid grid-cols-2 md:grid-cols-2 gap-12  '>
      <Link to='/menu'>
        <Card img={Comida} text='Fuertes'/>
      </Link>
      <Link to='/menu'>
      <Card img={Beef} text='Carnes'/>
      </Link>
      <Card img={Ensalada} text='Digestivos'/>
      <Card img={Postres} text='Postres'/>
      <Card img={Entradas} text='Entradas'/>
      <Card img={Bebidas} text='Bebidas'/>
      <Card img={Aperitivo} text='Aperitivos'/>
      <Card img={Compartir} text='Para Compartir'/>
      <Card img={Sangria} text='Sangria'/>
      <Card img={Tequila} text='Tequila'/>
      <Card img={Gintonic} text='Gin Tonic'/>
      <Card img={Cocktail} text='Cocktail'/>
      <Card img={Vino} text='Vino'/>
      <Card img={Aguardiente} text='Aguardiente'/>
      <Card img={Cognac} text='Cognac'/>
      <Card img={Ron} text='Ron'/>
      <Card img={Vodka} text='Vodka'/>
      <Card img={Whisky} text='Whisky'/>
    </div>

  </div>
    

  )
}

export default Welcome

