import React from 'react';

import logoVeron from '../svgs/logo-veron.svg';
import facebook from '../svgs/facebook.svg';
import twitter from '../svgs/twitter.svg';
import instagram from '../svgs/instagram.svg';

export default function Home() {
  return (
    <>
      <div id="contact" className="hero is-medium is-white">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-multiline is-centered">
              <div className="column is-8 has-text-centered">
                <h1 className="title">Interessado em saber como está a sua reputação na internet? Solicite o seu diagnóstico gratuito agora mesmo!</h1>
              </div>
            </div>
            <br />
            <div className="columns is-centered">
              <div className="column is-full-mobile is-half-tablet is-3-desktop">
                <div className="button is-large is-primary is-uppercase">
                  Entre em contato
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-footer" />
      <footer id="footer" className="footer">
        <div className="container">
          <div className="columns">
            <div className="column is-2">
              <img src={logoVeron} height={50} alt="" />
            </div>
          </div>
          <div className="columns">
            <div className="column is-2">
              <span className="is-spaced is-uppercase" style={{ fontSize: 12 }}>Veron Tecnologia © 2021</span>
            </div>
            <div className="column" />
            <div className="column is-3">
              <div className="columns">
                {[
                  {
                    url: '#',
                    image: facebook,
                  },
                  {
                    url: '#',
                    image: twitter,
                  },
                  {
                    url: '#',
                    image: instagram,
                  },
                ].map((item) => (
                  <div className="column is-4">
                    <a href={item.url} rel="no">
                      <img src={item.image} height={23} width={23} alt="" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
