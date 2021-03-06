import React from 'react';
import simbol from '../svgs/simbol-veron.svg';

export default function Navbar() {
  return (
    <nav id="navbar" className="navbar is-fixed is-fixed-top" style={{ background: 'transparent' }}>
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={simbol} alt="Logo" />
        </a>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <a href="#sobre">Sobre nós</a>
            </div>
            <div className="navbar-item">
              <a href="#como-funciona">Como funciona</a>
            </div>
            <div className="navbar-item">
              <a href="#time">Nosso time</a>
            </div>
            <div className="navbar-item">
              <a href="#contato">Contato</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
