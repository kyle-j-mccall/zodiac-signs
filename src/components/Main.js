import React from 'react';
import './Main.css';
import ZodiacCard from './ZodiacCard';
import { zodiac } from '../data';
import background from '../fog.jpg';


export default function Main() {
  return (
    <div className='main' style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((zod) => (
        <ZodiacCard key={zod.id} name={zod.name} dates={zod.dates}/>
      ))}
      
    </div>
  );
}
