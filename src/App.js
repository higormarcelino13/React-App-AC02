import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PaginaPrincipal from './PaginaPrincipal';
import PaginaDeDestino from './PaginaDeDestino';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<PaginaPrincipal />} />
          <Route path="/outra-pagina" element={<PaginaDeDestino />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
