import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function PaginaPrincipal() {
  return (
    <div className="container">
      <h1>Página Principal</h1>
      <Link to="/outra-pagina">
        <button className="button">Navegar para outra página</button>
      </Link>
    </div>
  );
}

export default PaginaPrincipal;
