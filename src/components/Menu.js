import React from 'react'
import Plato from './Plato'

function Menu() {
  return (
    <section>
    <div className='mt-28 grid grid-cols-1 gap-4 mx-4 md:grid-cols-3'>
    <div className='md:col-start-1 md:col-end-4'>
      <h2 className='p-2 text-[25px] bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-md '><strong>PLATOS FUERTES</strong></h2>
    </div>
      <Plato title="Arroz cremoso" text="Cremoso arroz a las brasas con el fresco placer del mar y sus sabores en un mix de mariscos entre calamar, gambas, mejillones y camarones." price="$20.000"/>

      <Plato title="Salmon al rayo" text="Al carbón sobre un cremoso risotto de quinoa con un toque fresco de yerba buena y cilantro, duraznos en almíbar, vegetales a la parrilla y crocante de plátano." price="$49.000"/>

      <Plato title="Pesca Tarascha" text="Traída a nuestro restaurante por manos expertas, la pezca fresca del día es cocida artesanalmente en hoja de vijao al carbón y aderezada con nuestro chimichurri de la casa en una experiencia crocante para jugar entre sabores y texturas en tu paladar." price="$42.000"/>

      <Plato title="Lomo saltado" text="Trozos de lomo acompañados de tomate y cebolla roja junto a crocantes hebras de papa y arroz frito" price="$45.000"/>

      <Plato title="Arroz cremoso" text="Cremoso arroz a las brasas con el fresco placer del mar y sus sabores en un mix de mariscos entre calamar, gambas, mejillones y camarones." price="$20.000"/>

      <Plato title="Arroz cremoso" text="Cremoso arroz a las brasas con el fresco placer del mar y sus sabores en un mix de mariscos entre calamar, gambas, mejillones y camarones." price="$20.000"/>

      <Plato title="Arroz cremoso" text="Cremoso arroz a las brasas con el fresco placer del mar y sus sabores en un mix de mariscos entre calamar, gambas, mejillones y camarones." price="$20.000"/>
    </div>

    <div className='mt-10 grid grid-cols-1 gap-4 mx-4 md:grid-cols-3'>
    <div className='md:col-start-1 md:col-end-4'>
      <h2 id='carnes' className='p-2 text-[25px] bg-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-md '><strong>CARNES</strong></h2>
    </div>
      <Plato title="Corte Nacional" text="Lomo 250g" price="$58.000"/>

      <Plato title="Corte Nacional" text="Lomo 500g" price="$110.000"/>

      <Plato title="New York Steak 300g" text="New York Steak 300g" price="$98.000"/>

      <Plato title="Rib Eye" text="Rib Eye 300g" price="$120.000"/>

      <Plato title="Entrañas Angus prime" text="Entrañas angus prime 300g" price="$130.000"/>
    </div>
    </section>
    
  )
}

export default Menu