import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function PaginaDeDestino() {
    return (
      <div className="page-container">
        <div className="link-container">
        </div>
        <h1 className="page-title">Página de Destino</h1>
        <Link to="/">
            <button className="button">Voltar para página principal</button>
          </Link>
      </div>
    );
  }


export default PaginaDeDestino;
