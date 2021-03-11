import React from 'react';

import logoVeron from '../svgs/logo-veron.svg';
import facebook from '../svgs/facebook.svg';
import twitter from '../svgs/twitter.svg';
import instagram from '../svgs/instagram.svg';

export default function Home() {
  return (
    <>

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
              <div className="columns is-mobile">
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
                  <div className="column is-3">
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
