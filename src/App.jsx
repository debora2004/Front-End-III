import React, { useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (nombre.trim().length < 3 || /^\s/.test(nombre)) {
      setErrorMessage('Por favor, verifica que la información sea correcta.');
      return;
    }
  
    if (!fechaNacimiento) {
      setErrorMessage('Por favor, selecciona una fecha de nacimiento válida.');
      return;
    }
  
    const fechaActual = new Date();
    const fechaIngresada = new Date(fechaNacimiento);
  
    if (
      fechaIngresada.getFullYear() > 2023 ||
      fechaIngresada > fechaActual ||
      fechaIngresada.getMonth() > fechaActual.getMonth()
    ) {
      setErrorMessage('Por favor, ingresa una fecha válida.');
      setShowCard(false);
      return;
    }else{
        setErrorMessage('');
        setShowCard(true);
    }
  };
  

  const calcularSignoZodiacal = () => {
    const mesNacimiento = fechaNacimiento.slice(5, 7);
    let signoZodiacal = '';

    if (mesNacimiento === '01') {
      signoZodiacal = 'Acuario';
    } else if (mesNacimiento === '02') {
      signoZodiacal = 'Piscis';
    } else if (mesNacimiento === '03') {
      signoZodiacal = 'Aries';
    } else if (mesNacimiento === '04') {
      signoZodiacal = 'Tauro';
    } else if (mesNacimiento === '05') {
      signoZodiacal = 'Géminis';
    } else if (mesNacimiento === '06') {
      signoZodiacal = 'Cáncer';
    } else if (mesNacimiento === '07') {
      signoZodiacal = 'Leo';
    } else if (mesNacimiento === '08') {
      signoZodiacal = 'Virgo';
    } else if (mesNacimiento === '09') {
      signoZodiacal = 'Libra';
    } else if (mesNacimiento === '10') {
      signoZodiacal = 'Escorpio';
    } else if (mesNacimiento === '11') {
      signoZodiacal = 'Sagitario';
    } else if (mesNacimiento === '12') {
      signoZodiacal = 'Capricornio';
    }

    return signoZodiacal;
  };

  return (
    <div className="container">
      <h1 className="title">¿No sabes tu signo zodiacal?</h1>
      <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre: </label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fechaNacimiento">Fecha de Nacimiento: </label>
            <input
              type="date"
              id="fechaNacimiento"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      {errorMessage && (
        <div className="error-box">
          <p className="error">{errorMessage}</p>
        </div>
      )}
      {showCard && <Card nombre={nombre} signoZodiacal={calcularSignoZodiacal()} />}
    </div>
  );
}

export default App;
