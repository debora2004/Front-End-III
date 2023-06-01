import React from 'react';
import '../App.css';

// eslint-disable-next-line react/prop-types
const Card = ({ nombre, signoZodiacal }) => {
  return (
    <div className="resultado">
      <h2 className="card-title">Resultado</h2>
      <p className="card-text">
        Hola, {nombre}. Este es tu signo zodiacal: {signoZodiacal}
      </p>
    </div>
  );
};

export default Card;
