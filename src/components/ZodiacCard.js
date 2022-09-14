import React from 'react';
import './Card.css';


export default function ZodiacCard(props) {
  return (
    <div className='zodiac-card'>
      <img src={`${process.env.PUBLIC_URL}/zodiac_images/${props.name}.png`}/>
      <h3>{props.name}</h3>
      <p className='dates'>{props.dates}</p>
    </div>
  );
}


