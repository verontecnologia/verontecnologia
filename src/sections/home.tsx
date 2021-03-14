/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import { Options } from 'react-lottie';
import load from '@loadable/component';

import * as animationData from '../animations/home.json';

import simbol from '../svgs/simbol-veron.svg';
import video from '../videos/bg.mp4';

const Lottie = load(() => import('react-lottie'));

export default function Home({ loading = false, setModal = (b:boolean) => {} }) {
  const [active, setActive] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>();

  React.useEffect(() => {
    console.log(videoRef.current?.NETWORK_LOADING);
  }, [videoRef.current]);

  React.useEffect(() => {
    videoRef.current.play();
  }, [loading]);

  const animation = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMinYMax slice',

    },
  } as Options;


  return (
    <div id="home" className="hero has-video-background is-fullheight is-dark">
      <video preload="auto" ref={videoRef} muted autoPlay={false} loop>
        <source src={video} type="video/mp4" />
      </video>

      <div className="lottie">
        <Lottie
          isPaused={loading}
          options={animation}
        />
      </div>

      <div className="hero-head">
        <nav id="navbar" className="navbar" style={{ background: 'transparent' }}>
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <img src={simbol} alt="Logo" />
              </a>
              <a
                onClick={() => setActive(!active)}
                role="button"
                className={`navbar-burger2 ${active && 'is-active'}`}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className={`navbar-menu ${active && 'is-active'}`}>
              <div className="navbar-end">
                <div className="navbar-item">
                  <a onClick={() => setActive(false)} href="#about">Sobre nós</a>
                </div>
                <div className="navbar-item">
                  <a onClick={() => setActive(false)} href="#how-works">Como funciona</a>
                </div>
                <div className="navbar-item">
                  <a onClick={() => setActive(false)} href="#team">Nosso time</a>
                </div>
                <div className="navbar-item">
                  <a onClick={() => {
                    setActive(false);
                    setModal(true);
                  }}
                  >Contato
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/*  */}
      <div className="hero-body">
        <div className="container ">
          <div className="container is-max-widescreen">
            <h2 className="subtitle">Somos a Veron Tecnologia</h2>
            <h1 className="title is-1">
              Proteja a sua reputação <br />
              com alta tecnologia<span className="has-text-primary">.</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <div className="container">
          <a href="#how-works" className="more">
            <div className="arrow" />
            <span>Saiba como</span>
          </a>
        </div>
      </div>


    </div>
  );
}
