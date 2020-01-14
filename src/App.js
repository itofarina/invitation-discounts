import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        Descontá 44 USD en tu reserva de Airbnb usando una invitación para unirte!
        </p>
        <a
          className="App-link"
          href="https://es.airbnb.com/c/alvarof2345?currency=USD"
          target="_blank"
          rel="noopener noreferrer"
        >
          Invitación
        </a>
      </header>
    </div>
  );
}

export default App;
