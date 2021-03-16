/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useEffect } from 'react';
import simbol from '../svgs/simbol-veron.svg';
import send from '../svgs/icon-send.svg';

export default function Navbar({ setModal = (b:boolean) => {} }) {
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > window.innerHeight) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
    return () => window.removeEventListener('scroll', () => {});
  }, []);
  return (
    <nav id="navbar" className="navbar is-fixed-top" style={{ opacity: active ? 1 : 0, background: 'transparent' }}>
      <div className="container">
        <div className="columns" style={{ width: '100%' }}>
          <div className="column">
            <a href="#home" className="navbar-brand">
              <img src={simbol} alt="Logo" />
            </a>
          </div>
          <div className="column" />
          <div className="column is-3 is-hidden-mobile">
            <button type="button" onClick={() => setModal(true)} className="button is-dark is-fullwidth is-spaced is-uppercase">
              <img className="icon is-16x16" src={send} alt="" style={{ marginRight: 15 }} />
              <span>
                Vamos conversar?
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
