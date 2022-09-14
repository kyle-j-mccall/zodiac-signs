import React from 'react';
import './Main.css';
import ZodiacCard from './ZodiacCard';
import { zodiac } from '../data';

export default function Main() {
  return (
    <div className='main' >
      {zodiac.map((zod) => (
        <ZodiacCard key={zod.id} name={zod.name} dates={zod.dates}/>
      ))}
      
    </div>
  );
}
